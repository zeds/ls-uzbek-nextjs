"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const [dataSource, setDataSource] = useState([]);

	const supabase = createClient();

	const channelA = supabase
		.channel("schema-db-changes")
		.on(
			"postgres_changes",
			{
				event: "*",
				schema: "public",
				// テーブルを指定しない場合、全てのテーブルの変更が通知される。
				// table: "notifications",
			},
			(payload) => {
				if (payload.table === "profiles") {
					if (payload.new && "username" in payload.new) {
						updateProfile(payload.new);
						// setMessage(payload.new.introduce);
					}
				}
			}
		)
		.subscribe();

	const updateProfile = (target) => {
		// mapで見つけて更新する
		let newArr = [...dataSource];
		newArr.map((item, index) => {
			if (target.id === item.id) {
				newArr[index] = target;
				setDataSource(newArr);
			}
		});
	};

	const getProfile = useCallback(async () => {
		try {
			//   setLoading(true)

			const { data, error, status } = await supabase
				.from("profiles")
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
		getProfile();
	}, []);

	const onChangeHandler = (name, index) => {
		console.log(dataSource[index].username);
		// dataSourceを直接編集できない
		// dataSourceのコピーを作って、編集したあと、コピーをdataSourceに上書きする
		let newArr = [...dataSource];
		newArr[index].username = name;
		setDataSource(newArr);
	};

	const clickUpdate = async (index) => {
		// alert(JSON.stringify(dataSource[index]))

		// usernameを更新
		const { error: updateError } = await supabase
			.from("profiles2")
			.update({
				username: dataSource[index].username,
			})
			.eq("id", dataSource[index].id); // 'cf3466fb-1af1-48ec-9868-73437564da11'
		// update profiles set username = 'とむかも' where id = 'cf3466fb-1af1-48ec-9868-73437564da11'

		// alert(updateError)  // nullはエラーがない意味
		if (updateError !== null) {
			alert("失敗！：" + JSON.stringify(updateError));
		}
	};

	return (
		<>
			<div>プロフィール</div>
			<div className="flex bg-gray-300 gap-1 flex-wrap p-2 mt-[56px]">
				{dataSource.map((item, index) => (
					<Link
						key={index}
						href={`/profiles/${item.id}`}
						className="w-[200px] h-[300px] bg-blue-300 relative p-2"
					>
						<div className="w-full justify-center flex">
							{item.avatar_url ? (
								<img
									className="rounded-full w-[100px]"
									src={item.avatar_url}
									alt="hoge"
								/>
							) : null}
						</div>
						<div>
							<div>Name</div>
							<input
								className="p-1 bg-red-200 w-full"
								type="text"
								name="username"
								onChange={(e) => onChangeHandler(e.target.value, index)}
								value={item.username}
							/>
						</div>
						<div className="justify-center flex absolute bottom-1 start-1/3">
							<button
								onClick={() => clickUpdate(index)}
								className="bg-blue-400 text-white px-3 py-1 rounded-md"
							>
								更新
							</button>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Page;
