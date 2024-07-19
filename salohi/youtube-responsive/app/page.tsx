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
    <div className="w-full h-dvh bg-sky-300 flex pt-14">
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
