"use client";
import Link from "next/link";
import React, { useState } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";
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
	const routeM = useRouter();

	const clickSearch = () => {
		changeText(searchText)
	};
	const clickArticle2 = () => {
		routeM.push(`/article2`);
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
					<li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
						<DropdownMenu>
							<DropdownMenuTrigger className="outline-none">
								<img
									className="w-[32px] h-[32px] rounded-full object-cover"
									src="shox.jpg"
									alt=""
								></img>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="m-3 mt-4 bg-green-200">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<Link href={"http://localhost:3000/"}>
								<DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
								</Link>
								<DropdownMenuItem className="cursor-pointer">Billing</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">Team</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer">Subscription</DropdownMenuItem>
								<Link href={"article2"}>
									<DropdownMenuItem onCklick={clickArticle2} className="cursor-pointer">Article</DropdownMenuItem>
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
