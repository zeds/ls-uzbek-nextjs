import React from "react";

const Article = ({ title, avatar, user_name, stats, img_url }) => {
	return (
		<div className="article-container  grid-cols-4">
			<div className=" bg-blue-300 mb-10 w-[300px] m-outo">
				<img className="w-[90%]m-auto" src={img_url} />
				<img className="w-[60px]" src={avatar} alt="image"></img>
				<div>{title}</div>
				<div>{user_name}</div>
				<div>{stats}</div>
			</div>
		</div>
	);
};

export default Article;
