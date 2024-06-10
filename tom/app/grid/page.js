"use client";
import React from "react";

const page = () => {
	return (
		<div className="pt-[56px] w-full h-screen">
			<div className="grid grid-cols-3 gap-3">
				<div className="bg-pink-300">
					<img src="/raichel.webp" alt="raichel" />
					<div className="flex gap-3 mt-3">
						<div className="w-9">
							<img
								className="rounded-full"
								src="/raichel-avatar.jpeg"
								alt="avatar"
							/>
						</div>
						<div>
							<div>title</div>
							<div>user</div>
							<div>stats</div>
						</div>
					</div>
				</div>
				<div className="bg-pink-300">article-2</div>
				<div className="bg-pink-300">article-3</div>
				<div className="bg-pink-300">article-4</div>
				<div className="bg-pink-300">article-5</div>
				<div className="bg-pink-300">article-6</div>
				<div className="bg-pink-300">article-7</div>
			</div>
		</div>
	);
};

export default page;
