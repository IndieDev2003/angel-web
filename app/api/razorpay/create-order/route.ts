import crypto from "crypto";
import Razorpay from "razorpay";

export async function POST() {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return Response.json({
        success: true,
        demo: true,
        orderId: "demo_order_123",
        amount: 1900,
        currency: "INR",
        message: "Demo Razorpay order created because credentials are missing.",
      });
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: 1900,
      currency: "INR",
      receipt: `bandwise_pro_${Date.now()}`,
      payment_capture: 1,
    });

    return Response.json({
      success: true,
      demo: false,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: keyId,
    });
  } catch (error) {
    console.error("Razorpay order creation failed:", error);
    return Response.json({ success: false, error: "Unable to create Razorpay order" }, { status: 500 });
  }
}
