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
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "2番目",
      avatar:
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "3番目",
      avatar:
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "4番目",
      avatar:
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "5番目",
      avatar:
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "6番目",
      avatar:
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "7番目",
      avatar:
        "https://yt3.googleusercontent.com/apPV5M2zqC6uBx-RqDSpuOXEKjR7pNYFhXyQwExgBo7BQmGK8ww52PglQlZCMEExEIPxTssUjA=s160-c-k-c0x00ffffff-no-rj",
    },
  ]);
  return (
    <div className="bg-red-300 w-full h-screen pt-[56px] flex gap-2">
      {articles.map((item, index) => (
        <div key={index}>
          <Article title={item.title} avatar={item.avatar} />
          {/* <img className="w-[60px]" src={`${item.avatar}`} alt="image"></img>
          <div>{item.title}</div>*/}
        </div>
      ))}
    </div>
  );
}
