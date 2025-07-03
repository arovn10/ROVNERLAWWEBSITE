import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rovner Law - Premier Personal Injury Lawyers | Philadelphia, PA",
  description: "Over 40 years of experience fighting for clients in Philadelphia. Personal injury, auto accidents, medical malpractice, and more. Free consultation. No fee if no recovery.",
  keywords: "personal injury lawyer, Philadelphia attorney, auto accident lawyer, medical malpractice, Rovner Law"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
