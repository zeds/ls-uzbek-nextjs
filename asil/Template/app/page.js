"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Article from "@/components/Article";

export default function Home() {
	const supabase = createClient();
	const [dataSource, setDataSource] = useState([]);

	const getArticles = useCallback(async () => {
		try {
			const { data, error, status } = await supabase
				.from("articles")
				.select("*");

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
		getArticles();
	}, []);

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
