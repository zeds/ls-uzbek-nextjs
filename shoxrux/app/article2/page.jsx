"use client";
import React from 'react';
import { useState } from "react";
import '../globals.css';
import Image from 'next/image'


const Page = () => {
    const [dataMedia, setDataMedia] = useState([
        {
            img: 'https://i.ytimg.com/vi/VixYfv0UEyE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0Mvb0iCrPQHL7Lz4CeLb6yb5H9w',
            id: '1',
            icon: 'https://yt3.ggpht.com/DqdWgi871A5bpZUBOS4t_4al_SH1lW_M2Jb-32c3x6mJMpsaog2vUy-dQUZGpv815M0is3z-uw=s48-c-k-c0x00ffffff-no-rj',
            title: 'ハックサセックス コーダーズ カップ 2024 sdksdsdksmdsd',
            channelName:'ハックサセックス',
            users:'登録者数461万人'
        },//https://www.youtube.com/live/VixYfv0UEyE?si=P7xD5TJdB5VKCsM7

        {
            img: 'https://i.ytimg.com/vi/2E10p0SGomQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA15tocO35baubm_Od6XOQ2c_aQCw',
            id: '2',
            icon: 'https://yt3.ggpht.com/OwiBlQvGLr3AjwETXWQG0yjmZab0eR41dhTnaXJaV8h5IzQMzzwfbf5iLX9FulOZxP96Opc0CA=s48-c-k-c0x00ffffff-no-rj',
            title: 'JLPT N1 最終テスト #1 ほのか先生と sdksdsdksmdsd',
            channelName:'日本語',
            users:'チャンネル登録者数'
        },//https://www.youtube.com/live/2E10p0SGomQ?si=ROMUT75qRfQeEojD

        {
            img: 'https://i.ytimg.com/vi/8Pfa8kPjUio/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAv-naSXUgMNvt9VJ8NqdCGSm5Z4Q',
            id: '3',
            icon: 'https://yt3.ggpht.com/ytc/AIdro_kpsrLXVvMrdo11-gl4huYX1M0GJu10egvbp0I_gKR7E4Y=s48-c-k-c0x00ffffff-no-rj',
            title: 'NVIDIA の Jensen Huang 氏との会話 sdksdsdksmdsd',
            channelName:'ストライプ',
            users:'チャンネル登録者数 24,000'
        },//https://youtu.be/8Pfa8kPjUio?si=Oe3zARZpyFpJ5HZq
        {
            img: 'https://i.ytimg.com/vi/7nT5YawZt-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6d2Dpf6kTgMUWGtswDgxyy_87tg',
            id: '4',
            icon: 'https://i.ytimg.com/vi/7nT5YawZt-s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6d2Dpf6kTgMUWGtswDgxyy_87tg',
            title: 'Bethoven Relax Piano Music sdksdsdksmdsd',
            channelName:'クラシック音楽',
            users:'チャンネル登録者数 24,000'
        },//https://www.youtube.com/live/7nT5YawZt-s?si=jcQ_ez-D2q2w_k_O
        {
            img: 'https://i.ytimg.com/vi/1RCMYG8RUSE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBW6lbHIzQFJeg0Yld8v4vGxZIqMQ',
            id: '5',
            icon: 'https://yt3.ggpht.com/ytc/AIdro_m7MWMBm4PynPndRMCxUEfNcU9Eufkk5ZkYI5RNjPchQ_c=s68-c-k-c0x00ffffff-no-rj',
            title: 'CS50x 2024 - Lecture 7 - SQL sdksdsdksmdsd',
            channelName:'CS50',
            users:'チャンネル登録者数 1,85 млн '
        },//https://www.youtube.com/live/7nT5YawZt-s?si=jcQ_ez-D2q2w_k_O
        {
            img: 'https://i.ytimg.com/vi/gY-TK33G6kQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAL5XJtDod9eHeh40w0eVIaptsyUQ',
            id: '6',
            icon: 'https://yt3.ggpht.com/ytc/AIdro_mcnwH2Aiimlm5znBIMjX8krP8cjxAyGDtG_X8cgWgCOimK=s48-c-k-c0x00ffffff-no-rj',
            title: '一緒に学ぼう: Hono JS (技術ノートの取り方)',
            channelName:'松山拓也',
            users:'登録者数 12.8 千人'
        },//https://www.youtube.com/live/7nT5YawZt-s?si=jcQ_ez-D2q2w_k_O
        {
            img: 'https://i.ytimg.com/vi/VixYfv0UEyE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB0Mvb0iCrPQHL7Lz4CeLb6yb5H9w',
            id: '7',
            icon: 'https://yt3.ggpht.com/DqdWgi871A5bpZUBOS4t_4al_SH1lW_M2Jb-32c3x6mJMpsaog2vUy-dQUZGpv815M0is3z-uw=s48-c-k-c0x00ffffff-no-rj',
            title: 'ハックサセックス コーダーズ カップ 2024',
            channelName:'ハックサセックス',
            users:'登録者数461万人'
        },//https://www.youtube.com/live/VixYfv0UEyE?si=P7xD5TJdB5VKCsM7

        {
            img: 'https://i.ytimg.com/vi/2E10p0SGomQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA15tocO35baubm_Od6XOQ2c_aQCw',
            id: '8',
            icon: 'https://yt3.ggpht.com/OwiBlQvGLr3AjwETXWQG0yjmZab0eR41dhTnaXJaV8h5IzQMzzwfbf5iLX9FulOZxP96Opc0CA=s48-c-k-c0x00ffffff-no-rj',
            title: 'JLPT N1 最終テスト #1 ほのか先生と vsdksdsdksmdsd',
            channelName:'日本語',
            users:'チャンネル登録者数'
        },//https://www.youtube.com/live/2E10p0SGomQ?si=ROMUT75qRfQeEojD
    ])



    return (
        <div className='container2 flex gap-1 flex-wrap p-2'>
            {dataMedia.map((item, index) => (
                <div key={index} className="frame relative p-3 ">
                    <img className='rounded-2xl' src={item.img} />
                    <div className='flex mt-5 gap-[6px]'>
                        <img className='object-cover rounded-3xl w-[45px] h-[45px]' src={item.icon} />
                        <div>
                            <div className='title'>{item.title}</div>
                            <div className='chanelName text-slate-600'>{item.channelName}</div>
                            <div className=' text-slate-600'>{item.users}</div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <Image
                className='articleImg'
                    src="/fff.jpg"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                /> */}
        </div>

    )
}

export default Page