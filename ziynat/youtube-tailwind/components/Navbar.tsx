import Image from "next/image";
import React from "react";

// CSJ

export default function Navbar() {
  const items = [
    { title: "ホーム", img: "./images/menu_home.svg" },
    { title: "ショート", img: "./images/menu_short.svg" },
    { title: "登録チャンネル", img: "./images/.svg" },
    { title: "YouTube Music", img: "./images/menu_music.svg" },
    { title: "", img: "" },
    { title: "チャンネル", img: "./images/.svg" },
    { title: "履歴", img: "./images/.svg" },
    { title: "再生リスト", img: "./images/.svg" },
    { title: "再生した動画", img: "./images/.svg" },
  ];

  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <>
            {item.title === "" ? (
              <div className="separator" />
            ) : (
              <li key={index}>
                <img src={item.img} alt="home" />
                <span className="title">{item.title}</span>
              </li>
            )}
          </>
        ))}
      </ul>
    </nav>
  );
}
