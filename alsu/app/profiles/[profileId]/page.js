"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const page = () => {
  const [dataSource, setDataSource] = useState([]);
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
    <div className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500  flex justify-center">
      <div className="w-[600px] h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-10">
        <Link href={`/profiles`} className="m-[10px]">
          プロフィールへ戻る
        </Link>
        <div className="w-full flex items-center justify-center flex-col px-[180px] pt-[150px]">
          <img
            className="w-[90px] mb-[50px] rounded-full"
            src={dataSource.avatar_url}
            alt="The pfp should be here"
          ></img>
          <label className="w-full h-[40px]">
            <strong>名前: </strong>
            {dataSource.username}
          </label>
          <label className="w-full h-[40px] ">
            <strong>メールアドレス: </strong>
            {dataSource.email}
          </label>
          <button className="w-[100px] h-[50px] bg-pink-500 mt-[50px] rounded-full">
            編集
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;