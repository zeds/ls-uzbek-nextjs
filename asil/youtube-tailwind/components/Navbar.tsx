import Image from "next/image";
import React from "react";

// CSJ

export default function Navbar() {
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

	return (
		<nav>
			<ul>
				{items.map((item, index) => (
					<>
						{item.title === "" ? (
							<div className="separator" />
						) : (
							<li key={index}>
								<img src={item.img} alt="home" />
								<span className="nav-title">{item.title}</span>
							</li>
						)}
					</>
				))}
			</ul>
		</nav>
	);
}
