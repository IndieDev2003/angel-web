export async function POST(request: Request) {
  try {
    const body = await request.json();
    const essayText = body?.essay || "The chart shows a clear rise in online learning usage between 2015 and 2024. Country A increased the most, followed by Country B and Country C. Overall, the data suggests a strong shift toward digitalization in education.";

    const words = essayText.trim().split(/\s+/).filter(Boolean).length;
    const band = Math.min(8.9, Math.max(5.5, 6.5 + (words > 180 ? 0.75 : 0.25) + (essayText.includes("overall") ? 0.25 : 0)));

    return Response.json({
      success: true,
      score: {
        overallBand: Number(band.toFixed(1)),
        taskResponse: 8,
        coherenceAndCohesion: 7,
        lexicalResource: 8,
        grammaticalRange: 7,
      },
      feedback: {
        strengths: [
          "Your response outlines the key trend clearly.",
          "You present comparisons in a logical order.",
        ],
        improvements: [
          "Add more precise numerical comparison language.",
          "Use a stronger concluding statement with a direct summary.",
        ],
      },
    });
  } catch (error) {
    console.error("Writing evaluation failed:", error);
    return Response.json({ success: false, error: "AI evaluation failed" }, { status: 500 });
  }
}
