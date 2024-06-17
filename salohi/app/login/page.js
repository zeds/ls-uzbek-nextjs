// import React from 'react'
"use client";

// import { useCallback, useEffect, useState } from "react";
// import { createClient } from "@/utils/supabase/client";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	} from "@/components/ui/dropdown-menu";




const Article  = () => {
//     const [dataSource, setDataSource] = useState({});
// 	const supabase = createClient();
// 	const [email, setEmail] = useState("");

//     useEffect(() => {
// 		getArticles();
// 	}, []);

//     const getArticles = useCallback(async () => {
// 		try {
//     const { data, error, status } = await supabase
// 				.from("articles")
// 				.select("*")
// 				.eq("id", profileId)
// 				.single();

// 			if (error && status !== 406) {
// 				throw error;
// 			}

// 			if (data) {
// 				console.log("data = ", data);
// 				setEmail(data.email);
// 				setPassword(data.password);
//                 setDataSource(data);
// 			}
// 		} catch (error) {
// 			alert("Error loading user data!");
// 		} finally {
// 			//   setLoading(false)
// 		}
// 	}, []);

    return (<div className='w-[100%] h-[100vh] bg-blue-700 flex justify-center items-center'>
                <div className="w-[300px] h-[400px] border rounded-sm bg-slate-500">
                    <div className='flex justify-center pt-[40px]'><img className='w-[70px] h-[70px]' src='profiles.svg'></img>
                    </div>
                        <div className='flex justify-center items-center pt-[80px] ml-[30px]'>email:
                        <input className='h-[30px] border rounded-md' placeholder='e-mail'
						></input>
                        </div>
                        <div className='flex justify-center items-center pt-[10px]'>password:
                        <input className='h-[30px] border rounded-md' placeholder='password'
                        ></input>
                        </div>
						<div className='ml-[95px] text-[rgba(8,94,212,1)]'>
						<DropdownMenu>
					<DropdownMenuTrigger className="outline-none">writepassword
					</DropdownMenuTrigger>
					<DropdownMenuContent className="mr-[1px]">
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						write 6 word or number
					</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu></div>
                        <div className='flex justify-center items-center pt-[60px]'>
                        <button className='border bg-black text-white rounded-md w-[200px]'>Login</button>
                        </div>
                </div>

        </div>
    )
    }

    export default Article