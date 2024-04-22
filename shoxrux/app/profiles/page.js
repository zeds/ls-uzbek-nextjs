import React from "react";

const page = () => {
  return (
    <div className="flex justify-around items-center mt-20">
      <div>
        <h1 className="text-center font-medium">プロフィール</h1> <img id='img' className="w-[620px] rounded-2xl object-cover" src="fff.jpg"></img>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full pl-[50px] pr-[50px] mt-5">btn</button>
      </div>
    </div>
  );
};

export default page;
