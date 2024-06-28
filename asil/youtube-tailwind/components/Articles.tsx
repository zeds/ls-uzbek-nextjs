import React from "react";

export default function Articles() {
  const articles = [
    {
      title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)",
      img: "/images/01.jpg",
      authorImg: "/images/001.jpg",
      author: "The Partially Examined Life",
      statistics: "10人回視聴・1時間前",
    },
    {
      title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)",
      img: "/images/01.jpg",
      authorImg: "/images/001.jpg",
      author: "The Partially Examined Life",
      statistics: "10人回視聴・1時間前",
    },
    {
      title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)",
      img: "/images/01.jpg",
      authorImg: "/images/001.jpg",
      author: "The Partially Examined Life",
      statistics: "10人回視聴・1時間前",
    },
    {
      title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)",
      img: "/images/01.jpg",
      authorImg: "/images/001.jpg",
      author: "The Partially Examined Life",
      statistics: "10人回視聴・1時間前",
    },
    {
      title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)",
      img: "/images/01.jpg",
      authorImg: "/images/001.jpg",
      author: "The Partially Examined Life",
      statistics: "10人回視聴・1時間前",
    },
    {
      title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)",
      img: "/images/01.jpg",
      authorImg: "/images/001.jpg",
      author: "The Partially Examined Life",
      statistics: "10人回視聴・1時間前",
    },
  ];

  return (
    <section className="pl-[240px] pr-[20px] pt-[120px] h-full grid grid-cols-3 gap-[10px]">
      {articles.map((article, index) => (
        <article key={index} className="w-full aspect-[2/1.8]">
          <img src={article.img} alt="Top Article" className="w-full rounded-[8px]" />
          <div className="flex gap-[10px] mt-[10px]">
            <img src={article.authorImg} alt="Author" className="w-[36px] h-[36px] rounded-full" />
            <div className="w-full">
              <div className="overflow-hidden text-ellipsis whitespace-nowrap text-[16px] font-medium text-[#0f0f0f]">
                {article.title}
              </div>
              <div className="text-[14px]">{article.author}</div>
              <div className="text-[14px]">{article.statistics}</div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
