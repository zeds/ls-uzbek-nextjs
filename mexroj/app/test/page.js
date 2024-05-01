"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState("tom");
  const [age, setAge] = useState(30);

  const [isEdit, setIsEdit] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [profiles, setProfiles] = useState([
    { name: "tom", age: 18 },
    { name: "mexroj", age: 20 },
    { name: "shox", age: 23 },
    { name: "alsu", age: 19 },
    { name: "sarvi", age: 21 },
    { name: "asila", age: 22 },
  ]);

  const clickAdd = () => {
    if (isEdit) {
      let newArr = [...profiles];
      newArr[currentIndex].name = name;
      newArr[currentIndex].age = age;
      setProfiles(newArr);
    } else {
      setProfiles([...profiles, { name: name, age: age }]);
    }
    setIsEdit(false);
  };

  const clickEdit = (index) => {
    let newArr = [...profiles];
    setAge(newArr[index].age);
    setName(newArr[index].name);

    setIsEdit(true);
    setCurrentIndex(index);
  };
  const clickDelete = (index) => {
    let delteValue = [...profiles];
    delteValue.splice(index, 1);
    setProfiles(delteValue);
  };

  return (
    <div className="p-3">
      <div className="w-[300px] bg-pink-300  p-3 gap-3 items-center justify-center">
        <div className="flex gap-3 mb-2 ">
          <div>名前:</div>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="p-1"
          ></input>
        </div>
        <div className="flex gap-3 ">
          <div>年齢:</div>
          <input
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="p-1"
          ></input>
        </div>
        <div className="flex w-full h-[50px] justify-center items-center">
          <button
            onClick={() => clickAdd()}
            className="bg-[#00FF00] rounded-md px-10 py-2 mt-5"
          >
            {isEdit ? "更新" : "追加"}
          </button>
        </div>
      </div>
      <div className="flex my-4">
        <div className="">
          私の名前は{name}です,私は{age}齢です。よろしくお願いします。
        </div>
      </div>
      {profiles.map((item, index) => (
        <div key={index} className="flex m-3 items-center bg-gray-300">
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
