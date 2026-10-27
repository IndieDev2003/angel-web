import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, PlayCircle, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  "AI-driven speaking and writing feedback",
  "Realistic reading, listening, and mock test flow",
  "Free and Pro plans with instant upgrade flow",
  "Progress tracking and band improvement analytics",
];

const stats = [
  { label: "Mock Tests", value: "120+" },
  { label: "Avg. uplift", value: "+1.8" },
  { label: "AI feedback", value: "24/7" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <header className="container-shell py-6">
        <nav className="glass-panel flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 font-bold text-slate-950">
              B
            </div>
            <div>
              <p className="text-lg font-semibold text-white">BandWise</p>
              <p className="text-xs text-slate-400">IELTS Practice</p>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="#features">Features</Link>
            <Link href="#modules">Modules</Link>
            <Link href="#pricing">Pricing</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          </div>
        </nav>
      </header>

      <section className="container-shell pb-16 pt-8 lg:pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              <Sparkles className="h-3.5 w-3.5" />
              AI-assisted IELTS mastery
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-6xl">
              Practice smarter for your next IELTS band.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              BandWise combines realistic mock exams, instant scoring, writing feedback, and speaking analysis into one calm, confident study flow.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  Start free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary">
                  Explore dashboard
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.label} className="glass-panel p-4">
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel overflow-hidden">
            <div className="space-y-6 p-5">
              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900 p-4">
                <div>
                  <p className="text-sm text-slate-400">Current score</p>
                  <p className="mt-2 text-3xl font-bold text-white">7.5</p>
                </div>
                <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-sm font-medium text-emerald-300">
                  +0.5 this week
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">Reading accuracy</p>
                  <span className="text-cyan-300">82%</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">Writing quality</p>
                  <span className="text-violet-300">7.0</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <BarChart3 className="h-4 w-4" />
                    <span className="text-sm">Progress</span>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-white">14 tests</p>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-900 p-4">
                  <div className="flex items-center gap-2 text-violet-300">
                    <PlayCircle className="h-4 w-4" />
                    <span className="text-sm">Speaking</span>
                  </div>
                  <p className="mt-4 text-2xl font-bold text-white">12 recordings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section-padding container-shell">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Why students choose BandWise</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Everything needed to reach your target score</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((feature) => (
            <Card key={feature} className="border-slate-700 bg-slate-900/70">
              <CardHeader>
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </CardHeader>
              <CardContent>
                <p className="text-base font-medium text-white">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="modules" className="section-padding container-shell">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Core IELTS modules</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Practice each section with real exam flow</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Reading", "Passage analysis + instant objective grading"],
            ["Listening", "Audio-based tasks with timestamp sync"],
            ["Writing", "Task 1 & 2 with rubric-based AI feedback"],
            ["Speaking", "Mic recordings and speech evaluation"],
          ].map(([title, description]) => (
            <Card key={title} className="border-slate-700 bg-slate-900/70">
              <CardHeader>
                <CardTitle className="text-xl text-white">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
