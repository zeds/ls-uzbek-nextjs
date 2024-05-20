import React from "react";

const Article = ({ title, avatar }) => {
  return (
    <div className="w-[300px] h-[200px] bg-blue-300">
      <img className="w-[60px]" src={avatar} alt="image"></img>
      <div>{title}</div>
    </div>
  );
};

export default Article;
