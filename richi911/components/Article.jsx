import React from "react";

const Article = ({ title, avatar, user_name, stats, img_url }) => {
	return (
		<div className="w-[300px] bg-blue-300">
			<img src={img_url} />
			<img className="w-[60px]" src={avatar} alt="image"></img>
			<div className="line-clamp-2">{title}</div>
			<div>{user_name}</div>
			<div>{stats}</div>
		</div>
	);
};

export default Article;
