"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { DatePicker, Space } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
const dateFormat = "YYYY-MM-DD";

const ProfileEdit = () => {
  const [dataSource, setDataSource] = useState({});
  const supabase = createClient();
  // path = "/profiles/cf3466fb-1af1-48ec-9868-73437564da11/edit"
  const profileId = usePathname().split("/")[2]; // cf3466fb-1af1-48ec-9868-73437564da11
  const route = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");

  useEffect(() => {
    getProfile();
  }, []);

  // 10-09-2000
  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
        setUserName(data.username);
        setEmail(data.email);
        setNationality(data.nationality);
        let djs = dayjs("2010-01-01", dateFormat);
        setBirthday(djs);

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
        nationality: nationality,
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
    <div className="w-full h-screen pt-[56px] bg-blue-300 flex justify-center">
      {/* 576pxの外枠 */}
      <div className="w-full max-w-xl bg-pink-300 m-10 p-10">
        <h1>編集画面</h1>
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-5 flex-col">
          <img className="w-[80px]" src={dataSource.avatar_url} alt="" />
          <label>username</label>
          <input
            className="w-[300px] p-2"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label>email</label>
          <input
            className="w-[300px] p-2"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>birthday</label>
          <div>{dataSource.birthday}</div>
          <DatePicker
            defaultValue={birthday}
            // defaultValue={dayjs("2000-09-10", dateFormat)}
            onChange={onChange}
          />

          <label>nationality</label>
          <input
            className="w-[300px] p-2"
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          ></input>

          <button
            onClick={clickSave}
            className="mt-5 p-2 bg-blue-500 text-white rounded-md"
          >
            保存？
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
