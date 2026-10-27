import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { stats, recentAttempts, moduleCards } from "@/lib/demo-data";

export default function DashboardPage() {
  return (
    <DashboardShell>
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Overview</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Your IELTS dashboard</h1>
        </div>
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
          Pro active
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-panel p-5">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-2 text-xs text-slate-400">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <div className="glass-panel p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Progress trend</h2>
            <span className="text-sm text-slate-400">Last 6 attempts</span>
          </div>

          <div className="flex h-52 items-end gap-2">
            {[50, 55, 60, 63, 68, 72].map((height, index) => (
              <div key={index} className="flex-1">
                <div
                  className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500 to-violet-500"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel p-5">
          <h2 className="text-xl font-semibold text-white">Modules</h2>
          <div className="mt-4 space-y-3">
            {moduleCards.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-700 bg-slate-900/70 p-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-white">{item.label}</p>
                  <span className="text-sm text-cyan-300">{item.score}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{item.status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 glass-panel p-5">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Recent attempts</h2>
          <span className="text-sm text-slate-400">Updated today</span>
        </div>

        <div className="space-y-3">
          {recentAttempts.map((attempt) => (
            <div key={attempt.id} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-900/50 p-4">
              <div>
                <p className="font-medium text-white">{attempt.title}</p>
                <p className="text-sm text-slate-400">{attempt.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-cyan-500/10 px-2 py-1 text-sm text-cyan-300">{attempt.band}</span>
                <span className="text-sm text-slate-400">{attempt.feedback}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
