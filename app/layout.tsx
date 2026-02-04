import type { Metadata } from "next";
import { Bodoni_Moda, Lato } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Glorious Walls | Premium Installation",
  description: "Artistry in every roll.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bodoni.variable} ${lato.variable} bg-cream text-navy-900 antialiased selection:bg-rose-300 selection:text-navy-900`}
      >
        {children}
      </body>
    </html>
  );
}
