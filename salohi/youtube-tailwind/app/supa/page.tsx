"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

interface Article {
id: number;
img_url: string;
avatar_url: string;
title: string;
user_name: string;
stats: string;
}

const Page = () => {
const [dataSource, setDataSource] = useState<Article[]>([]);

const supabase = createClient();

const getProfile = useCallback(async () => {
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
  alert("Error");
  } finally {
  //   setLoading(false)
  }
}, []);

useEffect(() => {
  getProfile();
}, [getProfile]);

return (
  <div className="grid pl-5 grid-cols-1 border-solid border-4 gap-3 pt-14 pr-5 sm:grid-cols-2 md:pl-20 xl:grid-cols-3 lg:pl-60 2xl:grid-cols-4">
  {dataSource.map((item, index) => (
    <div key={index} className="border-solid border-4 border-pink-500">
    <img src={item.img_url} alt="" className="w-full rounded-[12px]" />
    <div className="absolute bottom-[5px] right-1 bg-[rgba(0,0,0,0.6)] text-white p-[5px] rounded-[5px]">
      10:00
    </div>
    <div className="flex gap-[10px] mt-3 mr-2 p-1">
      <img
      src={item.avatar_url}
      alt=""
      className="w-9 h-9 rounded-full"
      />
      <div>
      <div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
        {item.title}
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
};

export default Page;
