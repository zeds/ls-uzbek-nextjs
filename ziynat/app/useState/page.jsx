"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import React, { useEffect, useState } from "react";

let update = true;

const Page = () => {
  const text = useCounterStore((state) => state.text);

  const [value, setValue] = useState("useStateの練習をするよ");

  const clickSearch = () => {
    alert("入力された値：" + value);
  };

  return (
    <div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
      {text}
      <div className="flex">
        <input
          className="p-2"
          type="text"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <Button onClick={clickSearch} className="bg-blue-300 p-3">
          検索
        </Button>
      </div>
    </div>
  );
};

export default Page;
