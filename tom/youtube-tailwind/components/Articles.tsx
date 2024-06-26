import React from "react";

export default function Articles() {
	const article = [
		{ title: "あいうえお1", img: "/images/raichel.webp" },
		{ title: "あいうえお2", img: "/images/raichel.webp" },
		{ title: "あいうえお3", img: "/images/raichel.webp" },
		{ title: "あいうえお4", img: "/images/raichel.webp" },
		{ title: "あいうえお5", img: "/images/raichel.webp" },
		{ title: "あいうえお6", img: "/images/raichel.webp" },
		{ title: "あいうえお7", img: "/images/raichel.webp" },
		{ title: "あいうえお8", img: "/images/raichel.webp" },
		{ title: "あいうえお9", img: "/images/raichel.webp" },
		{ title: "あいうえお10", img: "/images/raichel.webp" },
		{ title: "あいうえお11", img: "/images/raichel.webp" },
		{ title: "あいうえお12", img: "/images/raichel.webp" },
		{ title: "あいうえお13", img: "/images/raichel.webp" },
		{ title: "あいうえお14", img: "/images/raichel.webp" },
		{ title: "あいうえお15", img: "/images/raichel.webp" },
		{ title: "あいうえお16", img: "/images/raichel.webp" },
		{ title: "あいうえお17", img: "/images/raichel.webp" },
		{ title: "あいうえお18", img: "/images/raichel.webp" },
		{ title: "あいうえお19", img: "/images/raichel.webp" },
		{ title: "あいうえお20", img: "/images/raichel.webp" },
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
