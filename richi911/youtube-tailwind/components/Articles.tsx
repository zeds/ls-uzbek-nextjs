import React from "react";

export default function Articles() {
  const article = [
    { title: "aiueo1", img: "/images/raichel.webp" },
    { title: "aiueo2", img: "/images/raichel.webp" },
    { title: "aiueo3", img: "/images/raichel.webp" },
    { title: "aiueo4", img: "/images/raichel.webp" },
    { title: "aiueo5", img: "/images/raichel.webp" },
    { title: "aiueo6", img: "/images/raichel.webp" },
    { title: "aiueo7", img: "/images/raichel.webp" },
    { title: "aiueo8", img: "/images/raichel.webp" },
    { title: "aiueo9", img: "/images/raichel.webp" },
    { title: "aiueo10", img: "/images/raichel.webp" },
    { title: "aiueo11", img: "/images/raichel.webp" },
    { title: "aiueo12", img: "/images/raichel.webp" },
    { title: "aiueo13", img: "/images/raichel.webp" },
    { title: "aiueo14", img: "/images/raichel.webp" },
    { title: "aiueo15", img: "/images/raichel.webp" },
    { title: "aiueo16", img: "/images/raichel.webp" },
    { title: "aiueo17", img: "/images/raichel.webp" },
    { title: "aiueo18", img: "/images/raichel.webp" },
    { title: "aiueo19", img: "/images/raichel.webp" },
    { title: "aiueo20", img: "/images/raichel.webp" },
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
