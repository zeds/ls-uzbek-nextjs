"use client";
import React, { useEffect, useState } from "react";

let update = true;

const Page = () => {
    const [value, setValue] = useState("useStateの練習をするよ");

    const changeValue = (e) => {
        setValue(e.target.value);
    };
    const clickSearch = (e) => {
        alert(value)
    }
    return (
        <div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
            <input type="text" onChange={changeValue}></input>
            <button onClick={clickSearch} >search</button>
        </div>
    );
};

export default Page;
