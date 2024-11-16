import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-900 text-slate-200 p-4 md:p-8 font-mono">
        <div className="max-w-4xl mx-auto space-y-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
