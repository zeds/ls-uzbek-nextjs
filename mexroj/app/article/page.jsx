"use client";
import React, { useCallback, useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

function Page() {
  const [dataSource, setDataSource] = useState([]);
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
  }, [getArticles]);

  return (
    <div className="container">
      {dataSource.map((item, index) => (
        <div key={index} className="frame">
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

          <div className="decs">
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
              <div className="title">
                {item.title}
                {/* Free BGM "I'll be sleepy after a snack" 2 hours ver -
                Kawaii Afternoon Break [NoCopyrightMusic] */}
              </div>
              <div className="author">{item.user_name}</div>
              <div className="statistics">{item.stats}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
