import React from "react";

export default function Header() {
	return (
		<div className="fixed top-0 w-full h-[56px] bg-red-300">
			<div className="logo">
				<img src="/images/youtube-logo.svg" alt="youtube" />
			</div>
			<div>Search</div>
			<div>Profile</div>
		</div>
	);
}
