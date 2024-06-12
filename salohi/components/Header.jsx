	"use client";
		import Link from "next/link";
		import React, { useState } from "react";
		import FlagModal from "./FlagModal";
		import { useCounterStore } from "@/store";
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

		const setLogin = useCounterStore((state) => state.setLogin);
		const isLogin = useCounterStore((state) => state.isLogin);


		const clickSearch = () => {
			changeText(searchText);
		};

	return (
			<>
			{showModal ? (
				<FlagModal setShowModal={setShowModal} setFlag={setFlag} />
			) : null}
			<div className=" flex h-[56px] w-full justify-between items-center">
					<div className="flex items-center justify-center w-[169px]">
					<Link href={"/"}>
						<div className=" w-10 h-10 p-2 shrink-0">
							<img src="burger.svg" alt=""></img>
						</div>
						</Link>
				<Link href={"/articles"}>
					<div className="w-[127px] h-[56px]  py-[18px] pl-[16px] pr-[14px] shrink-0">
					<img src="logo.svg" alt=""></img>
					</div>
				</Link>
				</div>
				<div className=" flex items-center">
					{/* <button onClick={increment} className="p-1 border m-1">
					+
					</button>
					{count}
					<button onClick={decrement} className="p-1 border m-1">
					-
					</button> */}
				</div>
				<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
				{/* search */}
				<input
					type="text"
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="検索"
					className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
				></input>

				{/* scope */}
				<button
					onClick={clickSearch}
					className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300"
				>
					<img
					className="w-[24px] absolute right-4 bottom-1.5"
					src="scope.svg"
					alt=""
					></img>
				</button>

				{/* mic */}
				<button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
					<img
					className="flex shrink-0 rounded-full w-[24px]"
					src="mic.svg"
					alt=""
					></img>
				</button>
				</div>
				<ul className="flex items-center justify-end w-[250px] h-[40px] shrink-0">
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
				<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 mr-2">
					<img className="" src="bell.svg" alt=""></img>
				</li>
				{/* Mr Tom */}

				<li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
						{isLogin ? (
					<DropdownMenu>
								<DropdownMenuTrigger className="outline-none">
									<img
										className="w-[32px] h-[32px] rounded-full aspect-[1/1]"
										src="my foto.jpg"
										alt=""
									></img>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="mr-[40px] mt-4 ">
									<DropdownMenuLabel className="flex gap-4 w-full">
										<img className="w-[36px] h-[36px] rounded-full aspect-[1/1]" src="my foto.jpg" />
										<div className=" items-center">
											<p>SALOHIDDIN GULBOYEV</p>
											<p className="drop-p text-sm text-current">
												@gulboyev_1
											</p>
											<p className=" cursor-pointer drop-p2 text-[#095ED5]">チャンネルを表示</p>
										</div>

									</DropdownMenuLabel>
									<DropdownMenuSeparator />
										<DropdownMenuItem className=" gap-3 "><img className="w-[24px] cursor-pointer" src="ggg.svg"/>				Google アカウント</DropdownMenuItem>
									<DropdownMenuItem className="gap-3 "><img  className="w-[24px] cursor-pointer"src="changeAccount.svg"/>アカウントを切り替える</DropdownMenuItem>
									<DropdownMenuItem> <div className="flex items-center">
										<div className=" w-6 h-6 mr-4 cursor-pointer" onClick={() => setLogin(false)}>
											<img src="logout.svg" alt="logout" />
											</div>ログアウト
									</div>
								</DropdownMenuItem>
							</DropdownMenuContent>
							</DropdownMenu>
							) : (
								<div
								onClick={() => setLogin(true)}
								className="boder px-2 py-1 flex cursor-pointer rounded-full"
								><img src="profiles.svg" alt="" />
								<div className="mr-8 text">Login</div>
								</div>
							)}
					</li>
				</ul>
			</div>
			</>
		);
	};

export default Header;
