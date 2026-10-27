import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature || !process.env.RAZORPAY_KEY_SECRET) {
      return Response.json({ success: false, error: "Missing signature or Razorpay secret" }, { status: 400 });
    }

    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const isValid = crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));

    if (!isValid) {
      return Response.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    return Response.json({ success: true, received: true });
  } catch (error) {
    return Response.json({ success: false, error: "Webhook verification failed" }, { status: 500 });
  }
}
