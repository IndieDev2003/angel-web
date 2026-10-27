import Link from "next/link";

import { AuthForm } from "@/components/auth/auth-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-10">
      <div className="grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="hidden lg:block">
          <Card className="border-slate-700 bg-slate-900/70">
            <CardHeader>
              <CardTitle className="text-3xl text-white">BandWise</CardTitle>
              <CardDescription className="text-slate-300">
                Study with structured IELTS practice, AI feedback, and measurable improvement.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-4">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Daily focus</p>
                <p className="mt-2 text-xl font-semibold text-white">Reading Sprint</p>
                <p className="mt-2 text-sm">Target 7.5+ with timed text analysis and error review.</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Reading</p>
                  <p className="mt-2 text-2xl font-bold text-white">82%</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Writing</p>
                  <p className="mt-2 text-2xl font-bold text-white">7.0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <AuthForm mode="login" />
      </div>
    </main>
  );
}
