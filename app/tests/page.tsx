import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const tests = [
  { title: "Reading Practice", description: "Timed passage + academic question set", href: "/tests/reading", accent: "from-cyan-500 to-blue-500" },
  { title: "Listening Practice", description: "Audio tasks synced to realistic exam timing", href: "/tests/listening", accent: "from-violet-500 to-pink-500" },
  { title: "Writing Lab", description: "Essay writing + AI feedback on IELTS criteria", href: "/tests/writing", accent: "from-emerald-500 to-teal-500" },
  { title: "Speaking Studio", description: "Record responses and review pronunciation quality", href: "/tests/speaking", accent: "from-amber-500 to-orange-500" },
];

export default function TestsPage() {
  return (
    <main className="container-shell section-padding">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Test Center</p>
        <h1 className="mt-3 text-4xl font-black text-white">Choose a module</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {tests.map((test) => (
          <Card key={test.title} className="overflow-hidden border-slate-700 bg-slate-900/80">
            <div className={`h-1.5 bg-gradient-to-r ${test.accent}`} />
            <CardHeader>
              <CardTitle className="text-xl text-white">{test.title}</CardTitle>
              <CardDescription className="text-slate-300">{test.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={test.href}>
                <Button className="w-full">Open module</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
