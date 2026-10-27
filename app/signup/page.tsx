import Link from "next/link";

import { AuthForm } from "@/components/auth/auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="hidden lg:block">
          <Card className="border-slate-700 bg-slate-900/70">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Create your IELTS progress plan</CardTitle>
              <CardDescription className="text-slate-300">
                Track ongoing performance, unlock Pro grades, and stay consistent with your daily mock practice.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Plan</p>
                <p className="mt-2 text-xl font-semibold text-white">Pro membership</p>
                <p className="mt-2 text-sm">Unlimited tests, detailed scoring, speaking transcripts, and deeper AI explanations.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <AuthForm mode="signup" />
      </div>
    </main>
  );
}
