"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

type articleProp = {
  img_url: string;
  avatar_url: string;
  title: string;
  user_name: string;
  stats: string;
};

export default function Articles() {
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
    // <div className="fixed z-10 top-14 h-14 w-full items-center flex sm:pl-0 md:pl-20 lg:pl-60 bg-white">

    <div className="grid gap-3 grid-cols-1 px-3 pt-14 sm:pl-3 md:pl-20 lg:pl-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {dataSource.map((item, index) => (
        <div key={index}>
          <div className="relative">
            <Image
              width={0}
              height={0}
              src={item.img_url}
              alt="hero"
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="absolute bottom-[5px] right-1 bg-[rgba(0,0,0,0.6)] text-white p-[5px] rounded-[5px]">
              10:00
            </div>
          </div>
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
  );
}
