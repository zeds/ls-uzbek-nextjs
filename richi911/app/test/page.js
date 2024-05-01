"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [name, setName] = useState("tom");
  const [age, setAge] = useState(34);
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
    setName(profiles[index].name);
    setAge(profiles[index].age);
    setIsEdit(true);
    setCurrentIndex(index);
  };

  const clickDelete = (index) => {
    let deleteValue = [...profiles];
    deleteValue.splice(index, 1);
    setProfiles(deleteValue);
  };

  return (
    <div className="p-3">
      <div>私の名前は{name}です</div>

      <div className="w-[320px] h-[150px] bg-gray-400 p-2 rounded-md">
        <div className="flex items-center">
          名前：
          <input
            className="p-1 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="flex items-center mt-2">
          年齢：
          <input
            className="p-1 rounded-md"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></input>
        </div>
        <div className="flex w-full h-[50px] justify-center items-center">
          <button
            onClick={() => clickAdd()}
            className="bg-[#00FF00] rounded-md px-10 py-2 mt-5 rounded-md px-2 py-1 hover:opacity-70"
          >
            {isEdit ? "更新" : "追加"}
          </button>
        </div>
      </div>

      {profiles.map((item, index) => (
        <div key={index} className="flex m-3 items-center">
          <div className="w-[120px]">名前：{item.name}</div>
          <div className="w-[80px]">年齢：{item.age}</div>
          <button
            onClick={() => clickEdit(index)}
            className="bg-[#00FF00] rounded-md px-2 py-1 mr-2 text-black rounded-md px-2 py-1 hover:opacity-70"
          >
            変更
          </button>
          <button
            onClick={() => clickDelete(index)}
            className="bg-[#FF0000] text-white rounded-md px-2 py-1 hover:opacity-70"
          >
            削除
          </button>
        </div>
      ))}
    </div>
  );
};

export default Page;
