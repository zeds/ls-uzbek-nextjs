import React from "react";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full h-[56px]  border-solid border-4 border-green-300 z-10 flex items-center justify-between">
      <div className="flex gap-3">
        <img className="h-5" src="/images/burger.svg" />
        <img className="h-5" src="/images/youtube-logo.svg" />
      </div>

      {/* search_container */}

      <div className="flex h-10 flex-grow-1 my-0 mx-5 max-w-[666px] ">
        <input
          type="text"
          placeholder="検索"
          className="w-full h-full border-solid border-#d3d3d3 rounded-2xl rounded-r-none"
        />
        <button className="w-15 h-full border-solid border-1 border-#d3d3d3 border-l-none rounded-2xl rounded-l-none  bg-#f8f8f8 flex items-center justify-center relative hover:bg-#e0e0e0">
          search
          <img src="images/scope.svg" />
        </button>
        <div className="flex w-10 ml-[14px] justify-center items-center rounded-2xl relative hover:bg-#e0e0e0">
          <img src="images/mic.svg" />
        </div>

        {/* right container */}
        <div className="h-full w-[150px] flex justify-around items-center mr-5 ">
          <div className="h-10 w-10 rounded-[20px] justify-center items-center relative">
            <img src="images/video.svg" />
          </div>
          <div className="bell">
            <img src="images/bell.svg" />
          </div>
          <img className="h-8 rounded-[20px]" src="images/me.jpeg" />
        </div>
      </div>
    </div>
  );
}
