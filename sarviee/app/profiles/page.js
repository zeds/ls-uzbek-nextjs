"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState("tom");
  const [age, setAge] = useState(30);

  const [profiles, setProfiles] = useState([
    { name: "tom", age: 18 },
    { name: "mexroj", age: 20 },
    { name: "shox", age: 23 },
    { name: "alsu", age: 19 },
    { name: "sarvi", age: 21 },
    { name: "asila", age: 22 },
  ]);

  const clickAdd = () => {
    setProfiles([...profiles, { name: name, age: age }]);
  };

  const clickEdit = (index) => {
    let newArr = [...profiles];
    newArr[index].age = 50;
    setProfiles(newArr);
  };

  const clickDelete = (index) => {
    let delteValue = [...profiles];
    delteValue.splice(index, 1);
    setProfiles(delteValue);
  };

  return (
    <div className="p-3">
      <div>
        私の名前は{name}で、年齢は{age}です。
      </div>
      <dir className="bg-red-200 p-2 w-[350px] rounded-md mb-2">
        <dir className="flex gap-3">
          <div className="mr-1">名前:</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[200px]"
          ></input>
        </dir>
        <dir className="flex gap-3">
          <div className="mr-1">年齢:</div>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-[200px]"
          ></input>
        </dir>
      </dir>

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
            onClick={() => clickEdit(index)}
            className="bg-[#00FF00] rounded-md px-2 py-1 mr-2"
          >
            変更
          </button>
          <button
            onClick={() => clickDelete(index)}
            className="bg-[#FF0000] text-white rounded-md px-2 py-1"
          >
            削除
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;