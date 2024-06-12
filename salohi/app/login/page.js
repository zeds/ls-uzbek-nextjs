import React from 'react'
"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";





const Article  = () => {
    const [dataSource, setDataSource] = useState({});
	const supabase = createClient();
	const [email, setEmail] = useState("");

    useEffect(() => {
		getArticles();
	}, []);

    const getArticles = useCallback(async () => {
		try {
    const { data, error, status } = await supabase
				.from("articles")
				.select("*")
				.eq("id", profileId)
				.single();

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				console.log("data = ", data);
				setEmail(data.email);
				setPassword(data.password);
                setDataSource(data);
			}
		} catch (error) {
			alert("Error loading user data!");
		} finally {
			//   setLoading(false)
		}
	}, []);

    return (<div className='w-[100%] h-[100vh] bg-blue-700 flex justify-center items-center'>
                <div className="w-[300px] h-[400px] border rounded-sm bg-slate-500">
                    <div className='flex justify-center pt-[40px]'><img className='w-[70px] h-[70px]' src='profiles.svg'></img>
                    </div>
                        <div className='flex justify-center items-center pt-[80px] ml-[30px]'>email:
                        <input className='h-[30px] border rounded-md'
                        type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className='flex justify-center items-center pt-[10px]'>password:
                        <input className='h-[30px] border rounded-md'
                        type="text"
						value={password}
						onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div className='flex justify-center items-center pt-[60px]'>
                        <button className='border rounded-md'>Login</button>
                        </div>
                </div>

        </div>
    )
    }

    export default Article