import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Awokoya Mariam Omotolani | Accountant & Financial Analyst",
  description: "Professional portfolio of Awokoya Mariam Omotolani - Accountant, Financial Analyst, and Administrative Professional with expertise in financial reporting, payroll processing, and administrative support.",
  keywords: "accountant, financial analyst, administrative professional, financial reporting, payroll processing, Nigeria",
  authors: [{ name: "Awokoya Mariam Omotolani" }],
  creator: "Awokoya Mariam Omotolani",
  openGraph: {
    title: "Awokoya Mariam Omotolani | Professional Portfolio",
    description: "Detail-oriented Accounting professional with B.Sc in Accounting and hands-on experience across financial reporting, payroll processing, and administrative support.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awokoya Mariam Omotolani | Accountant & Financial Analyst",
    description: "Professional portfolio showcasing accounting expertise and administrative excellence.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#6366f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}