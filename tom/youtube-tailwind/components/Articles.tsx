import React from "react";

export default function Articles({
	img,
	avatar_url,
	title,
	user,
	stats,
}: {
	img: any;
	avatar_url: any;
	title: any;
	user: any;
	stats: any;
}) {
	return (
		<div
			className=" grid pl-5 grid-cols-1 border-solid border-4 gap-3
    pt-14 pr-5 sm:grid-cols-2 md:pl-20 xl:grid-cols-3 lg:pl-60 2xl:grid-cols-4 "
		>
			<div className=" border-solid border-4 border-green-500 ">
				<div className=" relative">
					<img
						src={img}
						alt="hero"
						className="w-full h-full rounded-[12px] "
					/>
					<div className="absolute bottom-[5px] right-1 bg-[rgba(0,0,0,0.6)] text-white p-[5px] rounded-[5px]">
						10:00
					</div>
				</div>
				<div className="flex gap-[10px] mt-3 mr-2 p-1">
					<img
						src={avatar_url}
						alt="avatar"
						className="w-9 h-9 rounded-full"
					/>

					<div>
						<div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
							{title}
							{/* Free BGM "I'll be sleepy after a snack" 2 hours ver -
								Kawaii Afternoon Break [NoCopyrightMusic] */}
						</div>
						<div className="line-clamp-1 text-sm font-normal text-[rgba(15,15,15,1)]">
							{user}
						</div>
						<div className="line-clamp-1 text-sm font-normal text-[rgba(96,96,96,1)]">
							{stats}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
