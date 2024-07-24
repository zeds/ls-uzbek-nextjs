"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";


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

export default function Home() {
	return (
		<div className="w-full h-dvh flex pt-14 pr-5">
			<nav className="fixed z-20 h-dvh hidden md:block md:w-[80px] lg:w-[270px] bg-white">
		<ul className="pl-[10px]">
			{items.map((item, index) => (
			<>
				{item.title === "" ? (
				<div className="border-t-[1px] border-solid border-gray-200 mt-3 pt-3" />
				) : (
				<li
					key={index}
					className="flex lg:text-[16px] font-medium lg:leading-4 text-(rgba[15,15,15,1]) lg:p-[10px]  items-center rounded-[10px] lg:gap-6 hover:bg-gray-200 md:flex-col md:justify-center  md:gap-0 md:text-[10px] md:leading-[14px] md:rounded-[10px] md:p-1  lg:flex-row lg:justify-start"
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
			<ul className="fixed w-full flex  pl-5 md:pl-[90px] lg:pl-[280px] gap-3 p-1 overflow-y-scroll hidden-scrollbar">
				{list.map((item, index) => (
					<li key={index}>
					<Button>{item}</Button>
					</li>
				))}
			</ul>

			{/* articles */}
			<div className=" pt-[70px] h-fit w-full grid grid-cols-1 pl-5 md:pl-[90px] lg:pl-[280px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
				<div className="bg-red-300">
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
				</div>
				<div className="bg-red-300">
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
				</div>
				<div className="bg-red-300">
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
				</div>
				<div className="bg-red-300">item-2</div>
				<div className="bg-red-300">item-3</div>
				<div className="bg-red-300">item-4</div>
				<div className="bg-red-300">item-5</div>
				<div className="bg-red-300">item-6</div>
				<div className="bg-red-300">item-7</div>
			</div>
		</div>
	);
}
