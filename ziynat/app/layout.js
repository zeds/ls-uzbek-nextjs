import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: [
      {
        media: "prefers-color-scheme: light",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
  title: "Youtube Lesson",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}
