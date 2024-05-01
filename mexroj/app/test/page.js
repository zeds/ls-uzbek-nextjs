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
    setProfiles([...profiles, { name, age }]);
  };

  const clickEdit = (index) => {
    let newArr = [...profiles];
    setAge(newArr[index].age);
    setName(newArr[index].name);
    newArr.splice(index, 1);
    setProfiles(newArr);
    // newArr[index].age = 50;
    // setProfiles(newArr);
  };
  const clickDelete = (index) => {
    let delteValue = [...profiles];
    delteValue.splice(index, 1);
    setProfiles(delteValue);
  };

  return (
    <div className="p-3">
      <div className="w-[300px] bg-pink-300  p-3 gap-3">
        <div className="flex gap-3 mb-2 ">
          <div>名前:</div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-[200px] bg-white right-[10px]"
          ></input>
        </div>
        <div className="flex gap-3 ">
          <div>年齢:</div>
          <input
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="w-[200px] bg-white right-[10px]"
          ></input>
        </div>
      </div>
      <div className="flex my-4">
        <div className="">
          私の名前は{name}です,私は{age}齢です。よろしくお願いします。
        </div>
        <button
          onClick={() => clickAdd()}
          className="bg-[#00FF00] rounded-md px-2 py-1 hover:opacity-70"
        >
          追加
        </button>
      </div>
      {profiles.map((item, index) => (
        <div key={index} className="flex m-3 items-center bg-gray-400">
          <div className="w-[120px] ">名前：{item.name}</div>
          <div className="w-[80px]">年齢：{item.age}</div>
          <button
            onClick={() => clickEdit(index)}
            className="bg-blue-400 rounded-md px-2 py-1 mr-2 hover:opacity-70 "
          >
            変更
          </button>
          <button
            onClick={() => clickDelete(index)}
            className="bg-[#FF0000] text-white rounded-md px-2 py-1 hover:opacity-70 "
          >
            削除
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
