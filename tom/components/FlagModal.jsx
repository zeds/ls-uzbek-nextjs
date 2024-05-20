"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

const FlagModal = ({ setShowModal }) => {
	const supabase = createClient();
	// supabaseから取得したデータを保存、2 letter codeも入っている
	const [dataSource, setDataSource] = useState([]);
	const [resultData, setResultData] = useState([]);

	const [flags, setFlags] = useState(["jp", "uz", "af"]);

	// 旗データをsupabaseより取得
	const getCountries = useCallback(async () => {
		const { data, error, status } = await supabase
			.from("countries")
			.select("*")
			.order("id", { ascending: false });

		if (error && status !== 406) {
			alert("Error loading user data!");
			// throw error;
		}

		if (data) {
			console.log("country data = ", data);
			setDataSource(data);
			setResultData(data);
		}
	}, []);

	useEffect(() => {
		getCountries();
	}, []);

	return (
		<div className="absolute top-[200px] left-[200px] w-[300px] h-[300px] bg-orange-300">
			<button onClick={() => setShowModal(false)}>閉じる</button>
			{dataSource.map((item, index) => (
				<div key={index} className="w-[40px]">
					<img src={`/flags/${item.iso2.toLowerCase()}.svg`} alt={item} />
				</div>
			))}
		</div>
	);
};

export default FlagModal;
