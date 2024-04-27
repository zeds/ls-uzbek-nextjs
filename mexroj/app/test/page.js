"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  // nameはboxの中にあるnameを表示
  // setNameで、boxの中にあるnameを変更する。
  const [name, setName] = useState("tom");
  // const [fruits, setFruits] = useState(["banana", "melon", "apple", "peach"]);

  const [profiles, setProfiles] = useState([
    { name: "tom", age: 18 },
    { name: "mexroj", age: 20 },
    { name: "shox", age: 23 },
    { name: "alsu", age: 19 },
    { name: "sarvi", age: 21 },
    { name: "asila", age: 22 },
  ]);

  const clickAdd = (index) => {
    alert("okoko");
  };

  // ボタンが押されたら、年齢を50にする。

  const clickEdit = (index) => {
    let newArr = [...profiles];
    newArr[index].age = 50;
    setProfiles(newArr); // まるごと交換
  };

  //  ボタンが押されたら、一つのプロフィールが消えます

  const clickDelete = (index) => {
    let delArr = [...profiles];
    delArr.splice(index, 1);
    setProfiles(delArr); // まるごと交換
  };

  return (
    <div className="items-center justify-center flex">
      <div className="p-3 w-[500px] justify-center bg-[skyblue] ">
        <div className="border-[3px] items-center justify-center flex">
          私の名前は{name}です
          <button
            onClick={() => clickAdd()}
            className="bg-[#00FF00] rounded-md px-2 py-1"
          >
            追加
          </button>
        </div>
        {profiles.map((item, index) => (
          <div key={index} className="flex m-3 items-center justify-around">
            <div className="w-[120px]">名前：{item.name}</div>
            <div className="w-[80px]">年齢：{item.age}</div>
            <button
              onClick={() => clickEdit(index)}
              className="bg-[#00FF00] rounded-md px-2 py-1"
            >
              50齢にする
            </button>
            <button
              onClick={() => clickDelete(index)}
              className="bg-[#00FF00] rounded-md px-2 py-1"
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
