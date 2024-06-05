"use client";
import React, { useEffect, useState } from "react";
import { useCounterStore } from "@/store";

let update = true;

const Page = () => {
    const count = useCounterStore((state) => state.count);
    const text = useCounterStore((state) => state.text);
    const [value, setValue] = useState("useStateの練習をするよ");

    const changeValue = (e) => {
        setValue(e.target.value);
    };
    const clickSearch = (e) => {
        alert(value)
    }
    return (

        <div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
            {text}
            {count}
            <input type="text" onChange={changeValue}></input>
            <button onClick={clickSearch} >search</button>
     
        </div>
    );
};

export default Page;
