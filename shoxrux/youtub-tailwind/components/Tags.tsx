import React from "react";

export default function Tags() {
	const tagName = [
		{ name: "すべて" },
		{ name: "音楽" },
		{ name: "ライブ" },
		{ name: "オーディオブック" },
		{ name: "フィットネス" },
		{ name: "最近アップロードされた動画" },
		{ name: "視聴済み" },
		{ name: "新しい動画の発見" },
		{ name: "すべて" },
		{ name: "音楽" },
		{ name: "ライブ" },
		{ name: "オーディオブック" },
		{ name: "フィットネス" },
		{ name: "最近アップロードされた動画" },
		{ name: "視聴済み" },
		{ name: "新しい動画の発見" },
	];

	return (
		<div className="tag-container">
			<div className="tag-list">
				{tagName.map((item, index) => (
					<div key={index} className="tag">
						{item.name}
					</div>
				))}
			</div>
		</div>
	);
}
