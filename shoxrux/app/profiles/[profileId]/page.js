"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CiUser } from "react-icons/ci"
import { TfiEmail } from "react-icons/tfi";
import { PiStudentLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { TfiHome } from "react-icons/tfi";


const Profile = () => {
	const [dataSource, setDataSource] = useState({});
	const supabase = createClient();
	const profileId = usePathname().split("/")[2];
	const route = useRouter();

	useEffect(() => {
		getProfile();
		console.log("profileId=", profileId);
	}, []);

	const clickEdit = () => {
		route.push(`/profiles/${profileId}/edit`);
	};

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
				setDataSource(data);
			}
		} catch (error) {
			alert("Error loading user data!");
		} finally {
			//   setLoading(false)
		}
	}, []);
	//プロフィール一覧へ home link
	return (
		<div className="w-full h-screen bg-blue-300 flex justify-center items-center">
			{/* 576pxの外枠 */}
			<div className="w-[500px] h-[600px] max-w-xl bg-green-200 rounded-3xl">

				{/* アバター */}
				<div className="w-full flex justify-center items-center mt-5 flex-col">
					<img className="w-[180px] rounded-xl" src={dataSource.avatar_url} alt="" />
					<label className="nameIcon mb-[10px] w-full px-[95px] h-[35px] mt-10 flex items-end text-2xl">
						<CiUser className="userIcon size-10 mr-[5px]" />{dataSource.username}
					</label>
					<label className="mb-[10px] w-full pl-[100px] h-[35px] flex text-2xl emailText">
						<TfiEmail className="emailIcon size-8 mr-[5px]" />{dataSource.email}
					</label>
					<label className="mb-[10px] w-full px-[100px] h-[35px] flex text-2xl">
						<PiStudentLight className="occupationIcon size-10 mr-[5px]" />  {dataSource.occupation}
					</label>
					<label className="mb-[10px] w-full px-[100px] h-[35px] flex text-2xl">
						<CiLocationOn className="locationIcon size-10 mr-[5px]" />    {dataSource.address}
					</label>

					<div className="btn-container flex">
						<Link href={`/profiles`} className="underline home-icon flex items-end">
							<TfiHome className="size-8" />
						</Link>
						<button
							onClick={clickEdit}
							className="mt-[140px] p-2 bg-blue-500 text-white rounded-md "
						>
							プロフィールを編集
						</button>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;