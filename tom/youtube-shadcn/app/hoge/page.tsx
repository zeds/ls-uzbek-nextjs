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

const page = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<img
					className="w-[32px] h-[32px] rounded-full cursor-pointer"
					src="tom.jpeg"
					alt=""
				></img>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56 pt-5">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
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
					<DropdownMenuSeparator />

					<DropdownMenuItem>
						<Link href={`/profiles/`} className="flex items-center">
							<div className="w-6 h-6 mr-4">
								<img src="/google.svg" alt="google" />
							</div>
							<span>マイプロフィール</span>
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuGroup>
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
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<div className="flex w-full">
						<div className="w-6 h-6 mr-4">
							<img src="/logout.svg" alt="logout" />
						</div>
						<span>ログアウト</span>
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

// const page = () => {
// 	return (
// 		<div>
// 			<Button>shadcnのボタン</Button>
// 		</div>
// 	);
// };

export default page;
