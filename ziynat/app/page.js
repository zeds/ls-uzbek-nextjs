"use client";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
  const [dataSource, setDataSource] = useState([]);
  const [showCountry, setShowCountry] = useState(false);
  const supabase = createClient();

  const getProfile = useCallback(async () => {
    try {
      //   setLoading(true)

      const { data, error, status } = await supabase
        .from("countries")
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

  useEffect(() => {
    getProfile();
  });

  const clickGlobe = () => {
    setShowCountry(true);
  };
  const closeCountry = () => {
    setShowCountry(false);
  };
  return (
    <main className="w-full h-screen bg-red-200">
      {showCountry ? (
        <div className="absolute w-[800px] h-[400px] bg-sky-500 top-[50px] left-[100px]">
          <button
            class="absolute right-2 top-2 bg-gray-500 p-2"
            onClick={() => closeCountry()}
          >
            閉じる
          </button>
          <button className="p-2 border">Cantonian</button>
          <button className="p-2 border">English</button>
          <button className="p-2 border">Japanese</button>
          <button className="p-2 border">Kazakh</button>
          <button className="p-2 border">Russian</button>
          <button className="p-2 border">Spanish</button>
          <button className="p-2 border">Uzbek</button>
          <button className="p-2 border">Vietnamese</button>
        </div>
      ) : null}
      <header className="flex  bg-green-400 items-center justify-between">
        {/* logo */}
        <div className="flex items-center justify-center w-[169px] bg-blue-500">
          <div className="bg-red-200 w-10 h-10 p-2 shrink-0">
            <img src="burger.svg" alt=""></img>
          </div>
          <div className="w-[127px] h-[56px] bg-blue-300 py-[18px] pl-[16px] pr-[14px] shrink-0">
            <img src="logo.svg" alt=""></img>
          </div>
        </div>

        <div className="ml-[90px] w-full max-w-[732px] h-[40px] bg-orange-200 hidden sm:flex justify-end">
          {/* search */}
          <input
            placeholder="検索"
            className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
          ></input>

          {/* scope */}
          <button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
            <img
              className="w-[24px] absolute right-4 bottom-1.5"
              src="search.svg"
              alt=""
            ></img>
          </button>

          {/* mic */}
          <button className="ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
            <img
              className="flex shrink-0 rounded-full w-[24px]"
              src="mic.svg"
              alt=""
            ></img>
          </button>
        </div>

        <ul className="flex items-center justify-end w-[225px] h-[40px] bg-red-500 shrink-0">
          {/* search */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
            <img className="bg-green-200" src="scope.svg" alt=""></img>
          </li>
          {/* mic */}
          <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
            <img className="bg-green-500" src="mic.svg" alt=""></img>
          </li>
          {/* globe */}
          <li className="flex items-center w-[40px] h-[40px] p-2">
            <button onClick={() => clickGlobe()}>
              <img className="bg-green-500" src="globe.svg" alt=""></img>
            </button>
          </li>
          {/* video */}
          <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
            <img className="bg-green-500" src="video.svg" alt=""></img>
          </li>
          {/*bell*/}
          <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
            <img className="bg-green-500" src="bell.svg" alt=""></img>
          </li>
          {/* ziynat */}
          <Link href={"/profiles"}>
            <li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
              <img
                className="w-[32px] h-[32px] rounded-full"
                src="icon.jpg"
                alt=""
              ></img>
            </li>
          </Link>
        </ul>
      </header>
    </main>
  );
}
