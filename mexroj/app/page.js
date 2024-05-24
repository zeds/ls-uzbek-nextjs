"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Article from "@/components/Article";

export default function Home() {
  const supabase = createClient();
  const [dataSource, setDataSource] = useState([]);

  const getArticles = useCallback(async () => {
    try {
      //   setLoading(true)

      const { data, error, status } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", profileId)
        .single();

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
    <div className="bg-red-300 w-full pt-[56px] flex flex-wrap gap-2 ">
      {articles.map((item, index) => (
        <div key={index}>
          <Article title={item.title} avatar={item.avatar} />
        </div>
      ))}
    </div>
  );
}
