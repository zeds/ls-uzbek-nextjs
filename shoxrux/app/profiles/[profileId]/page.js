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
import { PiPhoneThin } from "react-icons/pi";


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
			<div>
				<div className="w-full h-[50px] bg-green-200 rounded-2xl intoduce-text text-center justify-center items-center flex">
					{dataSource.introduce}
				</div>
				<div className="w-[420px] h-[500px] max-w-xl bg-green-200 rounded-3xl">
					{/* アバター */}
					<div className="w-full flex justify-center mt-10px items-center mt-5 flex-col">
						<img className="w-[150px] h-[100px]  object-cover userImg rounded-xl mt-5" src={dataSource.avatar_url} alt="" />
						<div className="">
							<label className="items-center nameIcon mb-[20px] w-full px-[95px] h-[35px] mt-10 flex text-gray-500 ">
								<CiUser className="userIcon size-10 mr-[5px]" />{dataSource.username}
							</label>

							<label className="mb-[20px] w-full px-[100px] h-[35px] flex text-gray-500">
								<PiStudentLight className="occupationIcon size-10 mr-[5px]" />  {dataSource.occupation}
							</label>
							<label className="mb-[20px] w-full px-[100px] h-[35px] flex  text-gray-500 flex items-center">
								<CiLocationOn className="locationIcon size-10 mr-[5px]" />    {dataSource.address}
							</label>
							<label className="mb-[20px] w-full px-[100px] h-[35px] flex  text-gray-500 flex items-center">
								<PiPhoneThin className="locationIcon size-10 mr-[5px]" />{dataSource.phone}
							</label>
							<label className="mb-[20px] w-full pl-[100px] h-[35px] flex emailText text-gray-500">
								<TfiEmail className="emailIcon size-7 mr-[5px]" />{dataSource.email}
							</label>
						</div>

						<div className="btn-container flex items-align">
							<Link href={`/profiles`} className="underline home-icon flex items-end pb-3">
								<TfiHome className="size-6" />
							</Link>
							<button
								onClick={clickEdit}
								className="p-2 bg-blue-500 text-white rounded-md "
							>
								プロフィールを編集
							</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;