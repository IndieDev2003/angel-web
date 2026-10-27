import Razorpay from "razorpay";

export async function POST() {
  try {
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return Response.json({
        success: true,
        orderId: "demo_order_123",
        amount: 1900,
        currency: "INR",
        key: "demo",
        message: "Demo mode enabled because Razorpay credentials are not configured.",
      });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: 1900,
      currency: "INR",
      receipt: "bandwise_pro_001",
      payment_capture: 1,
    });

    return Response.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    return Response.json({ success: false, error: "Unable to create Razorpay order." }, { status: 500 });
  }
}
