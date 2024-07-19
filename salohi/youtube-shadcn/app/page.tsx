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

	export default function Home() {
	const tagName = [
		{ name: "すべて" },
		{ name: "音楽" },
		{ name: "ライブ" },
		{ name: "オーディオブック" },
		{ name: "フィットネス" },
		{ name: "最近アップロードされた動画" },
		{ name: "視聴済み" },
		{ name: "新しい動画の発見" },
	];
	return (
		<div className="w-full h-dvh bg-sky-300 flex">
		<ul className="fixed z-10 top-14 w-full items-center pl-2  md:pl-[90px] lx:pl-[270] bg-white  overflow-scroll tag-list">
			<li className="flex">
			{tagName.map((item, index) => (
				<li
				key={index}
				className="flex mr-[10px] bg-gray-200 font-medium text-[14px] text-#0f0f0f  py-[5px] px-3 rounded-[8px] h-8 leading-[23px] hover:cursor-pointer hover:bg-slate-300 whitespace-nowrap"
				>
				{item.name}
				</li>
			))}
			</li>
		</ul>
		<div className="fixed z-20 h-dvh hidden md:block md:w-[80px] lg:w-[270px] bg-red-300">
			nav
		</div>
		<div className="pt-[56px] pl-3 pr-3 bg-white h-fit w-full grid grid-cols-1 md:pl-[80px] xl:pl-[270px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
			<div className="bg-red-300">
			<div className="relative ">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
			<div className="bg-red-300">
			<div className="relative">
				<img src="./images/raichel.webp" alt="diana" />
				<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
				10:00
				</span>
			</div>
			<div className="flex gap-2">
				<img
				className="w-9 h-9 rounded-full pl-1 pt-1"
				src="./images/my foto.jpg"
				alt="saloh"
				/>
				<div>
				<div>title</div>
				<div>user</div>
				<div>stats</div>
				</div>
			</div>
			</div>
		</div>
		</div>
	);
	}
