"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Article from "@/components/Article";

export default function Home() {
  const [articles, setArticles] = useState([
    {
      title: "1番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "2番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "3番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "4番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "5番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "6番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "7番目",
      avatar:
        "https://yt3.googleusercontent.com/_At4vv75tQB5vvnUR0s2WY-IQfqo6h1Bcjba-tf4gox-As_cTI2gvK_Vr52-Gapn7PT4MxrUsA=s160-c-k-c0x00ffffff-no-rj",
    },
  ]);

  return (
    <div className="bg-red-300 w-full h-screen flex gap-2 sm:hoge xl:fuga">
      {articles.map((item, index) => (
        <div key={index}>
          <Article title={item.title} avatar={item.avatar} />
        </div>
      ))}
    </div>
  );
}
