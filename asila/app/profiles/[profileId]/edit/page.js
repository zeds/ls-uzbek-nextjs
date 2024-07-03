"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const ProfileEdit = () => {
	const [dataSource, setDataSource] = useState({});
	const supabase = createClient();
	const profileId = usePathname().split("/")[2];
	const route = useRouter();

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [nationality, setNationality] = useState("");

	useEffect(() => {
		getProfile();
		console.log("profileId=", profileId);
	}, []);

	const getProfile = useCallback(async () => {
		try {
			//   setLoading(true)

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
				setUserName(data.username);
				setEmail(data.email);
				setNationality(data.nationality);
				setDataSource(data);
			}
		} catch (error) {
			alert("Error loading user data!");
		} finally {
			//   setLoading(false)
		}
	}, []);

	const clickSave = async () => {
		// alert(JSON.stringify(dataSource[index]))

		// usernameを更新
		const { error: updateError } = await supabase
			.from("profiles")
			.update({
				username: userName,
				email: email,
				nationality: nationality,
			})
			.eq("id", dataSource.id);

		if (updateError !== null) {
			alert("失敗！：" + JSON.stringify(updateError));
		} else {
			route.push(`/profiles/${profileId}`);
		}
	};

	// const clickSave = () => {
	// 	route.push(`/profiles/${profileId}`);
	// };

	return (
		<div className="w-full h-screen pt-[56px]  flex justify-center al">
			<div className="w-full max-w-xl bg-red-200">
				<h1>編集画面</h1>
				<div className="w-full flex justify-center items-center mt-5 flex-col">
					<img className="w-[80px]" src={dataSource.avatar_url} alt="" />
					<label 　className="font-bold">ユーザー名</label>
					<input
						className="w-[300px] p-2"
						type="text"
						placeholder="ユーザー名"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					></input>
					<label 　className="font-bold">メールアドレス</label>
					<input
						className="w-[300px] p-2"
						type="text"
						placeholder="メールアドレス"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<label　className="font-bold ">パスワード</label>
					<input
						className="w-[300px] p-2"
						type="password"
						placeholder="パスワード"
						value={nationality}
						onChange={(e) => setNationality(e.target.value)}
					></input>

					<button
						onClick={clickSave}
						className="mt-5 p-2 bg-blue-500 text-white rounded-md"
					>
						保存？
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;
