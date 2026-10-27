export async function createRazorpayOrder() {
  const res = await fetch("/api/razorpay/create-order", { method: "POST" });
  return res.json();
}
