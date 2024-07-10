"use client";
import React, { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Articles from "@/components/Articles";

const Page = () => {
	const [dataSource, setDataSource] = useState([]);

	const supabase = createClient();

	const getArticles = useCallback(async () => {
		try {
			const { data, error, status } = await supabase
				.from("articles")
				.select("*")
				.order("id", { ascending: false });

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
	}, []);

	useEffect(() => {
		getArticles();
	}, []);

	return (
		<div>
			{dataSource.map((item, index) => (
				<Articles
					key={index}
					img={item.img_url}
					avatar_url={item.avatar_url}
					title={item.title}
					user={item.user_name}
					stats={item.stats}
				/>
			))}
		</div>
	);

	return <div className="mt-40">{JSON.stringify(dataSource)}</div>;
};

export default Page;
