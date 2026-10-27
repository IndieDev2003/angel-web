import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "For daily practice and light test tracking.",
    features: ["3 mock tests / month", "Basic feedback", "Limited writing prompts"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    description: "Unlimited IELTS practice with deeper AI evaluation.",
    features: ["Unlimited tests", "AI writing grading", "Speaking AI analysis", "Detailed band reports"],
    highlighted: true,
  },
];

export default function PricingPage() {
  return (
    <main className="container-shell section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Pricing</p>
        <h1 className="mt-3 text-4xl font-black text-white">Choose your practice plan</h1>
        <p className="mt-4 text-slate-300">Access realistic IELTS practice, instant improvements, and the confidence to aim higher.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {plans.map((plan) => (
          <Card key={plan.name} className={`border ${plan.highlighted ? "border-violet-500 bg-violet-500/5" : "border-slate-700 bg-slate-900/70"}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                {plan.highlighted && <span className="rounded-full bg-violet-500 px-2 py-1 text-xs text-white">Best value</span>}
              </div>
              <CardDescription className="text-slate-300">{plan.description}</CardDescription>
              <p className="mt-4 text-4xl font-black text-white">{plan.price}</p>
            </CardHeader>

            <CardContent className="space-y-4">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span>{feature}</span>
                </div>
              ))}

              <Link href={plan.highlighted ? "/api/razorpay/create-order" : "/signup"}>
                <Button className="mt-4 w-full" size="lg">
                  {plan.highlighted ? "Upgrade to Pro" : "Start free"}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
