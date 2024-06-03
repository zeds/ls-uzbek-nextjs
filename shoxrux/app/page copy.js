"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Home() {
	// supabaseから取得したデータを保存、2 letter codeも入っている
	const [dataSource, setDataSource] = useState([]);
	const [resultData, setResultData] = useState([]);

	const [searchValue, setSearchValue] = useState(""); // ja

	useEffect(() => {
		let result = dataSource.filter((data) => {
			// 正規表現 regular expression
			// return data.name.match(new RegExp(`^${searchValue}`, "g"));
			return data.name.includes(searchValue);
		});
		setResultData(result);
	}, [searchValue]); // Uz Jp

	// headerに表示している旗の2 letter code。初期値はuzにしている。
	const [flag, setFlag] = useState("jp"); // jp us au

	// trueの時にmodal dialogを表示している。
	const [showCountry, setShowCountry] = useState(false);

	const supabase = createClient();

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

	const showModal = () => {
		setShowCountry(true);
	};
	const closeCountry = () => {
		setShowCountry(false);
		setSearchValue("");
	};

	const clickFlag = (index) => {
		let selected = resultData[index].iso2; // "UZ"
		console.log("selected=", selected);
		setFlag(selected.toLowerCase()); // "uz"
		setShowCountry(false);
		setSearchValue("");
	};

	return (
		<main className="w-full h-screen bg-red-200">
			{/* { showCountry ? <div> .... </div> : null } */}

			{showCountry ? (
				<div className="absolute flex w-[800px] left-0 right-0 ml-auto mr-auto bg-white top-[50px] p-4 flex-wrap">
					<div>
						<input
							className="bg-red-200 p-2"
							type="text"
							name="searchValue"
							onChange={(e) => setSearchValue(e.target.value)}
							value={searchValue}
						/>
					</div>
					{resultData.map((item, index) => (
						<div key={index}>
							<div
								onClick={() => clickFlag(index)}
								className="w-[200px] mr-2 mb-3 flex gap-1 hover:cursor-pointer"
							>
								<img
									className="w-[22px]"
									src={`/flags/${item.iso2.toLowerCase()}.svg`}
									alt="flag"
								/>
								<div>{item.name}</div>
							</div>
						</div>
					))}
					<div
						onClick={() => closeCountry()}
						class="absolute right-2 top-2 p-2 hover:cursor-pointer hover:bg-gray-300"
					>
						<Icon icon="iconamoon:close-bold" width="24" height="24" />
					</div>
					{/* 
					<button
						class="absolute right-2 top-2 bg-gray-500 p-2"
						onClick={() => closeCountry()}
					>
						閉じる
					</button> */}
				</div>
			) : null}
		</main>
	);
}
