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
    <div className="w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-center">
      <div className="w-[600px] h-screen backdrop-blur-sm bg-white/30 mt-10">
        <Link href={`/profiles`} className="m-[10px]">
          Back to profiles
        </Link>
        <div className="w-full flex items-center justify-center flex-col px-[180px] pt-[150px]">
          <img
            className="w-[90px] mb-[50px] rounded-full"
            src={dataSource.avatar_url}
            alt="The pfp should be here"
          ></img>
          <label className="w-full h-[40px]">
            <strong>Name: </strong>
            {dataSource.username}
          </label>
          <label className="w-full h-[40px] ">
            <strong>Email: </strong>
            {dataSource.email}
          </label>
          <button className="w-[100px] h-[50px] bg-blue-500 mt-[50px] rounded-full">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
