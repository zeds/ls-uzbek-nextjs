import React from "react";

export default function Article() {
  const articles = [
    { title: "Partially Examined Life #335: Aristotle on Fundamental Explanations (Part Two)", img: "/images/01.jpg", author: "The Partially Examined Life", author_img: "/images/001.jpg", statistics: "10人回視聴・1時間前" },
    { title: "When an Illegal Act Takes a Life", img: "/images/02.jpg", author: "Ben Shapiro", author_img: "/images/002.jpg", statistics: "668万人回視聴・2週間前" },
    { title: "Varieties of Successorship (Set Theory)", img: "/images/03.jpg", author: "Carneades.org", author_img: "/images/003.jpg", statistics: "127回視聴・4時間前" },
    { title: "Madame Web - YMS", img: "/images/04.jpg", author: "YMS", author_img: "/images/004.jpg", statistics: "20万回視聴・8時間前" },
    { title: "My Rewrite Of 'That Funny Feeling' By Bo Burnham", img: "/images/05.jpg", author: "Amala Ekpunobi", author_img: "/images/005.jpg", statistics: "1.9万回視聴・13時間前" },
  ];

  return (
    <div className="article-container">
      {articles.map((item, index) => (
        <div key={index} className="article">
          <div className="thumbnail">
            <img src={item.img} alt="thumbnail" />
            <div className="time">09:28</div>
          </div>
          <div className="content">
            <img src={item.author_img} alt="author avatar" className="author-avatar" />
            <div className="info">
              <h3 className="title">{item.title}</h3>
              <p className="author">{item.author}</p>
              <p className="statistics">{item.statistics}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
