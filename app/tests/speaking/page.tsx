"use client";

import { useState } from "react";
import { Mic, Square, UploadCloud } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SpeakingPage() {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <main className="container-shell section-padding">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-amber-300">Speaking Module</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Part 1, 2 & 3</h1>
        </div>
        <Badge variant="outline" className="w-fit border-amber-500/30 bg-amber-500/10 text-amber-200">
          {isRecording ? "Recording" : "Ready"}
        </Badge>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Prompt</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-300">
            <p>
              Describe a place you enjoy visiting for relaxation. You should say where it is, how often you go there, what you usually do there, and explain why it helps you feel calm.
            </p>
            <div className="flex items-center gap-3">
              <Button variant={isRecording ? "destructive" : "default"} className="gap-2" onClick={() => setIsRecording((value) => !value)}>
                {isRecording ? <Square className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                {isRecording ? "Stop" : "Record"}
              </Button>
              <Button variant="secondary" className="gap-2">
                <UploadCloud className="h-4 w-4" />
                Upload audio
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900/80">
          <CardHeader>
            <CardTitle className="text-white">Recording status</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950">
              <div className={`h-24 w-24 rounded-full ${isRecording ? "animate-pulse bg-gradient-to-br from-amber-500 to-red-500" : "bg-slate-800"}`} />
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300">
              <p>Audio quality: {isRecording ? "Live capture enabled" : "Awaiting recording"}</p>
              <p className="mt-2">Transcript status: Waiting for speech-to-text sync</p>
            </div>
            <Button className="w-full">Submit speaking response</Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
