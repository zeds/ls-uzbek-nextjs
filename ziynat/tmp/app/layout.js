import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.ico",
        href: "/favicon.ico",
      },
    ],
  },
  title: "Next.js Lesson",
  description: "Generated by create next app",
};
const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <div>
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </div>
    </html>
  );
}
