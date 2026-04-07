import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike's Every Task",
  description: "Professional plumbing, HVAC & electrical services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen antialiased`}
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)" }}
      >
        {children}
      </body>
    </html>
  );
}
