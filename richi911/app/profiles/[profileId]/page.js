"use client";
import { createClient } from "@/utils/supabase/client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

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
      <div className="w-full max-w-xl bg-yellow-700">
        <Link
          href={`/profiles`}
          className="m-2 p-2 bg-yellow-950 rounded-md text-white"
        >
          プロファイル選べ
        </Link>
        {/* アバター */}
        <div className="w-full flex justify-center items-center mt-5 flex-col">
          <img
            className="w-[80px] rounded-full mb-2"
            src={dataSource.avatar_url}
            alt="https://qoqjesbdiymmyyibtwsw.supabase.co/storage/v1/object/sign/profiles/public/Masato%20(Asil).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9maWxlcy9wdWJsaWMvTWFzYXRvIChBc2lsKS5qcGciLCJpYXQiOjE3MTUzMDM3NDMsImV4cCI6MTc0NjgzOTc0M30.zDtdMwm_vbW8lBg4IRMVC8BlVdCtjueilgX1gXsq2lc&t=2024-05-10T01%3A15%3A44.752Z"
          />
          <div className="flex w-[300px] h-max] flex-col">
            <label className="font-semibold">
              Username: {dataSource.username}
            </label>
            <label className="font-semibold">Email: {dataSource.email}</label>
            <label className="font-semibold">
              Nationality: {dataSource.nationality}
            </label>
            <label className="font-semibold">
              Birthday: {dataSource.birthday}
            </label>
            <label className="font-semibold">Gender: {dataSource.sex}</label>
            <label className="font-semibold">School: {dataSource.school}</label>
            <label className="font-semibold">
              Occupation: {dataSource.occupation}
            </label>
            <label className="font-semibold">
              Address: {dataSource.address}
            </label>
            <label className="font-semibold">Phone: {dataSource.phone}</label>
            <label className="font-semibold">Hobby: {dataSource.hobby}</label>
            <label className="font-semibold">Bio: {dataSource.introduce}</label>
            <button
              onClick={clickEdit}
              className="mt-5 p-2 bg-yellow-950 text-white rounded-md"
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
