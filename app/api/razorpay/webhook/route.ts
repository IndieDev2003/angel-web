import crypto from "crypto";
import { createSupabaseServerClient } from "@/lib/supabase-client";

export async function POST(request: Request) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature");
    const secret = process.env.RAZORPAY_KEY_SECRET;

    if (!secret || !signature) {
      return Response.json({ success: false, error: "Missing Razorpay signature or secret" }, { status: 400 });
    }

    const expected = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    const isValid = expected.length === signature.length && crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

    if (!isValid) {
      return Response.json({ success: false, error: "Invalid Razorpay signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const supabase = createSupabaseServerClient();

    if (supabase && event?.payload?.payment?.entity) {
      const payment = event.payload.payment.entity;
      const userId = payment.notes?.user_id ?? null;
      const paymentRecord = {
        user_id: userId,
        razorpay_order_id: payment.order_id,
        razorpay_payment_id: payment.id,
        amount: Number(payment.amount || 0) / 100,
        status: payment.status,
      };

      await supabase.from("payments").insert([paymentRecord]);

      if (userId) {
        await supabase
          .from("profiles")
          .update({ subscription_status: "pro", updated_at: new Date().toISOString() })
          .eq("id", userId);
      }
    }

    return Response.json({ success: true, received: true });
  } catch (error) {
    console.error("Razorpay webhook processing failed:", error);
    return Response.json({ success: false, error: "Webhook verification failed" }, { status: 500 });
  }
}
