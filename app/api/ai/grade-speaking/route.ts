export async function POST(request: Request) {
  const payload = await request.json();

  const transcript = payload?.transcript || "I enjoy visiting the city park because it helps me relax and reset after a busy week.";

  return Response.json({
    success: true,
    score: {
      pronunciation: 8.1,
      fluency: 7.8,
      lexicalResource: 7.9,
      overall: 7.9,
    },
    feedback: {
      strengths: [
        "You spoke with a steady rhythm and clear meaning.",
        "Your vocabulary is appropriate and accurate for the task.",
      ],
      improvements: [
        "Add more natural linking language to sound more connected.",
        "Try to extend your answers with a little more detail and examples.",
      ],
    },
    transcript,
  });
}
