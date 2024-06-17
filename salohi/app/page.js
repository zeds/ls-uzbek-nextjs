"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Article from "@/components/Article";
import { useCounterStore } from "@/store";

import { useCounterStore } from "@/store";

export default function Home() {
	const supabase = createClient();
	const [dataSource, setDataSource] = useState([]);
	const text = useCounterStore((state) => state.text); //ロシア

<<<<<<< HEAD
	const text = useCounterStore((state) => state.text); //ロシア

=======
>>>>>>> 8c0e259a51e5f46cf3fbf02a9f7aa8a46ea178d0
	const getArticles = useCallback(async (keyword) => {
		try {
			console.log("searchKeyword=", keyword); // piano
			keyword = "%" + keyword + "%"; // %piano%

			const { data, error, status } = await supabase
				.from("articles")
				.select("*")
<<<<<<< HEAD
=======
				// .textSearch("title", "Tokyo")
>>>>>>> 8c0e259a51e5f46cf3fbf02a9f7aa8a46ea178d0
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
	});

	useEffect(() => {
		getArticles("");
	}, []);

	useEffect(() => {
		getArticles(text); // text="Morning"
	}, [text]);

	return (
		<div className="">
			<div className="w-full pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 p-3  gap-y-9">
				{dataSource.map((item, index) => (
					<div key={index} className="w-full">
						<Image
							width={0}
							height={0}
							sizes="100vw"
							src={item.img_url}
							alt="rasm"
							style={{
								width: "100%",
								height: "auto",
								borderRadius: "12px",
							}}
						/>
						<div className="flex gap-[10px] mt-3 ">
							<Image
								width={0}
								height={0}
								sizes="100vw"
								src={item.avatar_url}
								alt="rasm"
								style={{
									width: "36px",
									height: "36px",
									borderRadius: "18px",
									marginTop: "3px",
								}}
							/>
							<div>
								<div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
									{item.title}
									{/* Free BGM "I'll be sleepy after a snack" 2 hours ver -
              Kawaii Afternoon Break [NoCopyrightMusic] */}
								</div>
								<div className="line-clamp-1 text-sm font-normal text-[rgba(15,15,15,1)]">
									{item.user_name}
								</div>
								<div className="line-clamp-1 text-sm font-normal text-[rgba(96,96,96,1)]">
									{item.stats}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
