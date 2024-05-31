// rafce
import React from "react";
import "../globals.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen bg-blue-300 pt-14">
      <div className="flex w-[380px] border-black border gap-3 pt-3">
        <div className="w-9 h-9 flex-shrink-0">
          <img src="CAT.jpg" alt="cat" />
        </div>
        <div>
          <div className="line-clamp-2 text-black leading-[22px] text-4 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            expedita assumenda hic, explicabo exercitationem magni aspernatur
            quod ab sunt fugit iste, neque nam eligendi, dolorum maxime fuga vel
            modi deserunt?
          </div>
          <div className="line-clamp-1 text-black leading-5 text-[14px] font-normal">
            English lesson
          </div>
          <div className="line-clamp-1 text-black leading-5 text-[14px] font-normal">
            1.11M views
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
