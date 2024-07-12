import React from "react";

export default function Tags() {
  const tagName = [
    { name: "All" },
    { name: "Gaming" },
    { name: "Mixes" },
    { name: "News" },
    { name: "Podcast" },
    { name: "Landscapes" },
    { name: "Manga" },
    { name: "Beauty" },
  ];

  return (
    <div className="fixed z-10 top-14 h-14 w-full items-center flex sm:pl-0 md:pl-20 lg:pl-60 bg-white">
      <div className="tag-list flex whitespace-nowrap overflow-x-scroll ">
        {tagName.map((item, index) => (
          <div
            key={index}
            className="flex mr-[10px] bg-gray-200 font-medium text-[14px] text-#0f0f0f  py-[5px] px-3 rounded-[8px] h-8 leading-[23px] hover:cursor-pointer hover:bg-gray-300"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
