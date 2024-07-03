import Image from "next/image";
import React from "react";

// CSJ

export default function Navbar() {
	const items = [
		{ title: "ホーム", img: "./images/yt-home.svg" },
		{ title: "ショート", img: "./images/yt-short.svg" },
		{ title: "登録チャンネル", img: "./images/yt-r-channel.svg" },
	];

	return (
		<nav>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						<img src={item.img} alt="home" />
						<span className="title">{item.title}</span>
					</li>
				))}
			</ul>
		</nav>
	);
}
