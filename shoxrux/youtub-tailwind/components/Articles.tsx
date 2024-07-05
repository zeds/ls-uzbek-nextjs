import React from "react";

export default function Articles() {
  const article = [
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },

    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },

    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },

    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },

    { title: "あいうえお1", img: "./fff.jpg" },
    { title: "あいうえお1", img: "./fff.jpg" },
  ];

  return (
    <div className="article-container">
      {article.map((item, index) => (
        <div key={index} className="article">
          <div className="hero">
            <img src={item.img} alt="hero" />
            <div className="time">10:00</div>
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
