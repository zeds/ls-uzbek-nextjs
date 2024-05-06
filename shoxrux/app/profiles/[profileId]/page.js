"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const page = () => {
    const [dataSource, setDataSource] = useState([]);
    const supabase = createClient()
    const profileId = usePathname().split("/")[2];
    const route = useRouter();


    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

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

let indexId = dataSource.index;
console.log(indexId);
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[600px] h-screen bg-red-300 flex justify-center'>
                <div className='url_icon'>
                    <div className="w-[80%]">
                        {dataSource.map((item, index) => (
                            <div className="w-full justify-center flex">
                               <img className="w-[80px]" src={dataSource.avatar_url} alt="" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page