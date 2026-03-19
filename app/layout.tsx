import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vo Huy Hoang | Backend Developer",
  description:
    "Portfolio of Vo Huy Hoang – Backend Developer specializing in Java Spring Boot, Python FastAPI, microservices, and cloud deployment.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Python",
    "FastAPI",
    "Portfolio",
    "Vo Huy Hoang",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased transition-colors duration-300" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
