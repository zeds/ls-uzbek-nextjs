"use client";
import React, { useCallback, useState, useEffect } from "react";
import "../globals.css";
import Image from "next/image";
import { createClient } from "@/utils/supabase/client";
import { useCounterStore } from "@/store";

function Page() {
	const [dataSource, setDataSource] = useState([]);
	const supabase = createClient();

	const text = useCounterStore((state) => state.text); // Morning

	const getArticles = useCallback(async (keyword) => {
		try {
			console.log("searchKeyword=", keyword); // piano
			keyword = "%" + keyword + "%"; // %piano%

			const { data, error, status } = await supabase
				.from("articles")
				.select("*")
				.ilike("title", keyword) // %piano%
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
		getArticles("");
	}, [getArticles]);

	// textが変更されたか監視している
	useEffect(() => {
		getArticles(text);
	}, [text]);

	return (
		<div className="w-full pt-16 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-3 bg-white">
			{dataSource.map((item, index) => (
				<div key={index} className="w-full ">
					<img
						className="rounded-[12px] w-full"
						src={item.img_url}
						alt=""
					/>

					<div className="flex mt-[12px]">
						<img
							className="w-9 h-9 rounded-full mr-3"
							src={item.avatar_url}
							alt="video"
						/>
						<div>
							<div className="title clamp-2 leading-6  text-[16px] text-{rgb(15, 15, 15)} font-medium">
								{item.title}
							</div>
							<div className="author line-clamp-1 leading-5 text-[14px] text-{rgb(15, 15, 15)} font-normal">
								{item.user_name}
							</div>
							<div className="statistics line-clamp-1 leading-5 text-[14px] text-{rgb(96, 96, 96)} font-normal">
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
