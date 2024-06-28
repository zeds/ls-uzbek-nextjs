import React from "react";

export default function Articles() {
  const article = [
    {
      title:
        " Morning Piano Music | Piano music to Study, Work, Ambience,... 🎷 Best Choice for Study, Work #2",
      img: "/images/Morningmusic.webp",
    },
    {
      title: "Luck Life — 'Lily' | Color Coded Lyrics",
      img: "/images/Lily.webp",
    },
    {
      title: "UNREAL PLANET | Places That Don't Seem Real",
      img: "/images/Planet.webp",
    },
    {
      title: "Blue Lock Best Moments That Broke The Internet!!!🤯🤯",
      img: "/images/BlueLock.webp",
    },
    {
      title:
        "2.5-HOUR STUDY WITH ME / calm piano / 🚢 Yokohama Harbor at SUNSET🌃 /",
      img: "/images/study.webp",
    },
    { title: "あいうえお6", img: "/images/Cosplay.webp" },
    {
      title: "The FUNNIEST Pet Videos of 2023! 🤣 | BEST Compilation",
      img: "/images/animals.webp",
    },
    {
      title:
        "INFLUENCER INSANITY EP 1 | The unhinged consumerism of “restock” influencers, so unrealistic!",
      img: "/images/influence.webp",
    },
    {
      title: "☆ Xianyun Cosplay Makeup Tutorial Genshin Impact 原神 ☆",
      img: "/images/sleep.webp",
    },
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
