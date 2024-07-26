"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useCounterStore } from "@/store";

const list = [
	"すべて",
	"ライブ",
	"オーディオブック",
	"観光",
	"フィットネス",
	"最近アップロードされた動画",
	"視聴済み",
	"新しい動画の発見",
];

type ArticleProp = {
	id: string;
	img_url: string;
	title: string;
	user_name: string;
	stats: string;
};

export default function Home() {
	const supabase = createClient();
	const [dataSource, setDataSource] = useState<ArticleProp[]>([]);

	const { user, isLogin, text } = useCounterStore();

	const getArticles = useCallback(
		async (keyword: any) => {
			try {
				console.log("searchKeyword=", keyword); // piano
				keyword = "%" + keyword + "%"; // %piano%

				console.log("user=", user);
				console.log("top isLogin=", isLogin);

				if (isLogin) {
					const { data, error, status } = await supabase
						.from("articles")
						.select("*")
						.eq("user_id", user.id)
						.ilike("title", keyword) // %piano%
						.order("id", { ascending: false });

					if (error && status !== 406) {
						throw error;
					}

					if (data) {
						console.log("data = ", data);
						setDataSource(data);
					}
				} else {
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
				}
			} catch (error) {
				alert("Error loading user data!");
			} finally {
				//   setLoading(false)
			}
		},
		[supabase]
	); // Added dependency array here

	useEffect(() => {
		console.log("1. top useEffect isLogin=", isLogin);
		async function hoge(keyword: any) {
			try {
				console.log("searchKeyword=", keyword); // piano
				keyword = "%" + keyword + "%"; // %piano%

				console.log("user=", user);
				console.log("top isLogin=", isLogin);

				if (isLogin) {
					const { data, error, status } = await supabase
						.from("articles")
						.select("*")
						.eq("user_id", user.id)
						.ilike("title", keyword) // %piano%
						.order("id", { ascending: false });

					if (error && status !== 406) {
						throw error;
					}

					if (data) {
						console.log("data = ", data);
						setDataSource(data);
					}
				} else {
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
				}
			} catch (error) {
				alert("Error loading user data!");
			} finally {
				//   setLoading(false)
			}
		}
		hoge("");
	}, [isLogin, supabase, user]);

	useEffect(() => {
		console.log("2. top useEffect isLogin=", isLogin);
		getArticles("");
	}, []);

	return (
		<div className="w-full h-dvh bg-sky-300 flex pt-14 pr-5">
			<Header />

			<div className="fixed z-20 h-dvh hidden md:block md:w-[80px] xl:w-[270px] bg-pink-300">
				<nav>
					<ul>
						<li className="flex px-[12px] items-center  bg-red-500 py-3 text-[14px] h-[40px] gap-6">
							<img src="images/yt-home.svg" alt="home" />
							<div>ホーム</div>
						</li>
					</ul>
				</nav>
			</div>

			{/* tag */}
			<ul className="fixed w-full flex bg-red-400 pl-5 md:pl-[90px] xl:pl-[280px] gap-3 py-1 pr-5 overflow-x-scroll hidden-scrollbar">
				{list.map((item, index) => (
					<li className="bg-gray-300 p-2 whitespace-nowrap" key={index}>
						{item}
					</li>
				))}
			</ul>

			{/* articles */}
			<div className="bg-green-300 pt-[70px] h-fit w-full grid grid-cols-1 pl-5 md:pl-[90px] xl:pl-[280px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
				{dataSource.map((item, index) => (
					<div key={index} className="bg-red-300">
						<div className="relative">
							<img className="w-full" src={item.img_url} alt="diana" />
							<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
								10:00
							</span>
						</div>
						<div className="flex">
							<img
								className="w-9 h-9 rounded-full"
								src="tom.jpeg"
								alt="tom"
							/>
							<div>
								<div>{item.title}</div>
								<div>{item.user_name}</div>
								<div>{item.stats}</div>
							</div>
						</div>
					</div>
				))}

				{/* <div className="bg-red-300">
					<div className="relative">
						<img src="diana.webp" alt="diana" />
						<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
							10:00
						</span>
					</div>
					<div className="flex">
						<img
							className="w-9 h-9 rounded-full"
							src="tom.jpeg"
							alt="tom"
						/>
						<div>
							<div>title</div>
							<div>user</div>
							<div>stats</div>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
}
