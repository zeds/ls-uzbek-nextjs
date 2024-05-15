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
			return data.name.match(new RegExp(`^${searchValue}`, "g"));
		});
		setResultData(result);
	}, [searchValue]);

	// headerに表示している旗の2 letter code。初期値はuzにしている。
	const [flag, setFlag] = useState("uz"); // jp us au

	// trueの時にmodal dialogを表示している。
	const [showCountry, setShowCountry] = useState(true);

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
			// dataSource.filter((data) => data. >= 20);
		}
		// } catch (error) {
		// 	alert("Error loading user data!");
		// }
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
		let selected = dataSource[index].iso2; // "UZ"
		setFlag(selected.toLowerCase()); // "uz"
		setShowCountry(false);
		setSearchValue("");
	};

	return (
		<main className="w-full h-screen bg-red-200">
			{/* { showCountry ? <div> .... </div> : null } */}

			{showCountry ? (
				<div className="absolute flex w-[800px] p-2 items-center left-0 right-0 ml-auto mr-auto bg-white top-[100px] rounded-2xl p-4 flex-wrap">
					<div>
						<input
							className="bg-red-200 p-2 outline-none"
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

			<header className="flex  bg-green-400 items-center justify-between">
				{/* logo */}
				<div className="flex items-center justify-center w-[169px] bg-blue-500">
					<div className="bg-red-200 w-10 h-10 p-2 shrink-0">
						<img src="burger.svg" alt=""></img>
					</div>
					<div className="w-[127px] h-[56px] bg-blue-300 py-[18px] pl-[16px] pr-[14px] shrink-0">
						<img src="logo.svg" alt=""></img>
					</div>
				</div>

				<div className="ml-[90px] w-full max-w-[732px] h-[40px] bg-orange-200 hidden sm:flex justify-end">
					{/* search */}
					<input
						placeholder="検索"
						className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
					></input>

					{/* scope */}
					<button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
						<img
							className="w-[24px] absolute right-4 bottom-1.5"
							src="scope.svg"
							alt=""
						></img>
					</button>

					{/* mic */}
					<button className="ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
						<img
							className="flex shrink-0 rounded-full w-[24px]"
							src="mic.svg"
							alt=""
						></img>
					</button>
				</div>

				<ul className="flex items-center justify-end w-[225px] h-[40px] bg-red-500 shrink-0">
					{/* search */}
					<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
						<img className="bg-green-200" src="scope.svg" alt=""></img>
					</li>
					{/* mic */}
					<li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
						<img className="bg-green-500" src="mic.svg" alt=""></img>
					</li>

					{/* globe */}
					<li className="flex items-center shrink-0 w-[60px] p-2">
						<button onClick={() => showModal()}>
							<img
								className="bg-green-500 w-[50px]"
								src={`https://flagcdn.com/w320/${flag}.png`}
								// src="globe.svg"
								alt=""
							></img>
						</button>
					</li>

					{/* video */}
					<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
						<img className="bg-green-500" src="video.svg" alt=""></img>
					</li>
					{/*bell*/}
					<li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
						<img className="bg-green-500" src="bell.svg" alt=""></img>
					</li>
					{/* Mr Tom */}
					<Link href={"/profiles"}>
						<li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
							<img
								className="w-[32px] h-[32px] rounded-full"
								src="tom.jpeg"
								alt=""
							></img>
						</li>
					</Link>
				</ul>
			</header>
		</main>
	);
}
