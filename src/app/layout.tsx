import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const inter = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethereal",
  description: "An online store web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("bg-white text-slate-900", inter.className)}>
      <link rel="icon" href="favicon.ico" sizes="any" />

      <body className="min-h-screen bg-slate-50 relative pb-24">
        <Navbar />
        <div className="container max-w-7xl mx-auto h-full pt-24">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
