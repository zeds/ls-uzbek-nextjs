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
    <div className="pl-0 grid grid-cols-1 sm:grid-cols-2 md:pl-20 xl:pl-60 lg:grid-cols-3 2xl:grid-cols-4   border-4 border-pink-300 gap-3">
      {article.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="hero" />
          <div className="bg-red-400">{item.title}</div>
        </div>
      ))}
    </div>
  );
}
