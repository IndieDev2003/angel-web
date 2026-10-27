import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const listeningQuestions = [
  { label: "What was the main reason for the changes in campus services?", answer: "Budget cuts" },
  { label: "Which facility was expanded according to the speaker?", answer: "Library study rooms" },
  { label: "When will the new policy be reviewed?", answer: "At the end of the semester" },
];

export default function ListeningPage() {
  return (
    <main className="container-shell section-padding">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Listening Module</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Academic Listening</h1>
        </div>
        <div className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">Time left: 14:40</div>
      </div>

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
          <span>Audio progress</span>
          <span>40%</span>
        </div>
        <Progress value={40} className="h-2" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Audio player</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Lecture clip</span>
                <span>00:32 / 01:32</span>
              </div>
              <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[40%] rounded-full bg-gradient-to-r from-violet-400 to-pink-500" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <Button variant="secondary">Play</Button>
                <Button variant="secondary">Pause</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Completion tasks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {listeningQuestions.map((question, index) => (
              <div key={index} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="mb-3 font-medium text-white">{index + 1}. {question.label}</p>
                <input className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-white outline-none ring-0 placeholder:text-slate-500" placeholder="Type your answer" />
              </div>
            ))}
            <Button className="w-full">Submit audio responses</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
