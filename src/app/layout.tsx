import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Manthan Narang",
    default: "Manthan Narang  ",
  },
  description: "Check out my smart portfolio site with custom ai chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
        <Navbar />
          <main className="px-3 max-w-3xl mx-auto py-10">{children}</main>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
