"use client";
import { useCounterStore } from "@/store";
import React, { useState } from "react";

let update = true;

const Page = () => {
  // const count = useCounterStore((state) => state.count);
  const text = useCounterStore((state) => state.text);

  const [value, setValue] = useState("New State Value");
  const changeValue = (e) => {
    setValue(e.target.value);
  };
  const clickSearch = () => {
    alert(value);
  };
  return (
    <div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
      {text}
      <div className="flex">
        <input type="text" onChange={changeValue}></input>
        <button onClick={clickSearch} className="bg-blue-300 p-3">
          Search
        </button>
      </div>
    </div>
  );
};

export default Page;
