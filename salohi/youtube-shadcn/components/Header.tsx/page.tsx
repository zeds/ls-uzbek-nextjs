"use client";
import React from "react";
import { useRouter } from "next/navigation";

import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<>
			<div className="fixed z-20 flex h-[56px] top-0 w-full justify-between items-center bg-white px-3">
			<div className="flex items-center justify-center w-[169px] ">
			<div className="w-10 h-10 p-2 shrink-0">
				<img src="images/burger.svg" alt=""></img>
			</div>
			<div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
				<img src="images/youtube-logo.svg" alt=""></img>
			</div>
			</div>
			<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
			<input
				type="text"
				placeholder="検索"
				className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
			></input>
			<button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300 tooltip">
				<img
				className="w-[24px] absolute right-4 bottom-1.5"
				src="images/scope.svg"
				alt=""
				></img>
				<span className="tooltip-text">検索</span>
			</button>
			<button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square relative tooltip">
				<img
				className="flex rounded-full w-[24px]"
				src="images/mic.svg"
				alt=""
				></img>
				<span className="tooltip-text">音声で検索</span>
			</button>
			</div>
			<ul className="flex items-center justify-end w-[225px] h-[40px] pr-3  shrink-0">
			<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
				<img className="" src="images/scope.svg" alt=""></img>
			</li>
			<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
				<img className="" src="images/mic.svg" alt=""></img>
			</li>
			<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
				<img className="" src="images/video.svg" alt=""></img>
			</li>
			<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
				<img className="" src="images/bell.svg" alt=""></img>
			</li>
			<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<img
										className="w-[32px] h-[32px] rounded-full cursor-pointer"
										src="./images/my foto.jpg"
										alt=""
									></img>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-[300px]" align="end">
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<div className="flex">
												<div className="w-10 h-10 mr-4">
													<img
														className="w-[36px] h-[36px] rounded-full"
														src="./images/my foto.jpg"
														alt="saxa"
													/>
												</div>
												<div>
													<div>Salohiddin Gulboyev</div>
													<div>@gulboyev_1</div>
													<div className="text-[#095ED5] mt-2">
														チャンネルを表示
													</div>
												</div>
											</div>
										</DropdownMenuItem>
									</DropdownMenuGroup>
									<DropdownMenuSeparator />
									<DropdownMenuGroup>
										<DropdownMenuItem>
											<div className="w-6 h-6 mr-4">
												<img src="./images/ggg.svg" alt="google" />
											</div>
											<span>Google アカウント</span>
										</DropdownMenuItem>
										<DropdownMenuSub>
											<DropdownMenuSubTrigger>
												<div className="w-6 h-6 mr-4">
													<img
														src="./images/changeAccount.svg"
														alt="changeAccount"
													/>
												</div>
												<span>アカウントを切り替える</span>
											</DropdownMenuSubTrigger>
											<DropdownMenuPortal>
												<DropdownMenuSubContent>
													<DropdownMenuItem>
														<Mail className="mr-2 h-4 w-4" />
														<span>Email</span>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<MessageSquare className="mr-2 h-4 w-4" />
														<span>Message</span>
													</DropdownMenuItem>
													<DropdownMenuSeparator />
													<DropdownMenuItem>
														<PlusCircle className="mr-2 h-4 w-4" />
														<span>More...</span>
													</DropdownMenuItem>
												</DropdownMenuSubContent>
											</DropdownMenuPortal>
										</DropdownMenuSub>
									</DropdownMenuGroup>
									<DropdownMenuItem>
										<div className="flex w-full">
											<div className="w-6 h-6 mr-4">
												<img src="./images/logout.svg" alt="logout" />
											</div>
											<span>ログアウト</span>
										</div>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
			</ul>
		</div>
		</>
	);
};

export default Header;
