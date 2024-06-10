"use client";
import React, { useCallback, useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";

function Page() {
    const [dataSource, setDataSource] = useState([]);
    const supabase = createClient();

    const getArticles = useCallback(async () => {
        try {
            const { data, error, status } = await supabase
                .from("articles")
                .select("*")
                .order("id", { ascending: false });

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
        getArticles();
    }, [getArticles]);

    return (
        <div className="w-full pt-8 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-2 bg-white">
            {dataSource.map((item, index) => (
                <div key={index} className=" w-full dataSourceDiv">
                    <img className="rounded-[12px] w-full" src={item.img_url} alt="" />
                    <div className="flex mt-[12px]">
                        <img
                            className="w-[36px] h-[36px] rounded-full  mr-[12px]"
                            src={item.avatar_url}
                            alt="video"
                        />
                        <div >
                            <div className="title font-medium leading-[22px] text-[16px] overflow-hidden ">
                                {item.title}
                            </div>
                            <div className="author flex gap-1 mt-[6px] font-normal leading-5 text-[14px] nameColor">
                                {item.user_name}
                                <img className="checkIcon w-[14px]" src="checkIcon.svg"/>
                            </div>
                            <div className="statistics font-normal leading-5 text-[14px] mt-[10px] statusColor">
                                {item.stats}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Page;
