import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Josuan | Full Stack Developer",
  description:
    "Portfolio of Josuan Leonardo Hulom, a Full Stack Developer specializing in React.js, Python Quart, and Flutter. Exploring modern web and mobile solutions with a focus on logic formulation and problem solving.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Python",
    "Flutter",
    "Josuan Leonardo Hulom",
    "Software Engineer Philippines",
  ],
  authors: [{ name: "Josuan Leonardo Hulom" }],
  openGraph: {
    title: "Josuan | Full Stack Developer",
    description:
      "Building modern web and mobile experiences with React, Python, and Flutter.",
    url: "https://josuan.cv",
    siteName: "Josuan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
