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
				.like("title", "%ing%")
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
		<div className="w-full pt-16 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-3">
			{dataSource.map((item, index) => (
				<div key={index} className="w-full ">
					<img
						className="rounded-[12px] w-full"
						src={item.img_url}
						alt=""
					/>
					<div className="flex">
						<img
							className="w-9 h-9 rounded-full mt-3 mr-3"
							src={item.avatar_url}
							alt="video"
						/>
						<div>
							<div className="line-clamp-2 font-medium leading-[22px] text-[16px] text-[rgba(15,15,15,1)]">
								{item.title}
							</div>
							<div className="author line-clamp-1 font-normal leading-5 text-[14px]">
								{item.user_name}
							</div>
							<div className="statistics line-clamp-1 font-normal leading-5 text-[14px]">
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
