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

  const getProfile = useCallback(async () => {
    try {
      //   setLoading(true)

      const { data, error, status } = await supabase
        .from("articles")
        .select("*");

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
    getProfile();
  }, []);

  return (
    <div className="bg-red-300 flex flex-wrap w-full pt-[56px] gap-2">
      {dataSource.map((item, index) => (
        <div key={index}>
          <Article title={item.title} avatar={item.avatar_url} />
        </div>
      ))}
    </div>
  );
}
