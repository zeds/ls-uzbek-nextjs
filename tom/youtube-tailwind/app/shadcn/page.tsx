import Articles from "@/components/Articles";
import { Button } from "@/components/ui/button";
import React from "react";

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

const page = () => {
	return (
		<div className="grid gap-3 grid-cols-1 px-3 pt-28 sm:pl-3 md:pl-20 lg:pl-20 xl:pl-60 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="outline">Open</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56">
					<DropdownMenuGroup>
						<DropdownMenuItem>
							<div className="flex">
								<div className="w-10 h-10 mr-4">
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
							<Users className="mr-2 h-4 w-4" />
							<span>Googleアカウント</span>
						</DropdownMenuItem>
						<DropdownMenuSub>
							<DropdownMenuSubTrigger>
								<UserPlus className="mr-2 h-4 w-4" />
								<span>アカントを切り替える</span>
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
						<LogOut className="mr-2 h-4 w-4" />
						<span>ログアウト</span>
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

export default page;
