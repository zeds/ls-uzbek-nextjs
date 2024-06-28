import Image from "next/image";
import React from "react";

export default function Navbar() {
	const items = [
		{ title: "ホーム", img: "./images/yt-home.svg" },
		{ title: "ショート", img: "./images/yt-short.svg" },
		{ title: "登録チャンネル", img: "./images/yt-r-channel.svg" },
	];

	return (
		<div className="fixed w-[72px] md:w-[72px] lg:w-[216px]  top-[56px] mt-3 left-0 bottom-0 border-4 border-orange-400 z-30">
			<ul>
				{items.map((item, index) => (
					<li
						key={index}
						className="flex flex-col md:flex-col lg:flex-row items-center p-2 text-[10px] lg:text-base line-clamp-1 md:line-clamp-1"
					>
						<img src={item.img} alt="home" />
						<span className="title">{item.title}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
