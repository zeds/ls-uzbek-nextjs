import React from "react";

export default function Articles() {
  const article = [
    { title: "あ1", img: "/images/2.webp" },
    { title: "あ2", img: "/images/2.webp" },
    { title: "あ3", img: "/images/2.webp" },
    { title: "あ4", img: "/images/2.webp" },
    { title: "あ5", img: "/images/2.webp" },
    { title: "あ6", img: "/images/2.webp" },
    { title: "あ7", img: "/images/2.webp" },
    { title: "あ8", img: "/images/2.webp" },
    { title: "あ9", img: "/images/2.webp" },
    { title: "あ10", img: "/images/2.webp" },
    { title: "あ11", img: "/images/2.webp" },
    { title: "あ12", img: "/images/2.webp" },
    { title: "あ13", img: "/images/2.webp" },
    { title: "あ14", img: "/images/2.webp" },
    { title: "あ15", img: "/images/2.webp" },
    { title: "あ16", img: "/images/2.webp" },
    { title: "あ17", img: "/images/2.webp" },
    { title: "あ18", img: "/images/2.webp" },
    { title: "あ19", img: "/images/2.webp" },
    { title: "あ20", img: "/images/2.webp" },
  ];

  return (
    <div className="w-full grid grid-cols-3 bg-pink-400 gap-3 overflow-y-auto pt-[56px] pl-[250px]">
      {article.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="hero" />
          <div className="bg-green-200">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
