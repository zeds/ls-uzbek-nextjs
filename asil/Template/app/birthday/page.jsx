"use client";
import React from "react";
import { DatePicker, Space } from "antd";

export default function page() {
	// 10-09-2000
	const onChange = (date, dateString) => {
		console.log(date, dateString);
	};
	return (
		<section className="w-full h-screen pt-14">
			<div className="w-[420px] gap-5">
				<DatePicker onChange={onChange} />
			</div>
		</section>
	);
}
