import Link from "next/link";

import { Button } from "@/components/ui/button";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950">
      <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 font-bold text-slate-950">B</div>
            <div>
              <p className="text-base font-semibold text-white">BandWise</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/tests">Tests</Link>
            <Link href="/pricing">Pricing</Link>
          </nav>

          <Link href="/login">
            <Button variant="secondary">Logout</Button>
          </Link>
        </div>
      </header>

      <main className="container-shell section-padding">{children}</main>
    </div>
  );
}
