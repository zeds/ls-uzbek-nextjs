"use client";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [searchValue, setSearchValue] = useState(""); // ja
  const [name, setName] = useState("tom");
  const [dataSource, setDataSource] = useState([
    { name: "American Samoa", iso2: "as" },
    { name: "Andorra", iso2: "ad" },
    { name: "Angola", iso2: "ao" },
    { name: "Anguilla", iso2: "ai" },
  ]);
  const [resultSource, setResultSource] = useState([
    { name: "American Samoa", iso2: "as" },
    { name: "Andorra", iso2: "ad" },
    { name: "Angola", iso2: "ao" },
    { name: "Anguilla", iso2: "ai" },
  ]);

  function searchFunc(item) {
    console.log("item=", item);

    return item.name.match(new RegExp(`^${searchValue}`, "g"));

    // if (item.name.length > 6) {
    //         return true;
    // } else {
    //         return false;
    // }
  }

  useEffect(() => {
    console.log("dataSource=", dataSource);
    console.log("searchValue=", searchValue);
    // const result = words.filter((word) => word.includes(searchValue));
    let result = dataSource.filter(searchFunc);

    // let result = dataSource.filter((data) => {
    //         return data.name.includes(searchValue);
    //         // return data.name.match(new RegExp(`^${searchValue}`, ""g""));
    // });

    console.log("result=", result);

    setResultSource(result);
  }, [searchValue]);

  return (
    <>
      <div>{JSON.stringify(dataSource)}</div>
      <div>####################</div>
      <div>{JSON.stringify(resultSource)}</div>

      <h1>検索:{searchValue}</h1>
      <input
        className="bg-red-200 p-2"
        type="text"
        name="searchValue"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
    </>
  );
};

export default Page;
