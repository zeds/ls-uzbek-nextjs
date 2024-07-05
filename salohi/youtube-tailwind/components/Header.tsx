		import React from "react";
		import Image from "next/image";

		export default function Header() {
		return (
			<div className="fixed z-10 flex h-[56px] w-full justify-between items-center bg-white px-3 top-0">
			<div className="flex items-center justify-center w-[169px]">
				<div className="w-10 h-10 p-2 shrink-0 cursor-pointer">
				<img src="./images/burger.svg" alt=""></img>
				</div>
				<div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0 cursor-pointer">
				<img src="./images/youtube-logo.svg" alt=""></img>
				</div>
			</div>
			<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
				<input
				type="text"
				placeholder="検索"
				className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
				></input>
				<button className=" bg-gray-200 hover:bg-gray-300 shrink-0 w-[64px] h-[40px] rounded-r-full border-2 border-solid outline outline-gray-300 relative tooltip">
				<img
					className="w-[24px] absolute right-4 bottom-1.5"
					src="./images/scope.svg"
					alt=""
				></img>
				<span className="tooltip-text">search</span>
				</button>
				{/* mic */}
				<button className="bg-gray-200 hover:bg-gray-300 shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full  flex items-center justify-center aspect-square relative tooltip">
					<img
						className="flex rounded-full w-[24px]"
						src="./images/mic.svg"
						alt=""
					></img>
					<span className="tooltip-text">音声で検索</span>
				</button>
			</div>
			<ul className="flex items-center justify-end w-[225px] h-[40px] shrink-0 gap-2 cursor-pointer">
				<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
					<img src="./images/scope.svg" alt="search" />
				</li>
				<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2 cursor-pointer">
					<img className="" src="./images/mic.svg" alt=""></img>
				</li>
				<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 cursor-pointer rounded-full bg-slate-50 hover:bg-slate-300">
					<img className="" src="./images/video.svg" alt=""></img>
				</li>
				{/* <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 cursor-pointer ">
					<img className="" src="./images/globe.svg" alt=""></img>
				</li> */}
				<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 cursor-pointer rounded-full bg-slate-50 hover:bg-slate-300">
					<img className="" src="./images/bell.svg" alt=""></img>
				</li>
				<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 cursor-pointer  ">
					<img className="rounded-full  w-[40px] h-[30px] shrink-0"  src="./images/my foto.jpg" alt=""></img>
				</li>
			</ul>
			</div>
		);
		}