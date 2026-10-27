"use client";

import { useState } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

const writingTask = `The chart below shows the percentage of students in three countries who used online learning platforms in 2015 and 2024.`;

export default function WritingPage() {
  const [essay, setEssay] = useState(`The chart shows a significant rise in online learning platform usage across three countries between 2015 and 2024. In Country A, the proportion grew from 25% to 75%, which suggests a strong shift toward digital learning. Country B increased from 20% to 60%, while Country C rose from 10% to 55%. Overall, the trend indicates that online education became far more common in the period studied.`);

  return (
    <main className="container-shell section-padding">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">Writing Module</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Task 1 + Task 2</h1>
        </div>
        <div className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">Timer: 32:10</div>
      </div>

      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm text-slate-400">
          <span>Word progress</span>
          <span>220 / 300</span>
        </div>
        <Progress value={73} className="h-2" />
      </div>

      <Alert className="mb-6 border-amber-500/30 bg-amber-500/10 text-amber-200">
        <AlertTitle>Writing reminder</AlertTitle>
        <AlertDescription>Keep your response coherent, accurate, and well structured. Focus on task response and lexical variety.</AlertDescription>
      </Alert>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Task prompt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <p>{writingTask}</p>
            <p className="text-sm text-slate-400">Write at least 150 words. Summarise the main changes and highlight key comparisons.</p>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Essay response</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea value={essay} onChange={(e) => setEssay(e.target.value)} className="min-h-[300px] resize-none text-base" />
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Words: {essay.split(/\s+/).filter(Boolean).length}</span>
              <span>Characters: {essay.length}</span>
            </div>
            <Button className="w-full">Submit for AI evaluation</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
