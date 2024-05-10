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
	const [message,setMessage] = useState();

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [occupation, setOccupation] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

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
				setOccupation(data.occupation);
				setPhone(data.phone);
				setAddress(data.address),
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
				occupation: occupation,
				phone: phone,
				address: address,
			})
			.eq("id", dataSource.id); // 'cf3466fb-1af1-48ec-9868-73437564da11'

		// alert(updateError)  // nullはエラーがない意味
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
		<div className="w-full h-screen bg-blue-300 flex items-center justify-center">
			{/* 576pxの外枠 */}
			<div className="w-[500px] h-[550px]  max-w-xl bg-green-200 rounded-2xl">
				{/* <h1>編集画面</h1> */}
				{/* アバター */}
				<div className="w-full flex justify-center items-center flex-col ">
					<img className="w-[150px] h-[100px]  object-cover userImg rounded-xl mt-5" src={dataSource.avatar_url} alt="" />
					<label className="text-gray-600">username</label>
					<input
						className="w-[300px] p-2 outline-none "
						type="text"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
					></input>
					<label className="text-gray-600">email</label>
					<input
						className="w-[300px] p-2 outline-none"
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<label className="text-gray-600">occupation</label>
					<input
						className="w-[300px] p-2 outline-none"
						type="text"
						value={occupation}
						onChange={(e) => setOccupation(e.target.value)}
					></input>
					<label className="text-gray-600">phone</label>
					<input
						className="w-[300px] p-2 outline-none"
						type="text"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					></input>
					<label className="text-gray-600">address</label>
					<input
						className="w-[300px] p-2 outline-none"
						type="text"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					></input>
					<div>
						<button
							onClick={clickSave}
							className="mt-5 p-2 pr-8 pl-8 bg-blue-500 text-white rounded-md"
						>
							保存
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileEdit;