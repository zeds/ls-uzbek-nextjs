"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const ProfileEdit = () => {
  const [dataSource, setDataSource] = useState({});
  const supabase = createClient();
  const profileId = usePathname().split("/")[2];
  const route = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [occupation, setOccupation] = useState("");
  const [hobby, setHobby] = useState("");
  const [introduce, setIntroduce] = useState("");

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
        setNationality(data.nationality);
        setAddress(data.address);
        setBirthday(data.birthday);
        setOccupation(data.occupation);
        setHobby(data.hobby);
        setIntroduce(data.introduce);
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
        address: address,
        birthday: birthday,
        occupation: occupation,
        hobby: hobby,
        introduce: introduce,
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
    <div className="pt-[56px} w-full h-max bg-yellow-700 flex justify-center">
      {/* 576pxの外枠 */}
      <div className="w-full max-w-xl rounded-full bg-yellow-950">
        <h1>編集画面</h1>
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-10 flex-col">
          <img className="w-[80px]" src={dataSource.avatar_url} alt="" />
          <label>Username</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Nationality</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          ></input>
          <label>Address</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <label>Birthday</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          ></input>
          <label>Occupation</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          ></input>
          <label>Hobby</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          ></input>
          <label>Introduce</label>
          <input
            className="w-[300px] p-2 rounded-full"
            type="text"
            value={introduce}
            onChange={(e) => setIntroduce(e.target.value)}
          ></input>
          <button
            onClick={clickSave}
            className="mt-3 mb-3 p-2 bg-gray-500 text-white rounded-md"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
