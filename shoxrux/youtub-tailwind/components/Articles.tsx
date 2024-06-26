import React from "react";

export default function Articles() {
	const article = [
		{ title: "あいうえお1", img: "/images/fff.jpg" },
		{ title: "あいうえお2", img: "/images/fff.jpg" },
		{ title: "あいうえお3", img: "/images/fff.jpg" },
		{ title: "あいうえお4", img: "/images/fff.jpg" },
		{ title: "あいうえお5", img: "/images/fff.jpg" },
		{ title: "あいうえお6", img: "/images/fff.jpg" },
		{ title: "あいうえお7", img: "/images/fff.jpg" },
		{ title: "あいうえお8", img: "/images/fff.jpg" },
		{ title: "あいうえお9", img: "/images/fff.jpg" },
		{ title: "あいうえお10", img: "/images/fff.jpg" },
		{ title: "あいうえお11", img: "/images/fff.jpg" },
		{ title: "あいうえお12", img: "/images/fff.jpg" },
		{ title: "あいうえお13", img: "/images/fff.jpg" },
		{ title: "あいうえお14", img: "/images/fff.jpg" },
		{ title: "あいうえお15", img: "/images/fff.jpg" },
		{ title: "あいうえお16", img: "/images/fff.jpg" },
		{ title: "あいうえお17", img: "/images/fff.jpg" },
		{ title: "あいうえお18", img: "/images/fff.jpg" },
		{ title: "あいうえお19", img: "/images/fff.jpg" },
		{ title: "あいうえお20", img: "/images/fff.jpg" },
	];

	return (
		<div className="w-full grid grid-cols-3 bg-pink-400 gap-3 overflow-y-auto pt-[56px] pl-[250px]">
			{article.map((item, index) => (
				<div key={index}>
					<img src={item.img} alt="hero" />
					<div className="bg-red-500">{item.title}</div>
				</div>
			))}
		</div>
	);
}
