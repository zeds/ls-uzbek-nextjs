import React from "react";

export default function Header() {
	const images = {
		burger: "/images/burger.svg",
		logo: "/images/youtube-logo.svg",
		scope: "/images/scope.svg",
		mic: "/images/mic.svg",
	};
	return (
		<div className="fixed top-0 left-0 z-10 flex h-[56px] w-full justify-between items-center bg-blue-200 px-3">
			<div className="flex items-center justify-center w-[169px] ">
				<div>
					<img
						className="w-10 h-10 p-2 shrink-0"
						src={images.burger}
						alt="hero"
					/>
				</div>
				<div>
					<img
						className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px]"
						src={images.logo}
						alt="hero"
					/>
				</div>
			</div>
			<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
				<input className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"></input>
				<button className="w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
					<div>
						<img
							className="w-[24px] absolute right-4 bottom-1.5"
							src={images.scope}
							alt=""
						/>
					</div>
				</button>

				{/* mic */}
				<button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
					<div>
						<img
							className="flex rounded-full w-[24px]"
							src={images.mic}
							alt=""
						/>
					</div>
				</button>
			</div>
			<div>
				<div>profile</div>
			</div>
		</div>
	);
}
