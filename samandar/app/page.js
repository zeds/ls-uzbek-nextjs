"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Article from "@/components/Article";
import {useCounterStore}from "@/store"

export default function Home() {
	const supabase = createClient();
	const [dataSource, setDataSource] = useState([]);

    const text = useCounterStore((state) => state.text);

	const getArticles = useCallback(async (keyword) => {
		try {
			console.log("searchKeyword=",keyword);
			keyword = "%"+ keyword + "%";
			const { data, error, status } = await supabase
				.from("articles")
				.select("*")
				.ilike("title", keyword)
				.order("id",{ascending:false});

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
	});

	useEffect(() => {
		getArticles("");
	}, []);

	useEffect(() => {
		getArticles("text");
	}, [text]);

	return (
		<div className="flex flex-wrap bg-red-300 w-full pt-[56px] gap-2">
			{dataSource.map((item, index) => (
				<div key={index}>
					<Article
						title={item.title}
						avatar={item.avatar_url}
						user_name={item.user_name}
						stats={item.stats}
						img_url={item.img_url}
					/>
				</div>
			))}
		</div>
	);
}
