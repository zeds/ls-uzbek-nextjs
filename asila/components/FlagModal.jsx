"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Icon } from "@iconify/react";

const FlagModal = ({ setShowModal, setFlag }) => {
  const supabase = createClient();
  // supabaseから取得したデータを保存、2 letter codeも入っている
  const [dataSource, setDataSource] = useState([]);
  const [resultData, setResultData] = useState([]);

  const [searchValue, setSearchValue] = useState(""); // ja

  // 旗データをsupabaseより取得
  const getCountries = useCallback(async () => {
    const { data, error, status } = await supabase
      .from("countries")
      .select("*")
      .order("id", { ascending: false });

    if (error && status !== 406) {
      alert("Error loading user data!");
      // throw error;
    }

    if (data) {
      console.log("country data = ", data);
      setDataSource(data);
      setResultData(data);
    }
  }, []);

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    let result = dataSource.filter((data) => {
      // 正規表現 regular expression
      // return data.name.match(new RegExp(`^${searchValue}`, "g"));
      return data.name.includes(searchValue);
    });
    setResultData(result);
  }, [searchValue]); // Uz Jp

  const clickFlag = (index) => {
    let selected = resultData[index].iso2; // "UZ"
    console.log("selected=", selected);
    setFlag(selected.toLowerCase()); // "uz"
    setShowModal(false);
  };

  return (
    <div className="absolute top-[200px] left-[200px] w-[700px] bg-orange-300 p-3">
      <button
        className="absolute right-0"
        onClick={() => setShowModal(false)}
      >
        <Icon icon="iconamoon:close-bold" width="24" height="24" />
      </button>
      <div className="flex items-center gap-2 mb-2">
        <div>検索</div>
        <input
          className="bg-red-200 p-2"
          type="text"
          name="searchValue"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
      </div>
      <div className="bg-blue-200 p-2 w-full flex flex-wrap">
        {resultData.map((item, index) => (
          <div
            key={index}
            className="hover:cursor-pointer h-[40px] w-[200px] flex items-center gap-2 mb-2"
            onClick={() => clickFlag(index)}
          >
            <img
              className="w-[40px] h-[40px]"
              src={`/flags/${item.iso2.toLowerCase()}.svg`}
              alt={item}
            />
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlagModal;
