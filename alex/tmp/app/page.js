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
				.select("*")
				.like("title", "%%")
				.order("id", {ascending: false});

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
		<div className="w-full pt-16 flex flex-wrap grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 gap-y-[36px] p-3 bg-red-300">
			{dataSource.map((item, index) => (
				<div key={index} className="w-full">
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
