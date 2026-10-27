export async function POST(request: Request) {
  const payload = await request.json();

  const feedback = {
    overallBand: 7.6,
    taskResponse: 8,
    coherence: 7,
    lexicalResource: 8,
    grammar: 7,
    strengths: [
      "Your answer addresses the main trends clearly and logically.",
      "You use a range of sentence structures with good clarity.",
    ],
    improvements: [
      "Develop your comparisons with more specific data references.",
      "Include a clearer conclusion linking the main patterns.",
    ],
  };

  return Response.json({ success: true, feedback, message: "Demo writing evaluation complete." });
}
