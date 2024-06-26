"use client";
import React, { useCallback, useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useCounterStore } from "@/store";

function Page() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [dataSource, setDataSource] = useState([]);
  const supabase = createClient();
  const [value, setValue] = useState("");
  const text = useCounterStore((state) => state.text); //ロシア

  const getArticles = useCallback(async (keyword) => {
    try {
      console.log("searchKeyword=", keyword); // piano
      keyword = "%" + keyword + "%"; // %piano%

      const { data, error, status } = await supabase
        .from("articles")
        .select("*")
        // .textSearch("title", "Tokyo")
        .ilike("title", keyword) // %piano%
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
    getArticles(searchKeyword);
  }, [getArticles]);

  useEffect(() => {
    console.log("us=", searchKeyword);
    getArticles(searchKeyword);
  }, [searchKeyword]);

  useEffect(() => {
    getArticles(text);
  }, [text]);

  const searchArticles = () => {
    alert("検索します");
    getArticles(searchKeyword);
  };

  const clickSearch = () => {
    // alert("入力された値：" + value);
    getArticles(value);
  };

  return (
    <div>
      <div className="container">
        {dataSource.map((item, index) => (
          <div key={index} className="w-full">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src={item.img_url}
              alt="rasm"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
              }}
            />

            <div className="flex gap-[10px] mt-3 mr-3">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={item.avatar_url}
                alt="rasm"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "18px",
                  marginTop: "3px",
                }}
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
  );
}

export default Page;
