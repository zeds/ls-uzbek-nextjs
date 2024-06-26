// rafce
import React from "react";
import "../globals.css";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-screen bg-blue-300 pt-[56px]">
        <div className="flex w-[380px] border-black border gap-3 pt-3">
            <div className="w-[36px] h-[36px] flex-shrink-0">
                <img className="rounded-full" src="https://plus.unsplash.com/premium_photo-1675107360049-8aaff2002de4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="rachel" />
            </div>
            <div>
           
                <div className="line-clamp-2 text-black leading-[22px] text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                    expedita assumenda hic, explicabo exercitationem magni aspernatur
                    quod ab sunt fugit iste, neque nam eligendi, dolorum maxime fuga
                    vel modi deserunt?
                </div>
                <div className="line-clamp-1 text-black leading-[20px] text-[14px] font-normal">Alex</div>
                <div className="line-clamp-1 text-black leading-[20px] text-[14px] font-normal">300</div>
            </div>
        </div>
    </div>
  );
};

export default page;
