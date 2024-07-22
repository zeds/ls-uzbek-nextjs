import Header from "@/components/Header";
import Image from "next/image";

const list = [
	"すべて",
	"ライブ",
	"オーディオブック",
	"観光",
	"フィットネス",
	"最近アップロードされた動画",
	"視聴済み",
	"新しい動画の発見",
];

export default function Home() {
	return (
		<div className="w-full h-dvh bg-sky-300 flex pt-14 pr-5">
			<Header />

			<div className="fixed z-20 h-dvh hidden md:block md:w-[80px] xl:w-[270px] bg-pink-300">
				<nav>
					<ul>
						<li className="flex px-[12px] items-center  bg-red-500 py-3 text-[14px] h-[40px] gap-6">
							<img src="images/yt-home.svg" alt="home" />
							<div>ホーム</div>
						</li>
					</ul>
				</nav>
			</div>

			{/* tag */}
			<ul className="fixed w-full flex bg-red-400 pl-5 md:pl-[90px] xl:pl-[280px] gap-3 py-1 pr-5 overflow-x-scroll hidden-scrollbar">
				{list.map((item, index) => (
					<li className="bg-gray-300 p-2 whitespace-nowrap" key={index}>
						{item}
					</li>
				))}
			</ul>

			{/* articles */}
			<div className="bg-green-300 pt-[70px] h-fit w-full grid grid-cols-1 pl-5 md:pl-[90px] xl:pl-[280px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
				<div className="bg-red-300">
					<div className="relative">
						<img src="diana.webp" alt="diana" />
						<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
							10:00
						</span>
					</div>
					<div className="flex">
						<img
							className="w-9 h-9 rounded-full"
							src="tom.jpeg"
							alt="tom"
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
						<img src="diana.webp" alt="diana" />
						<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
							10:00
						</span>
					</div>
					<div className="flex">
						<img
							className="w-9 h-9 rounded-full"
							src="tom.jpeg"
							alt="tom"
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
						<img src="diana.webp" alt="diana" />
						<span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
							10:00
						</span>
					</div>
					<div className="flex">
						<img
							className="w-9 h-9 rounded-full"
							src="tom.jpeg"
							alt="tom"
						/>
						<div>
							<div>title</div>
							<div>user</div>
							<div>stats</div>
						</div>
					</div>
				</div>
				<div className="bg-red-300">item-2</div>
				<div className="bg-red-300">item-3</div>
				<div className="bg-red-300">item-4</div>
				<div className="bg-red-300">item-5</div>
				<div className="bg-red-300">item-6</div>
				<div className="bg-red-300">item-7</div>
			</div>
		</div>
	);
}
