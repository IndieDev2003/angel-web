import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BandWise | IELTS Practice",
  description: "AI-powered IELTS prep platform with reading, writing, listening, and speaking modules.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
