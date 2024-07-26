	"use client";
	import Header from "@/components/Header";
	import Image from "next/image";
	import { useCallback, useEffect, useState } from "react";
	import { createClient } from "@/utils/supabase/client";
	import { useCounterStore } from "@/store";

	const items = [
	{ title: "ホーム", img: "./images/yt-home.svg" },
	{ title: "ショート", img: "./images/yt-short.svg" },
	{ title: "登録チャンネル", img: "./images/yt-r-channel.svg" },
	{ title: "YouTube Music", img: "./images/yt-r-channel.svg" },
	{ title: "", img: "" },
	{ title: "チャンネル", img: "./images/yt-channel.svg" },
	{ title: "履歴", img: "./images/yt-history.svg" },
	{ title: "再生リスト", img: "./images/yt-play-list.svg" },
	{ title: "再生した動画", img: "./images/yt-my-movie.svg" },
	];

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
	avatar_url:string;
	};

	export default function Home() {
		const [dataSource, setDataSource] = useState<ArticleProp[]>([]);

		const supabase = createClient();
		const getArticle = useCallback(async () => {
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
			alert("Error");
			} finally {
			//   setLoading(false)
			}
		}, []);
		useEffect(() => {
			getArticle();
		}, [getArticle]);

	return (
		<div className="w-full h-dvh flex pt-14">
		<Header />
		{/* navbar */}
		<nav className="fixed z-30 h-dvh hidden md:block md:w-[80px] lg:w-[270px] bg-white">
			<ul className="pl-[10px]">
			{items.map((item, index) => (
				<>
				{item.title === "" ? (
					<div className="border-t-[1px] border-solid border-gray-200 mt-3 pt-3 " />
				) : (
					<li
					key={index}
					className="flex lg:text-[16px] font-medium lg:leading-4 text-(rgba[15,15,15,1]) lg:p-[10px]  items-center rounded-[10px] lg:gap-6 hover:bg-gray-200 md:flex-col md:justify-center  md:gap-0 md:text-[10px] md:leading-[14px] md:rounded-[10px] md:p-1  lg:flex-row lg:justify-start cursor-pointer"
					>
					<img src={item.img} alt="home" className="w-6 h-6 mb-[6px]" />
					<span className="title ">{item.title} </span>
					</li>
				)}
				</>
			))}
			</ul>
		</nav>
		{/* tag */}
		<ul className="fixed z-20 w-full flex pl-5 bg-slate-50 md:pl-[90px] xl:pl-[280px] gap-3 py-1 pr-5 overflow-x-scroll hidden-scrollbar">
			{list.map((item, index) => (
			<li className="bg-gray-300 rounded-[5px] p-2 whitespace-nowrap cursor-pointer" key={index}>
				{item}
			</li>
			))}
		</ul>
		{/* articles */}
		<div className="pt-[56px] h-fit w-full grid grid-cols-1 pl-5 md:pl-[90px] lg:pl-[280px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
			{dataSource.map((item, index) => (
			<div key={index} className="border-solid border-4 border-gray-300">
				<div className="relative">
				<img src={item.img_url} alt="" className="w-full rounded-[12px]" />
				<span className="absolute bottom-0 right-1 rounded-[5px] bg-[rgba(0,0,0,0.7)] text-white p-1">
					10:00
				</span>
				</div>
				<div className="flex gap-[10px] mt-3 mr-2 p-1">
				<img
				src={item.avatar_url}
				alt=""
				className="w-9 h-9 rounded-full"
				/>
					<div>
				<div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
					{item.title}
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
