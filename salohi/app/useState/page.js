"use client";
import { Button } from "@/components/ui/button";
import { useCounterStore } from "@/store";
import React, { useEffect, useState } from "react";
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

let update = true;

const Page = () => {
	const text = useCounterStore((state) => state.text);

	const [value, setValue] = useState("useStateの練習をするよ");

	const clickSearch = () => {
		alert("入力された値：" + value);
	};

	return (
		<div className="pt-[56px] bg-red-300 h-screen flex justify-center items-center">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Open</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[60]" align="top">
					<DropdownMenuLabel><div className="flex gap-2">
						<img className="w-[32px] h-[32px] rounded-full" src="my foto.jpg">
						</img><div>
                                <div>GULBOYEV SALOHIDDIN</div>
                                <div>@gulboyev_1</div>
								<div className="text-[#095ED5] mt-2 cursor-pointer">
                                    チャンネルを表示</div>
                            </div>
							</div>
						</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							{/* <User className="mr-2 h-4 w-4" />
							<span>Google account</span> */}
							<div className="flex items-center cursor-pointer gap-3"><img className="w-[24px]" src="ggg.svg" alt="rasm"></img>Google　アカウント</div>
							{/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
						</DropdownMenuItem>
						{/* <DropdownMenuItem>
							<CreditCard className="mr-2 h-4 w-4" />
							<span>Billing</span>
							<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
						</DropdownMenuItem> */}
						{/* <DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							<span>Settings</span>
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem> */}
						{/* <DropdownMenuItem>
							<Keyboard className="mr-2 h-4 w-4" />
							<span>Keyboard shortcuts</span>
							<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
						</DropdownMenuItem> */}
					</DropdownMenuGroup>
					{/* <DropdownMenuSeparator /> */}
					<DropdownMenuGroup>
						{/* <DropdownMenuItem>
							<Users className="mr-2 h-4 w-4" />
							<span></span>
						</DropdownMenuItem> */}
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								{/* <UserPlus className="mr-2 h-4 w-4" />
								<span>Invite users</span> */}
								<div className="flex items-center cursor-pointer gap-3 "><img src="changeAccount.svg" alt="rasm"></img>アカウントを切り替える</div>
							</DropdownMenuSubTrigger>
							{/* <DropdownMenuPortal>
								<DropdownMenuSubContent> */}
									{/* <DropdownMenuItem>
										<Mail className="mr-2 h-4 w-4" />
										<span>Email</span>
									</DropdownMenuItem> */}
									{/* <DropdownMenuItem>
										<MessageSquare className="mr-2 h-4 w-4" />
										<span>Message</span>
									</DropdownMenuItem> */}
									{/* <DropdownMenuSeparator /> */}
									{/* <DropdownMenuItem>
										<PlusCircle className="mr-2 h-4 w-4" />
										<span>More...</span>
									</DropdownMenuItem> */}
								{/* </DropdownMenuSubContent>
							</DropdownMenuPortal> */}
						</DropdownMenuSub>
						{/* <DropdownMenuItem>
							<Plus className="mr-2 h-4 w-4" />
							<span>New Team</span>
							<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
						</DropdownMenuItem> */}
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						{/* <LogOut className="mr-2 h-4 w-4" />
						<span>ログアウト</span> */}
						<div className="flex items-center cursor-pointer gap-3"><img src="log-out.svg" alt="rasm"></img>ログアウト</div>
						{/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<div className="flex">
				<input
					className="p-2"
					type="text"
					onChange={(e) => setValue(e.target.value)}
				></input>
				<Button onClick={clickSearch} className="bg-blue-300 p-3">
					検索
				</Button>
			</div>
		</div>
	);
};

export default Page;
