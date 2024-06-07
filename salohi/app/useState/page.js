    "use client";
    import { useCounterStore } from "@/store";
    import React, { useContext, useEffect, useState } from "react";

    let update = true;

    const Page = () => {
    const count = useCounterStore((state) => state.count);
    const text = useCounterStore((state) => state.text);

    const [value, setValue] = useState("useStateの練習をするよ");


        // const changeValue = (e) => {
        // 	setValue(e.target.value);
        // };

        const clickSearch = () => {
        };

    return (
        <div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
                <div>{text}</div>
                <div className="h-[200px] w-[400px] bg-blue-400 flex items-center justify-center">
                Account:
                <div className="bg-red-800 px-2 py-1"><img src=""></img>{count}</div>
                </div>
                {/* <div className="flex">
                    <input type="text" onChange={(e) => setValue(e.target.value)}></input>
                    <button onClick={clickSearch} className="bg-blue-300 p-3">
                        検索
                    </button>
                </div> */}
            </div>
    );
    };

    export default Page;
