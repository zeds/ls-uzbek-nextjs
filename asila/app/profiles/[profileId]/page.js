"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const page = () => {
	const [dataSource, setDataSource] = useState([]);
	const supabase = createClient();

	const profileId = usePathname().split("/")[2];
	// const route = useRouter();

	const getProfile = useCallback(async () => {
		try {
			const { data, error, status } = await supabase
				.from("profiles")
				.select("*")
				.eq("id", profileId)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				console.log("data = ", data);
				setDataSource(data);
			}
		} catch (error) {
			alert("Error loading user data!");
		}
	}, []);

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<div className="w-full h-screen bg-blue-200 flex justify-center">
			<div className="w-[600px] h-screen bg-red-300 mt-10">
				{dataSource.avatar_url}
				<div>名前：{dataSource.username}</div>
				<div>メール：{dataSource.email}</div>
			</div>
		</div>
	);
};

export default page;
