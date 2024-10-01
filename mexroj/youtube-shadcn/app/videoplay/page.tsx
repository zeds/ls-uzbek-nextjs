"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type articleProp = {
  img: string;
  title: string;
  username: string;
  stats: string;
};
export default function Page() {
  const [dataSource, setDataSource] = useState<articleProp[]>([]);

  const supabase = createClient();

  const getArticles = useCallback(async () => {
    try {
      const { data, error, status } = await supabase
        .from("recommends")
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

  const tagName = [
    { name: "すべて" },
    { name: "音楽" },
    { name: "ライブ" },
    { name: "オーディオブック" },
    { name: "フィットネス" },
    { name: "最近アップロードされた動画" },
    { name: "視聴済み" },
    { name: "新しい動画の発見" },
  ];

  return (
    <div className=" grid grid-cols-2 ">
      <div className=" p-4 ">
        <img src="https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg" alt="video" />
        <div className="text-2xl">
          ИСТОРИИ СПАСАТЕЛЯ! Страшные истории на ночь.Страшилки на ночь.
        </div>
        <div className="flex">
          <img
            src="https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw"
            alt="avatar"
            className="w-9 h-9 rounded-full"
          />
          <div>
            <div>DARK~PHIL</div>
            <div>52K views 2 weeks ago</div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* tags */}
        <div className="fixed  z-10 top-14 h-14 w-full items-center flex  bg-white">
          <ul className="fixed w-full flex md:pl-[80px] xl:pl-[240px] gap-3 p-1 z-10 bg-white  overflow-y-scroll hidden-scrollbar">
            {tagName.map((item, index) => (
              <li key={index}>
                <Button className="bg-stone-400">{item.name}</Button>
              </li>
            ))}
          </ul>
        </div>

        {/* recomments */}
        {dataSource.map((item, index) => (
          <div key={index} className="flex pt-14">
            <div className="relative ">
              <Image
                width={0}
                height={0}
                src={item.img}
                alt="hero"
                sizes="100vw"
                style={{ width: "400px", height: "auto" }}
              />
              <div className="absolute bottom-[5px] right-1 bg-[rgba(0,0,0,0.6)] text-white p-[5px] rounded-[5px]">
                10:00
              </div>
            </div>

            <div className=" mt-3 mr-2 p-1">
              <div>
                <div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
                  {item.title}
                  {/* Free BGM "I'll be sleepy after a snack" 2 hours ver -
                            Kawaii Afternoon Break [NoCopyrightMusic] */}
                </div>
                <div className="line-clamp-1 text-sm font-normal text-[rgba(15,15,15,1)]">
                  {item.username}
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
  );
}
