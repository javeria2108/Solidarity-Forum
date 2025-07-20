// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Improves UX on slow networks
});

export const metadata: Metadata = {
  title: "Solidarity Forum - Unite Your Skills for Gaza",
  description:
    "Connect your expertise with those who need it most. From medical counseling to educational support, your skills can make a real difference.",
  keywords: [
    "volunteer",
    "gaza",
    "humanitarian aid",
    "medical support",
    "mental health",
    "education",
  ],
  authors: [{ name: "Solidarity Forum Team" }],
  openGraph: {
    title: "Solidarity Forum - Unite Your Skills for Gaza",
    description:
      "Connect your expertise with those who need it most. Join thousands of volunteers making a difference.",
    type: "website",
    siteName: "Solidarity Forum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solidarity Forum - Unite Your Skills for Gaza",
    description:
      "Connect your expertise with those who need it most. Join thousands of volunteers making a difference.",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#059669",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
