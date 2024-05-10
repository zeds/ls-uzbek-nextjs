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
  const [birthday, setBirthday] = useState("");
  const [sex, setSex] = useState("");
  const [school, setSchool] = useState("");
  const [occupation, setOccupation] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
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
        setBirthday(data.birthday);
        setSex(data.sex);
        setSchool(data.school);
        setOccupation(data.occupation);
        setAddress(data.address);
        setPhone(data.phone);
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
        birthday: birthday,
        sex: sex,
        school: school,
        occupation: occupation,
        address: address,
        phone: phone,
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
    <div className="w-full h-max bg-blue-300 flex justify-center">
      {/* 576pxの外枠 */}
      <div className="w-full max-w-xl bg-yellow-700">
        <h1 className="text-black font-semibold p-2">編集画面</h1>
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-2 flex-col">
          <img className="w-[80px] mb-2" src={dataSource.avatar_url} alt="" />
          <label className="font-semibold">Username:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
          <label className="font-semibold">Email:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="font-semibold">Nationality:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
          ></input>
          <label className="font-semibold">Birthday:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          ></input>
          <label className="font-semibold">Gender:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          ></input>
          <label className="font-semibold">School:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
          ></input>
          <label className="font-semibold">Occupation:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          ></input>
          <label className="font-semibold">Address:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
          <label className="font-semibold">Phone:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
          <label className="font-semibold">Hobby:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          ></input>
          <label className="font-semibold">Bio:</label>
          <input
            className="w-[300px] p-2 bg-yellow-800 text-black font-semibold"
            type="text"
            value={introduce}
            onChange={(e) => setIntroduce(e.target.value)}
          ></input>
          <button
            onClick={clickSave}
            className="mt-5 p-2 bg-yellow-950 text-white rounded-md mb-5"
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
