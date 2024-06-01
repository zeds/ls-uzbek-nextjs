"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [value, setValue] = useState("useStateを学びましょう");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="pt-[56px] h-screen bg-red-300 flex items-center justify-center">
      <input type="text" onChange={changeValue}></input>
      {value}
    </div>
  );
};

export default Page;
