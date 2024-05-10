"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = () => {
  const [dataSource, setDataSource] = useState({});
  const supabase = createClient();

  const profileId = usePathname().split("/")[2];
  // const route = useRouter();

  const getProfile = useCallback(async () => {
    try {
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
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="w-full h-screen bg-blue-200 flex justify-center">
      <div className="w-full max-w-xl bg-pink-300">
        <div className="w-full flex justifu-center items-center mt-5 flex-col">
          <img className="w-[100px] h-[100px] round-full" src={dataSource.avatar_url} />
          <div className="w-[350px] h-[40px] bg-blue-300 border-solid border-2 border-indigo-600 gap-10">
            名前：{dataSource.username}
          </div>
          <div className="w-[350px] h-[40px] bg-blue-300 border-solid border-2 border-indigo-600 gap-1">
            メール：{dataSource.email}
          </div>
          <button onClick={clickEdit} className="mt-5 p-2 bg-green-300 text-white round-md">
            プロフィールを編集
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
