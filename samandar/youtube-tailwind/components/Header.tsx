import React from "react";

export default function Header() {
	const burger =[{img:"/images/burger.svg"}]
	const logo = [{img:"/images/youtube-logo.svg"}]
	const scope=[{img:"/images/scope.svg"}]
	const mic =[{img:"/images/mic.svg"}]
	return (
		<div className="fixed z-10 flex h-[56px] w-full justify-between items-center bg-white px-3">
			<div className="flex items-center justify-center w-[169px] ">
				{logo.map((item, index) => (
				<div key={index}>
					<img className="w-10 h-10 p-2 shrink-0" src={item.img} alt="hero" />
				</div>
			    ))}
			    {burger.map((item, index) => (
				<div key={index}>
					<img className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0" src={item.img} alt="hero" />
				</div>
			    ))}
			</div>
			<div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
				<input
				className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
				></input>
				<button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
					{scope.map((item, index) => (
						<div key={index}>
							<img className="w-[24px] absolute right-4 bottom-1.5" src={item.img} alt="" />
						</div>
			        ))}
				</button>

					{/* mic */}
				<button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
					{mic.map((item, index) => (
						<div key={index}>
							<img className="flex rounded-full w-[24px]" src={item.img} alt="" />
						</div>
			        ))}
				</button>
			</div>
		</div>			
	);
}
