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

  const getProfile = useCallback(async () => {
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
    <div className="w-full h-screen bg-blue-300 flex justify-center">
      {/* 576pxの外枠 */}
      <div className="w-full max-w-xl bg-pink-300">
        <Link href={`/profiles`} className="underline">
          プロフィールー選べ
        </Link>
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-5 flex-col">
          <img className="w-[80px]" src={dataSource.avatar_url} alt="" />
          <label>username: {dataSource.username}</label>
          <label>email: {dataSource.email}</label>
          <button
            onClick={clickEdit}
            className="mt-5 p-2 bg-blue-500 text-white rounded-md"
          >
            プロフィールを編集
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
