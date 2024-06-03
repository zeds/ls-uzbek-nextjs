"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Article from "@/components/Article";
import { useRouter } from "next/navigation";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Home() {
	const supabase = createClient();
	const routeM = useRouter();
	const [dataSource, setDataSource] = useState([]);

	const clickArticle2 = () => {
		routeM.push(`/article2`);
	};
	const clickuseState = () => {
		routeM.push(`/useState`);
	};
	const clickArticle = () => {
		routeM.push(`/article`);
	};
	const getArticles = useCallback(async () => {
		try {
			const { data, error, status } = await supabase
				.from("articles")
				.select("*");

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				console.log("data = ", data);
				setDataSource(data);
			}
		} catch (error) {
			alert("Error loading user data!");
		} finally {
			//   setLoading(false)
		}
	});

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div className="flex flex-wrap  w-full pt-[56px] gap-2 justify-center">
			<button onClick={clickuseState} className="flex bg-indigo-200 p-2 rounded-2xl items-center gap-2">	<FaArrowRightToBracket />go to useState</button>
			<button onClick={clickArticle} className="flex bg-indigo-300 p-2 rounded-2xl items-center gap-2">	<FaArrowRightToBracket />go to Article tilwind を　使いました。</button>
			<button onClick={clickArticle2} className="flex bg-indigo-400 p-2 rounded-2xl items-center gap-2">	<FaArrowRightToBracket />go to Article Page2 5/31/2024</button>
			{/* {dataSource.map((item, index) => (
        <div key={index}>
          <Article
            title={item.title}
            avatar={item.avatar_url}
            user_name={item.user_name}
            stats={item.stats}
            img_url={item.img_url}
          />
        </div>
      ))} */}
		</div>
	);
}
