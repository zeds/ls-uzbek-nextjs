"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const [dataSource, setDataSource] = useState({});
  const supabase = createClient();
  const profileId = usePathname().split("/")[2];
  const route = useRouter();

  useEffect(() => {
    getProfile();
    console.log("profileId=", profileId);
  }, []);

  const clickEdit = () => {
    route.push(`/profiles/${profileId}/edit`);
  };

  const getProfile = useCallback(async () => {=
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

  return (
    <div className="w-full h-screen bg-blue-300 flex justify-center p-7 ">
      {/* 576pxの外枠 */}
      <div className="w-full max-w-xl bg-pink-400 rounded-3xl">
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-5 flex-col ">
          <img
            className="w-[100px] rounded-full"
            src={dataSource.avatar_url}
            alt=""
          />
          <div className="w-full justify-center flex flex-col  items-center">
            <label className="h-[30px] mt-10 font-serif text-xl">
              username: {dataSource.username}
            </label>
            <label className=" h-[30px] font-serif text-xl">
              email: {dataSource.email}
            </label>
          </div>
          <div className="flex justify-center items-center  gap-3  w-full mt-3">
            <button className="bg-blue-300 hover:bg-blue-500 text-black rounded-md p-2">
              <Link href={`/profiles`}>プロフィール一覧へ</Link>
            </button>
            <button
              onClick={clickEdit}
              className=" p-2 bg-blue-300  hover:bg-blue-500  text-black rounded-md"
            >
              プロフィールを編集
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
