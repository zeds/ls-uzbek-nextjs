import React from "react";

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

const page = () => {
	return (
		<div>
			<ul className="flex gap-4 overflow-y-auto hidden-scrollbar">
				{list.map((item, index) => (
					<li
						key={index}
						className="px-4 py-2 bg-gray-800 roundef-full text-white whitespace-nowrap"
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default page;
