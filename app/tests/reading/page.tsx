import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const questions = [
  { prompt: "The writer argues that technology in education is mainly beneficial because it improves access.", options: ["True", "False", "Not Given"], answer: "True" },
  { prompt: "The passage suggests that all teachers are comfortable with digital tools.", options: ["True", "False", "Not Given"], answer: "False" },
  { prompt: "The author mentions a specific country where blended learning has become widespread.", options: ["True", "False", "Not Given"], answer: "Not Given" },
];

export default function ReadingPage() {
  return (
    <main className="container-shell section-padding">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Reading Module</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Academic Reading Practice</h1>
        </div>
        <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">Time left: 58:12</div>
      </div>

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
          <span>Progress</span>
          <span>25%</span>
        </div>
        <Progress value={25} className="h-2" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Passage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 text-slate-300">
            <p>
              Technology has transformed education in many ways, yet its role remains debated. While digital tools can widen access, especially for remote learners, they are not a guaranteed shortcut to better outcomes. In many institutions, blended learning has been used to combine in-person teaching with online resources. The result is often a more flexible environment, though the strength of the experience depends heavily on teacher training, institutional support, and the quality of content.
            </p>
            <p>
              The strongest evidence suggests that technology works best when it supports pedagogy rather than replaces it. Students may access recorded lectures or interactive platforms, but they still need critical feedback, guided discussion, and structured tasks to improve. This means technology is most successful when used strategically rather than as a substitute for teaching.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {questions.map((question, index) => (
              <div key={index} className="rounded-2xl border border-slate-700 bg-slate-950/70 p-4">
                <p className="mb-3 font-medium text-white">
                  {index + 1}. {question.prompt}
                </p>
                <div className="space-y-2">
                  {question.options.map((option) => (
                    <label key={option} className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900 p-2 text-sm text-slate-200">
                      <input type="radio" name={`q${index}`} className="accent-cyan-500" />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <Button className="w-full">Submit reading answers</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
