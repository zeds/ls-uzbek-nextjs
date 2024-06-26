"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [inputName, setInputName] = useState()
  const [inputAge, setInputAge] = useState()
  const [isEdit, setIsEdit] = useState(false); // 追加
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profiles, setProfiles] = useState([
    { name: "tom", age: 18 },
    { name: "mexroj", age: 20 },
    { name: "shox", age: 23 },
    { name: "alsu", age: 19 },
    { name: "sarvi", age: 21 },
    { name: "asila", age: 22 },
  ]);

  const clickDelete = (index) => {
    let deleteValue = [...profiles];
    deleteValue.splice(index, 1);
    setProfiles(deleteValue);
  }
  const clickAdd = () => {

	};
  return (
    <div className="p-3 bg-fon">

      <div className="w-[300px] h-[150px]bg-pink-300 p-2">
        <div className="flex items-center">
          名前： <input className="p-1 inputName mb-3" value={inputName}></input>
        </div>
        <div className="flex items-center">
          年齢： <input className="p-1 inputName" value={inputAge}></input>
        </div>
        <div className="flex w-full h-[50px] justify-center items-center">
          <button onClick={() => clickAdd()}
            className="bg-[#00FF00] rounded-md px-10 py-2 mt-5">Enter</button>
        </div>
      </div>


      {profiles.map((item, index) => (
        <div key={index} className="flex m-3 items-center">
          <div className="w-[120px]">{item.name}</div>
          <div className="w-[120px]">{item.age}</div>
          <button onClick={() => clickDelete(index)} className="btn">delete</button>
        </div>
      ))}
    </div>
  )
}
export default Page;