import Image from "next/image";

export default function Home() {
	return (
		<div className="w-full h-dvh bg-sky-300 flex pt-14">
			<>
				<div className="fixed z-20 flex h-[56px] top-0 w-full justify-between items-center bg-white px-3">
					<div className="flex items-center justify-center w-[169px] ">
						<div className="w-10 h-10 p-2 shrink-0">
							<img src="images/burger.svg" alt=""></img>
						</div>
						{/* <Link href={"/"}> */}
						<div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
							<img src="images/youtube-logo.svg" alt=""></img>
						</div>
						{/* </Link> */}
					</div>
					<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
						{/* search */}
						<input
							type="text"
							placeholder="検索"
							className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
						></input>

						{/* scope */}
						<button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300 tooltip">
							<img
								className="w-[24px] absolute right-4 bottom-1.5"
								src="images/scope.svg"
								alt=""
							></img>
							<span className="tooltip-text">検索</span>
						</button>

						{/* mic */}
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
						{/* search */}
						<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
							<img className="" src="images/scope.svg" alt=""></img>
						</li>
						{/* mic */}
						<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
							<img className="" src="images/mic.svg" alt=""></img>
						</li>

						<>
							{/* video */}
							<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
								<img className="" src="images/video.svg" alt=""></img>
							</li>
							{/*bell*/}
							<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
								<img className="" src="images/bell.svg" alt=""></img>
							</li>
						</>
						<img
							className="w-[32px] h-[32px] rounded-full cursor-pointer"
							src="images/my foto.jpg"
							alt="saxa"
						></img>
					</ul>
				</div>
			</>
			<div className="fixed top-[56px] z-20 h-dvh hidden md:block md:w-[80px] xl:w-[270px]  bg-red-300">
				nav
			</div>
			<div className="fixed top-[56px] w-full z-10 h-[56px] bg-red-500">
				tag
			</div>
			<div className="bg-green-300 h-fit w-full grid grid-cols-1 md:pl-[80px] xl:pl-[270px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
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
