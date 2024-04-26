"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("tom");
  // let name = "tom"
  const [fruits, setFruits] = useState(["apple", "banana", "cherry"]);

  const [profiles, setProfiles] = useState([
    { name: "tom", age: 18 },
    { name: "Ziynat", age: 20 },
    { name: "Alex", age: 23 },
    { name: "Asil", age: 19 },
    { name: "Chan", age: 8 },
  ]);

  const changeName = () => {
    // name = "Bob"
    setName("Bob");

    console.log("name=", name);
  };

  const addFruits = () => {
    let newArr = [...fruits, "grape"];
    // newArr.push("grape");
    setFruits(newArr);
  };

  const deleteFruits = (index) => {
    let newArr = [...fruits];
    newArr.splice(index, 1);
    setFruits(newArr);
  };

  return (
    <div>
      {profiles.map((item, index) =>(
        <div key={index}>{item.name}</div>
        
      ))}
/*
      name: tom, age: 18
      name: Ziynat, age: 20
      name: Alex, age: 23
      name: Asil, age: 19
      name: Chan, age: 8
*/      
      
    </div>
  );
};

export default Page;
