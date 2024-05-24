"use client";
import React from "react";
import CsvDownloader from "react-csv-downloader";

const Page = () => {
  return (
    <div className="pt-[56px]">
      <p>配列をcsvで出力(export)します</p>
      <CsvDownloader
        filename="myfile"
        extension=".csv"
        separator=";"
        wrapColumnChar=""
        columns={columns}
        datas={recommendData}
        text="DOWNLOAD"
        className="bg-red-200 border border-black p-2"
      />
    </div>
  );
};

export default Page;
