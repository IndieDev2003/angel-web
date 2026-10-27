export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const transcript = payload?.transcript || "I enjoy visiting the park because it helps me relax after long study sessions.";

    const averageScore = 7.8;
    const wording = transcript.length > 160 ? 0.5 : 0.2;

    return Response.json({
      success: true,
      score: {
        pronunciation: Number((averageScore + wording).toFixed(1)),
        fluency: 7.7,
        lexicalResource: 8.1,
        overall: Number((averageScore + 0.2).toFixed(1)),
      },
      feedback: {
        strengths: [
          "You speak with clear pacing and easy-to-follow ideas.",
          "Your vocabulary is varied and relevant to the prompt.",
        ],
        improvements: [
          "Add more examples to deepen your answer.",
          "Use a little more natural linking to connect ideas smoothly.",
        ],
      },
      transcript,
    });
  } catch (error) {
    console.error("Speaking evaluation failed:", error);
    return Response.json({ success: false, error: "AI evaluation failed" }, { status: 500 });
  }
}
