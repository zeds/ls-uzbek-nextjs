"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  // nameはboxの中にあるnameを表示
  // setNameで、boxの中にあるnameを変更する。
  const [name, setName] = useState("tom");
  const [fruits, setFruits] = useState(["banana", "melon", "apple", "peach"]);
  // let fruits = ["banana", "melon", "apple", "peach"];

  const [profiles, setProfiles] = useState([
    { name: "tom", age: 18 },
    { name: "mexroj", age: 20 },
    { name: "shox", age: 23 },
    { name: "alsu", age: 19 },
    { name: "sarvi", age: 21 },
    { name: "asila", age: 22 },
  ]);

  // ボタンが押されたら、年齢を50にする。

  const clickAdd = () => {
    // grapeを追加、「...」はスプレット構文
    let newArr = [...fruits, "grape"];
    // newArr.push("grape");
    setFruits(newArr); // まるごと交換
  };

  const clickDelete = (index) => {
    let newArr = [...fruits];
    newArr.splice(index, 1);
    setFruits(newArr); // まるごと交換
  };

  const clickChange = (index) => {
    let newArr = [...profiles];
    newArr[index].age = 50;
    setProfiles(newArr);
  };

  return (
    <div className="p-3">
      <div>私の名前は{name}です</div>
      <button
        onClick={() => clickAdd()}
        className="bg-[#00FF00] rounded-md px-2 py-1"
      >
        追加
      </button>

      {profiles.map((item, index) => (
        <div key={index} className="flex m-3 items-center">
          <div className="w-[120px]">名前：{item.name}</div>
          <div className="w-[80px]">年齢：{item.age}</div>
          <button
            onClick={() => clickChange(index)}
            className="bg-[#00FF00] rounded-md px-2 py-1"
          >
            変更
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
