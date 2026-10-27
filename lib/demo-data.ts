export type StatItem = {
  label: string;
  value: string;
  change: string;
};

export const stats: StatItem[] = [
  { label: "Total tests", value: "42", change: "+8 this month" },
  { label: "Average band", value: "7.3", change: "+0.4 since last week" },
  { label: "Writing accuracy", value: "81%", change: "+5%" },
  { label: "Speaking fluency", value: "7.8", change: "+0.6" },
];

export const moduleCards = [
  { label: "Reading", score: "8.0", status: "Strong accuracy" },
  { label: "Listening", score: "7.4", status: "Steady progress" },
  { label: "Writing", score: "7.1", status: "Needs expansion" },
  { label: "Speaking", score: "7.8", status: "Clear delivery" },
];

export const recentAttempts = [
  { id: 1, title: "Reading Mock #8", date: "Today · 9:30 AM", band: "7.6", feedback: "Good reasoning" },
  { id: 2, title: "Writing Task 2", date: "Yesterday · 7:15 PM", band: "7.1", feedback: "Focused improvements" },
  { id: 3, title: "Speaking Part 3", date: "Mon · 4:00 PM", band: "7.9", feedback: "Excellent fluency" },
];
