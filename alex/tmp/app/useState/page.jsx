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
	google,
} from "lucide-react"
   
import { button } from "@/components/ui/button"
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
} from "@/components/ui/dropdown-menu"


let update = true;

const Page = () => {
	const count = useCounterStore((state) => state.count);
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
				<DropdownMenuContent className="w-[300px]" align="absolute">
					<DropdownMenuGroup>
					<DropdownMenuItem>
						<div className="flex">
							<div class="w-10 h-10 mr-2">
								<img className="rounded-full" 
								src="https://yt3.ggpht.com/yti/ANjgQV_mrhIeKRdco9R83MugHy0Hm_Ojn_qd2TpJr0ljYxc=s88-c-k-c0x00ffffff-no-rj"></img>
							</div>
							<div>
								<div>Pingulin</div>
								<div>@pingulin</div>
								<div className="text-[blue] mt-2">チャンネルを表示</div>
							</div>
						</div>
						
					</DropdownMenuItem>
					<DropdownMenuItem>
						<img className="w-6 h-6 mr-2" src="https://www.svgrepo.com/show/520752/google-plus.svg" alt="Google"></img>
						<span>Google アカウント</span>
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>

					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
						<img className="w-4 h-4 mr-3" src="https://www.svgrepo.com/show/345305/change-switch-employee-business-office-work-management.svg" alt="Change account"></img>
						<span>アカウント切り替える</span>
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
					
					<LogOut className="mr-3 h-4 w-4" />
					<span>ログアウト</span>
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};
export default Page;
