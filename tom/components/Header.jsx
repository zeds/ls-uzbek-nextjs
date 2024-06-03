"use client";
import Link from "next/link";
import React, { useState } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";

const Header = () => {
	const [flag, setFlag] = useState("jp"); // jp us au
	const [showModal, setShowModal] = useState(false); // true/false
	const count = useCounterStore((state) => state.count);
	const increment = useCounterStore((state) => state.increment);
	const decrement = useCounterStore((state) => state.decrement);

	return (
		<>
			{showModal ? (
				<FlagModal setShowModal={setShowModal} setFlag={setFlag} />
			) : null}
			<div className="fixed z-10 flex h-[56px] w-full justify-between items-center bg-white">
				<div className="flex items-center justify-center w-[169px] ">
					<div className="w-10 h-10 p-2 shrink-0">
						<img src="burger.svg" alt=""></img>
					</div>
					<Link href={"/"}>
						<div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
							<img src="logo.svg" alt=""></img>
						</div>
					</Link>
					<div className="flex items-center">
						<button onClick={increment} className="p-1 border m-1">
							+
						</button>
						{count}
						<button onClick={decrement} className="p-1 border m-1">
							-
						</button>
					</div>
				</div>
				<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
					{/* search */}
					<input
						placeholder="検索"
						className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
					></input>

					{/* scope */}
					<button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
						<img
							className="w-[24px] absolute right-4 bottom-1.5"
							src="scope.svg"
							alt=""
						></img>
					</button>

					{/* mic */}
					<button className="ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
						<img
							className="flex shrink-0 rounded-full w-[24px]"
							src="mic.svg"
							alt=""
						></img>
					</button>
				</div>
				<ul className="flex items-center justify-end w-[225px] h-[40px]  shrink-0">
					{/* search */}
					<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
						<img className="" src="scope.svg" alt=""></img>
					</li>
					{/* mic */}
					<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
						<img className="" src="mic.svg" alt=""></img>
					</li>

					{/* flag 国旗 */}
					<li className="flex items-center shrink-0 w-[60px] p-2">
						<button onClick={() => setShowModal(true)}>
							<img
								className=" w-[30px]"
								// src={`https://flagcdn.com/w320/${flag}.png`}
								src={`/flags/${flag}.svg`}
								alt=""
							></img>
						</button>
					</li>

					{/* video */}
					<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
						<img className="" src="video.svg" alt=""></img>
					</li>
					{/*bell*/}
					<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
						<img className="" src="bell.svg" alt=""></img>
					</li>
					{/* Mr Tom */}
					<Link href={"/profiles"}>
						<li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
							<img
								className="w-[32px] h-[32px] rounded-full"
								src="me.jpg"
								alt=""
							></img>
						</li>
					</Link>
				</ul>
			</div>
		</>
	);
};

export default Header;
