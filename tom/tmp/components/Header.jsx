"use client";
import Link from "next/link";
import React, { useState } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";
import { useRouter } from "next/navigation";

// import { Button } from "@/components/ui/button";
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
import Image from "next/image";

const Header = () => {
	const { user } = useCounterStore();

	const router = useRouter();
	const [flag, setFlag] = useState("jp"); // jp us au
	const [showModal, setShowModal] = useState(false); // true/false

	const [searchText, setSearchText] = useState("");
	// const changeText = useCounterStore((state) => state.changeText);
	// const isLogin = useCounterStore((state) => state.isLogin);
	// const setLogin = useCounterStore((state) => state.setLogin);
	const { changeText, isLogin, setLogin } = useCounterStore();

	const clickSearch = () => {
		changeText(searchText);
	};

	return (
		<>
			{showModal ? (
				<FlagModal setShowModal={setShowModal} setFlag={setFlag} />
			) : null}
			<div className="absolute bg-red-300 top-0 z-10 flex h-[56px] w-full justify-between items-center px-3">
				<div className="flex items-center justify-center w-[169px] ">
					<div className="w-10 h-10 p-2 shrink-0">
						<img src="burger.svg" alt=""></img>
					</div>
					<Link href={"/"}>
						<div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
							<img src="logo.svg" alt=""></img>
						</div>
					</Link>
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
							className="flex rounded-full w-[24px]"
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
								src={`/flags/${flag}.svg`}
								alt=""
							></img>
						</button>
					</li>

					{isLogin ? (
						<>
							{/* video */}
							<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
								<img className="" src="video.svg" alt=""></img>
							</li>
							{/*bell*/}
							<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
								<img className="" src="bell.svg" alt=""></img>
							</li>
						</>
					) : null}

					{/* Mr Tom */}

					{/* 三項演算子
					{isLogin ? <div>a</div> : <div>b</div>} */}
					{isLogin ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<img
									className="w-[32px] h-[32px] rounded-full cursor-pointer"
									src="tom.jpeg"
									alt=""
								></img>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[300px]" align="end">
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<div className="flex">
											<div class="w-10 h-10 mr-4">
												<img
													className="rounded-full"
													src="tom.jpeg"
													alt="tom"
												/>
											</div>
											<div>
												<div>Tsutomu Okumura</div>
												<div>@tomzed39</div>
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
										<Link
											href={`/profiles/${user.id}`}
											className="flex items-center"
										>
											<div className="w-6 h-6 mr-4">
												<img src="/google.svg" alt="google" />
											</div>
											<span>マイプロフィール</span>
										</Link>
									</DropdownMenuItem>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger>
											<div className="w-6 h-6 mr-4">
												<Image
													width={36}
													height={36}
													src="/changeAccount.svg"
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
									<div
										className="flex w-full"
										onClick={() => setLogin(false)}
									>
										<div className="w-6 h-6 mr-4">
											<img src="/logout.svg" alt="logout" />
										</div>
										<span>ログアウト</span>
									</div>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div
							className="flex border-[1px] px-2 py-1 rounded-full items-center cursor-pointer"
							onClick={() => router.push("/login")}
						>
							<Image
								className=""
								src={"/logout-avatar.svg"}
								alt={"setting.svg"}
								width={30}
								height={30}
							/>
							<span className="text-[rgba(8,94,212,1)]">ログイン</span>
						</div>
					)}
				</ul>
			</div>
		</>
	);
};

export default Header;
