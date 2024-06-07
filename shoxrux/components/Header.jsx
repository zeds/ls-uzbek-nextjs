"use client";
import Link from "next/link";
import React, { useState } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";
import { FaGoogle } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { BiSolidUserAccount } from "react-icons/bi";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";



const Header = () => {
	const [flag, setFlag] = useState("jp"); // jp us au
	const [showModal, setShowModal] = useState(false); // true/false
	const changeText = useCounterStore((state) => state.changeText);
	const [searchText, setSearchText] = useState("");

	const clickSearch = () => {
		changeText(searchText)
	};

	return (
		<>
			{showModal ? (
				<FlagModal setShowModal={setShowModal} setFlag={setFlag} />
			) : null}

			<div className=" flex h-[56px] w-full bg-gray-500 justify-between items-center">
				<div className="flex items-center justify-center w-[169px] bg-blue-500">
					<div className="bg-red-200 w-10 h-10 p-2 shrink-0">
						<img src="burger.svg" alt=""></img>
					</div>
					<Link href={"/"}>
						<div className="w-[127px] h-[56px] bg-blue-300 py-[18px] pl-[16px] pr-[14px] shrink-0">
							<img src="logo.svg" alt=""></img>
						</div>
					</Link>
				</div>
				<div className="ml-[90px] w-full max-w-[732px] h-[40px] bg-orange-200 hidden sm:flex justify-end">
					{/* search */}
					<input
						text="text"
						onChange={(e) => setSearchText(e.target.value)}
						placeholder="検索"
						className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
					></input>

					{/* scope */}
					<button
						onClick={clickSearch}
						className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
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
				<ul className="flex items-center justify-end w-[225px] h-[40px] bg-red-500 shrink-0">
					{/* search */}
					<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
						<img className="bg-green-200" src="scope.svg" alt=""></img>
					</li>
					{/* mic */}
					<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
						<img className="bg-green-500" src="tom.png" alt=""></img>
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
						<img className="bg-green-500" src="video.svg" alt=""></img>
					</li>
					{/*bell*/}
					<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
						<img className="bg-green-500" src="bell.svg" alt=""></img>
					</li>
					{/* Mr Tom */}
					{/* <Link href={"/profiles"}> */}
					<li className="flex justify-center w-[70px] h-[34px] px-[6px] py-[1px]">
						<DropdownMenu>
							<DropdownMenuTrigger className="outline-none">
								<img
									className="w-[32px] h-[32px] rounded-full object-cover"
									src="shox.jpg"
									alt=""
								></img>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="mr-[40px] mt-4 ">
								<DropdownMenuLabel className="flex gap-4 w-full">
									<img className="w-[36px] h-[36px] rounded-full" src="shox.jpg" />
									<div className=" items-center">
										<h1>Amirjonov Shoxrux</h1>
										<p className="drop-p text-sm text-current">amirjonovdamin@gmial.com</p>
										<p className="drop-p2 text-[#095ED5]">showing channel</p>
									</div>

								</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<Link href={"http://localhost:3000/"}>
									<DropdownMenuItem className="cursor-pointer gap-3 "><img className="w-[24px]" src="ggg.svg"/>Google Account</DropdownMenuItem>
								</Link>
								<DropdownMenuItem className="cursor-pointer gap-3 "><img src="changeAccount.svg"/>Change Account</DropdownMenuItem>
								<Link href={"article2"}>
									<DropdownMenuItem className="cursor-pointer gap-3"><img src="logOut.svg"/>アーティクル</DropdownMenuItem>
								</Link>
							</DropdownMenuContent>
						</DropdownMenu>
					</li>
					{/* </Link> */}
				</ul>
			</div>
		</>
	);
};

export default Header;
