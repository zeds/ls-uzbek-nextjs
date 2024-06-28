import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Tags from "@/components/Tags";
import Articles from "@/components/Articles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-dvh bg-sky-300">
          <Header />
          <Tags />

          <Articles />
          <Navbar />

          <main className="fixed top-[56px] left-0 bottom-0 w-full border-4 border-blue-800">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
