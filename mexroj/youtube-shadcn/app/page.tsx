"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import "./global.css";

type articleProp = {
  img_url: string;
  avatar_url: string;
  title: string;
  user_name: string;
  stats: string;
};

const list = [
  "すべて",
  "ライブ",
  "オーディオブック",
  "観光",
  "フィットネス",
  "最近アップロードされた動画",
  "視聴済み",
  "新しい動画の発見",
];

const navItems = [
  { title: "ホーム", img: "./images/yt-home.svg" },
  { title: "ショート", img: "./images/yt-short.svg" },
  { title: "登録チャンネル", img: "./images/yt-r-channel.svg" },
  { title: "YouTube Music", img: "./images/yt-r-channel.svg" },
  { title: "", img: "" },
  { title: "チャンネル", img: "./images/yt-channel.svg" },
  { title: "履歴", img: "./images/yt-history.svg" },
  { title: "再生リスト", img: "./images/yt-play-list.svg" },
  { title: "再生した動画", img: "./images/yt-my-movie.svg" },
];

export default function Home() {
  const [dataSource, setDataSource] = useState<articleProp[]>([]);

  const supabase = createClient();

  const getArticles = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from("articles")
        .select("*")
        .order("id", { ascending: false });

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log("data = ", data);
        setDataSource(data);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      //   setLoading(false)
    }
  }, []);

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="w-full h-full flex pt-14 hidden-scrollbar">
      {/* navbar */}
      <nav className="hidden md:flex md:w-[72px] md:py-0 md:px-1  md:flex-col fixed lg:w-[240px] left-0 top-14 bottom-0 z-20 bg-white  ">
        <ul className="pl-[10px] ">
          {navItems.map((item, index) => (
            <>
              {item.title === "" ? (
                <div className="border-t-[1px] border-solid border-gray-200 mt-3 pt-3" />
              ) : (
                <li
                  key={index}
                  className="flex lg:text-[14px] font-medium lg:leading-4 text-[rgba(15,15,15,1)] lg:p-[10px]  items-center rounded-[10px] lg:gap-6 hover:bg-gray-200 md:flex-col md:justify-center  md:gap-0 md:text-[10px] md:leading-[14px] md:rounded-[10px] md:p-1  lg:flex-row lg:justify-start"
                >
                  <img src={item.img} alt="home" className="w-6 h-6 mb-[6px]" />
                  <span className="title ">{item.title} </span>
                </li>
              )}
            </>
          ))}
        </ul>
      </nav>

      {/* main */}
      <div>
        {/* tags */}
        <ul className="fixed z-10 top-14 h-14 w-full items-center flex sm:pl-0 md:pl-20 lg:pl-60 overflow-y-scroll hidden-scrollbar bg-white">
          {list.map((item, index) => (
            <li key={index}>
              <Button>{item}</Button>
            </li>
          ))}
        </ul>

        {/* articles */}
        <div className="grid gap-3  px-4 md:pl-20 lg:pl-60 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 hidden-scrollbar overflow-y-scroll">
          {dataSource.map((item, index) => (
            <div key={index}>
              <Link href={"./videoplay"}>
                <div className="relative ">
                  <Image
                    width={0}
                    height={0}
                    src={item.img_url}
                    alt="hero"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
                    10:00
                  </span>
                </div>
              </Link>

              <div className="flex gap-[10px] mt-3 mr-2 p-1">
                <Image
                  width={0}
                  height={0}
                  src={item.avatar_url}
                  alt="avatar"
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
                    {item.title}
                    {/* Free BGM "I'll be sleepy after a snack" 2 hours ver -
                            Kawaii Afternoon Break [NoCopyrightMusic] */}
                  </div>
                  <div className="line-clamp-1 text-sm font-normal text-[rgba(15,15,15,1)]">
                    {item.user_name}
                  </div>
                  <div className="line-clamp-1 text-sm font-normal text-[rgba(96,96,96,1)]">
                    {item.stats}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}