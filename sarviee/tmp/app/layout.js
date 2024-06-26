import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React from "react";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}