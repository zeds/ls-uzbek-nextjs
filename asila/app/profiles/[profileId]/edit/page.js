"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ProfileEdit = () => {
  const [dataSource, setDataSource] = useState({});
  const supabase = createClient();
  const profileId = usePathname().split("/")[2];
  const route = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getProfile();
    console.log("profileId=", profileId);
  }, []);

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
        setUserName(data.username);
        setEmail(data.email);
        setDataSource(data);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      //   setLoading(false)
    }
  }, []);

  const clickSave = async () => {
    // alert(JSON.stringify(dataSource[index]))

    // usernameを更新
    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        username: userName,
        email: email,
      })
      .eq("id", dataSource.id); // 'cf3466fb-1af1-48ec-9868-73437564da11'

    // alert(updateError)  // nullはエラーがない意味
    if (updateError !== null) {
      alert("失敗！：" + JSON.stringify(updateError));
    } else {
      route.push(`/profiles/${profileId}`);
    }
  };

  // const clickSave = () => {
  // 	route.push(`/profiles/${profileId}`);
  // };

  return (
    <div className="w-full h-screen bg-blue-200 flex justify-center p-7">
      {/* 576pxの外枠 */}
      <div className="w-full max-w-xl bg-pink-200 rounded-3xl">
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-5 flex-col">
          <img
            className="w-[100px]  rounded-full"
            src={dataSource.avatar_url}
            alt=""
          />
          <div className="justify-start m-4 ">
            <div className=" font-serif text-xl">username</div>
            <input
              className="w-[300px] p-2 rounded-lg"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
          <div className="justify-start m-4">
            <div className=" font-serif text-xl">email</div>
            <input
              className="w-[300px] p-2 rounded-lg"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>

          {/* <button className="bg-blue-300 hover:bg-blue-500 text-black rounded-md p-2">
            <Link href={"app/profiles/[profileId]"}>プロフィールへ</Link>
          </button> */}

          <button
            onClick={clickSave}
            className="bg-blue-300 hover:bg-blue-500 text-black rounded-md p-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
