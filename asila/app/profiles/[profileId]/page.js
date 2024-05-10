"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Profile = () => {
  const [dataSource, setDataSource] = useState([]);
  const supabase = createClient();
  const profileId = usePathname().split("/")[2];
  const route = useRouter();

  useEffect(() => {
    getProfile();
    console.log("profileId=", profileId);
  }, []);

  const clickEdit = () => {
    route.push("/profiles/${profileId}/edit");
  };

  const getProfile = useCallback(async () => {
    try {
      //   setLoading(true)

      const { data, error, status } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", profileId)
        .single();
      // .order("id", { ascending: false });

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
    <div className="w-full h-screen bg-blue-200 flex justify-center">
      <div className="w-full max-w-xl bg-pink-200">
        <Link href={`/profiles`} className="underline">
          プロフィール一覧へ
        </Link>
        <div className="w-full  flex justify-center items-center mt-5 flex-col">
          <img className="h-[80px] " src={dataSource.avatar_url} alt=""></img>
          <label className="w-full px-[100px] h-[30px] mt-10">
            username: {dataSource.username}
          </label>
          {/* <input type="text" value={dataSource.username}></input> */}
					<label className="w-full px-[100px] h-[30px]">
          email: {dataSource.email}
            </label>
          {/* <input type="text" value={dataSource.email}></input> */}
          <button
            onClick={clickEdit}
            className="mt-5 p-2 bg-green-500 text-white rounded-md"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
