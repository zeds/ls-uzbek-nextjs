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
    <div
      className=" grid pl-5 grid-cols-1 border-solid border-4 gap-3
    pt-14 pr-5 sm:grid-cols-2 md:pl-20 xl:grid-cols-3 lg:pl-60 2xl:grid-cols-4 bg-orange-400"
    >
      {article.map((item, index) => (
        <div key={index} className=" border-solid border-4 border-green-500 ">
          <div className=" relative">
            <img
              src={item.img}
              alt="hero"
              className="w-full h-full rounded-[12px] "
            />
            <div className="absolute bottom-[5px] bg-(rgba[0,0,0,0.6]) text-white p-[5px] rounded-[5px]">
              10:00
            </div>
          </div>
          <div>
            <div className="title">あいうえお</div>
            <div className="user">かきくけこ</div>
            <div className="stats">さしすせそ</div>
          </div>
        </div>
      ))}
    </div>
  );
}
