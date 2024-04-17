export default function Home() {
	return (
		<main className="w-full h-screen bg-white">
			<header className="my-grid">
				<div className="flex items-center justify-center ml-4">
					<div className="w-[40px] h-[40px] flex items-center justify-center shrink-0">
						<img className="h-[24px]" src="burger.svg"></img>
					</div>
					<div className="flex h-full py-[18px] pl-[14px] pr-[16px] shrink-0">
						<img className="h-[20px]" src="logo.svg"></img>
					</div>
				</div>
				<div className="items-center justify-center px-1 ml-[80px] hidden sm:flex">
					<input
						placeholder="検索"
						className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
					></input>

					{/* scope */}
					<button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
						<img
							className="w-[24px] absolute right-4 bottom-1.5"
							src="scope.svg"
						></img>
					</button>

					{/* mic */}
					<button className="ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
						<img
							className="flex shrink-0 rounded-full w-[24px]"
							src="mic.svg"
						></img>
					</button>
				</div>
				<ul className="flex items-center justify-center gap-2">
					<li className="p-2">
						<img className="h-[24px]" src="video.svg"></img>
					</li>
					<li className="p-2">
						<img className="h-[24px]" src="bell.svg"></img>
					</li>
					<li className="py-[1px] px-[6px]">
						<img className="h-[32px] rounded-full" src="tom.png"></img>
					</li>
				</ul>
			</header>
		</main>
	);
}
