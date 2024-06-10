"use client";
import Link from "next/link";
import React, { useState } from "react";
import FlagModal from "./FlagModal";
import { useCounterStore } from "@/store";

import { Button } from "@/components/ui/button";
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
	const [flag, setFlag] = useState("jp"); // jp us au
	const [showModal, setShowModal] = useState(false); // true/false

	const changeText = useCounterStore((state) => state.changeText);
	const [searchText, setSearchText] = useState("");
	const isLogin = useCounterStore((state) => state.isLogin);
	const setLogin = useCounterStore((state) => state.setLogin);

	const clickSearch = () => {
		changeText(searchText);
	};

	return (
		<>
			{showModal ? (
				<FlagModal setShowModal={setShowModal} setFlag={setFlag} />
			) : null}
			<div className="fixed z-10 flex h-[56px] w-full justify-between items-center bg-white px-3">
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
								// src={`https://flagcdn.com/w320/${flag}.png`}
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
									src="alex01.jpg"
									alt="tom"
								></img>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="w-[300px]" align="top">
								<DropdownMenuGroup>
									<DropdownMenuItem>
										<div className="flex">
											<div class="w-10 h-10 mr-4">
												<img
													className="rounded-full"
													src="alex01.jpg"
													alt="tom"
												/>
											</div>
											<div>
												<div>Pingulin</div>
												<div>@pingulin</div>
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
											<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIyLjYwMiAxMC4wMDRhMSAxIDAgMCAwLS45ODQtLjgyMkgxMi4yYTEgMSAwIDAgMC0xIDF2My44NjhhMSAxIDAgMCAwIDEgMWgzLjk2MmEzLjY1MiAzLjY1MiAwIDAgMS0xLjEzMSAxLjE4N2E1LjA2IDUuMDYgMCAwIDEtMi44MzEuNzg1YTQuOTM1IDQuOTM1IDAgMCAxLTQuNjQ2LTMuNDM3di0uMDAyYTQuOTA0IDQuOTA0IDAgMCAxIDAtMy4xNjd2LS4wMDJBNC45MzYgNC45MzYgMCAwIDEgMTIuMiA2Ljk3OGE0LjM3OCA0LjM3OCAwIDAgMSAzLjEzMSAxLjIxN2ExIDEgMCAwIDAgMS4zOTktLjAxNWwyLjg2OC0yLjg2OGExIDEgMCAwIDAtLjAyNS0xLjQzOUExMC42MjMgMTAuNjIzIDAgMCAwIDEyLjIgMWExMC45NDkgMTAuOTQ5IDAgMCAwLTkuODI5IDYuMDU5bC0uMDAxLjAwMkExMC45MjIgMTAuOTIyIDAgMCAwIDEuMiAxMmExMS4wNzkgMTEuMDc5IDAgMCAwIDEuMTcgNC45NGwuMDAxLjAwMUExMC45NDkgMTAuOTQ5IDAgMCAwIDEyLjIgMjNhMTAuNTI2IDEwLjUyNiAwIDAgMCA3LjI5NS0yLjY4N2wuMDAxLS4wMDFhMTAuNzg2IDEwLjc4NiAwIDAgMCAzLjMwNC04LjA4NGExMi41MTUgMTIuNTE1IDAgMCAwLS4xOTgtMi4yMjRNMTIuMiAzYTguNjgyIDguNjgyIDAgMCAxIDUuMjA5IDEuNjczbC0xLjQ1NCAxLjQ1M0E2LjQ2MyA2LjQ2MyAwIDAgMCAxMi4yIDQuOTc4YTYuODg2IDYuODg2IDAgMCAwLTUuOTkgMy41NUw1LjE0MiA3LjdsLS41ODUtLjQ1NEE4Ljk1MyA4Ljk1MyAwIDAgMSAxMi4yIDNNMy42OCAxNC45MDNhOS4wMyA5LjAzIDAgMCAxIDAtNS44MDZsMS43ODIgMS4zODJhNi44NTQgNi44NTQgMCAwIDAgMCAzLjA0MlpNMTIuMiAyMWE4Ljk1MyA4Ljk1MyAwIDAgMS03LjY0NC00LjI0NmwuMzc5LS4yOTRsMS4yNzYtLjk5YTYuODg1IDYuODg1IDAgMCAwIDUuOTg5IDMuNTUyYTcuMjc3IDcuMjc3IDAgMCAwIDMuMzA2LS43NWwxLjY5MSAxLjMxM0E4Ljg5IDguODkgMCAwIDEgMTIuMiAyMW02LjUyNi0yLjc2bC0uMTgzLS4xNDNsLTEuMzc3LTEuMDY5YTUuNjA2IDUuNjA2IDAgMCAwIDEuNC0yLjc5NmExIDEgMCAwIDAtLjk4NC0xLjE4MkgxMy4ydi0xLjg2OGg3LjU0OWMuMDM0LjM0NS4wNTEuNjk1LjA1MSAxLjA0NmE5LjA1MiA5LjA1MiAwIDAgMS0yLjA3NCA2LjAxMSIvPjwvc3ZnPg==" alt="google" />
										</div>
										<span>Google アカウント</span>
									</DropdownMenuItem>
									<DropdownMenuSub>
										<DropdownMenuSubTrigger>
											<div className="w-6 h-6 mr-4">
												<img
													src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTEyIDBsLS42Ni4wM2wzLjgxIDMuODFMMTYuNSAyLjVjMy4yNSAxLjU3IDUuNTkgNC43NCA1Ljk1IDguNWgxLjVDMjMuNDQgNC44NCAxOC4yOSAwIDEyIDBtMCA0Yy0xLjkzIDAtMy41IDEuNTctMy41IDMuNVMxMC4wNyAxMSAxMiAxMXMzLjUtMS41NyAzLjUtMy41UzEzLjkzIDQgMTIgNG0wIDJjLjgzIDAgMS41LjY3IDEuNSAxLjVTMTIuODMgOSAxMiA5cy0xLjUtLjY3LTEuNS0xLjVTMTEuMTcgNiAxMiA2TS4wNSAxM0MuNTYgMTkuMTYgNS43MSAyNCAxMiAyNGwuNjYtLjAzbC0zLjgxLTMuODFMNy41IDIxLjVjLTMuMjUtMS41Ni01LjU5LTQuNzQtNS45NS04LjV6TTEyIDEzYy0zLjg3IDAtNyAxLjU3LTcgMy41VjE4aDE0di0xLjVjMC0xLjkzLTMuMTMtMy41LTctMy41bTAgMmMyLjExIDAgMy42MS41MyA0LjM5IDFINy42MWMuNzgtLjQ3IDIuMjgtMSA0LjM5LTEiLz48L3N2Zz4="
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
									<div className="w-6 h-6 mr-4">
										<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0ibTE3IDdsLTEuNDEgMS40MUwxOC4xNyAxMUg4djJoMTAuMTdsLTIuNTggMi41OEwxNyAxN2w1LTVNNCA1aDhWM0g0Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDh2LTJINHoiLz48L3N2Zz4=" alt="logout" />
									</div>
									<span onClick={() => setLogin(false)}>
										ログアウト
									</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div
							className="flex border-[1px] px-2 py-1 rounded-full items-center cursor-pointer"
							onClick={() => setLogin(true)}
						>
							<Image
								className="text-blue-400"
								src={"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTEyIDEyLjM4NXEtMS4yNDYgMC0yLjEyMy0uODc3VDkgOS4zODV2LTIuNzVxMC0uNDcxLjMyMi0uODAzdC43OTQtLjMzMnEuMjk4IDAgLjUzOS4xMzdxLjI0MS4xMzYuNDAzLjM2NXEuMTYxLS4yMjkuNDAzLS4zNjVxLjI0MS0uMTM3LjUzOS0uMTM3dC41NC4xMzd0LjQwMi4zNjVxLjE2Mi0uMjI5LjQwMy0uMzY1cS4yNDEtLjEzNy41NC0uMTM3cS40NyAwIC43OTMuMzMycS4zMjIuMzMyLjMyMi44MDN2Mi43NXEwIDEuMjQ2LS44NzcgMi4xMjNUMTIgMTIuMzg1bS03IDcuMjNWMTcuOTdxMC0uNjE5LjM2LTEuMTU4cS4zNjEtLjU0Ljk3LS44MzhxMS40MTYtLjY3OSAyLjgzNC0xLjAxOHExLjQxNy0uMzQgMi44MzYtLjM0dDIuODM3LjM0dDIuODMyIDEuMDE4cS42MS4yOTguOTcuODM4cS4zNjEuNTM5LjM2MSAxLjE1OHYxLjY0NnoiLz48L3N2Zz4="}
								alt={"setting.svg"}
								// fill
								width={0}
								height={0}
								style={{ width: "30px", color: "red" }}
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
