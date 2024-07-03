import React from "react";

export default function Articles() {
	const article = [
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/q-VNPpo9z0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTfzICpNJURsAUR7H5oKiwbRU1OQ",
			title: "ロシアから日本を選んで住んだ理由。",
			user: "🌹ディアナちゃんねる🌹",
			statistics: "57,007 回視聴  2024/03/15",
		},
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/JM75dAskORs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTNuT62ywWpzAiB8-XMZJXdr6iEg",
			title: "【ドーパミン中毒】スタンフォード大学医学部「冷たいシャワーの効果とは」／朝一番のエクササイズが効果的な理由／苦痛と快楽の感情はシーソーのように行き来する【PIVOT GLOBAL】",
			user: "PIVOT 公式チャンネル",
			statistics: "チャンネル登録者数 144万人",
		},
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/TO2t9esOUZA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbmuO4gXa25PqUBzpwJhqHfOwsbw",
			title: "ИСТОРИИ СПАСАТЕЛЯ! Страшные истории на ночь.Страшилки на ночь.",
			user: "DARK~PHIL",
			statistics: "65万回視聴",
		},
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/BH4ukdHaLmg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7AOL5WAISU0HpHDVqNF_ySb2yOw",
			title: "КВАРТИРА КОШМАРОВ! Страшные истории на ночь.Страшилки на ночь.",
			user: "DARK~PHIL",
			statistics: "21万回視聴",
		},

		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/BFS9n4B_2xA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0XuNyVjX1z1FRManXoNmQKxlBSg",
			title: "Bali in 8k ULTRA HD HDR - Paradise of Asia (60 FPS)",
			user: "8K WORLD",
			statistics: "3M Subscribers",
		},

		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/N1-Jmq7BLFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyLpS3boh1ChcvVbXOTWBR6sWt5w",
			title: "Bulgaria 8K HDR 60P (FUHD) Very beautiful place",
			user: "Jacob + Keitz Shwartz",
			statistics: "900K Subscribers",
		},

		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFEoPjAP&rs=AOn4CLDMnU74TxZBcC5ano3eLkdFn0SEFw",
			title: "Morning Piano Music | Piano music to Study, Work, Ambience,... 🎷 | Best Choice for Study, Work #2",
			user: "Aom",
			statistics: "50 thousand Subscribers",
		},
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/RqooLet7B2Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAbA9SZZz9H8rBTMfma5QFcRsdvw",
			title: "BUMP OF CHICKEN「Sleep Walking Orchestra」",
			user: "BUMP OF CHICKEN",
			statistics: "342万回視聴",
		},
		// Sarviee
		{
			url: "https://www.youtube.com/watch?v=1N-I7vNVYVQ",
			avatar_url:
				"https://yt3.ggpht.com/sRI81xAR6vbHnczFxUljto0snQQfWllO4hY-vWWDisJPe0LaDR1q8cUMUEkl2f2oBFaiptOhA50=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/1N-I7vNVYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrBrRV3JQn4-8bnLiahdxCGa_I-A",
			title: "Cottagecore Spring Hobbies 🌷🍓🐇 | Making Strawberry Cookies |",
			user: "Our Cottage Life",
			statistics: "46K views  2 weeks ago",
		},
		// shox
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/dSyF5-9jKOiHoUmg5JNSMWt-UcJPW3PLlJj9ZYlZK7SYtl8tLjZ4VE0OQ6k_XjPhHgRbr9n2=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/ncUTNE6D39M/hq720.jpg?sqp=- oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOjYm_cjlGPXFQV0BZPYHIMX-4yw ",
			title: "FAST X | Won't Back Down (Official Music Video) - NBA YoungBoy, Bailey Zimmerman, Dermot Kennedy",
			user: "YoungBoy Never Broken",
			statistics: "10万回視聴",
		},
		//Asila
		{
			url: "https://i.ytimg.com/vi/naQzmL_vggU/maxresdefault.jpg",
			avatar_url:
				"https://yt3.ggpht.com/rn_DtSmz97SPUdRhXJdDdl_wbK7RIaoFcHXtCw1H3hwiosEcGzfBNQIJfOgc73iv_EZBdYi8v6I=s68-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/ZQCPCP7mKrw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKP-ZNFM7Sqg6whyEz0TCtBIGqzQ",
			title: "Sizga yetib bo'lmay qoladi www | Iqtibos podcast #23",
			user: "Aziz Rakhimov",
			statistics: "52K views  2 weeks ago",
		},
		//alsu
		{
			url: "https://www.youtube.com/watch?v=q-VNPpo9z0Y",
			avatar_url:
				"https://yt3.ggpht.com/IeifCuR3HvOlIlzMUwNlV3Va-Ty9r7YeRo1TUptiyNM7LiXdWRZhhvWuDix3QaBdpvD643oM=s88-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw",
			title: "A Mellow Morning In Tokyo - (𝙿𝚕𝚊𝚢𝚕𝚒𝚜𝚝) 𝙻𝚊𝚖𝚙, 𝙸𝚌𝚑𝚒𝚔𝚘 𝙰𝚘𝚋𝚊, 𝙼𝚊𝚖𝚎𝚛𝚒𝚌𝚘,フレネシ",
			user: "Hangout Session",
			statistics: "7万回視聴",
		},

		//mexroj
		{
			url: "https://www.youtube.com/watch?v=Ytu7-4HQGwk&t=2280s",
			avatar_url:
				"https://yt3.googleusercontent.com/fE56JKD-a5gtDhkoGbMDVRAeko0tJDMnwAR70-Ae1ZcOr4hLSA6etheeFL-G9Z5XY_voBbo9dg=s176-c-k-c0x00ffffff-no-rj",
			img: "https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw",
			title: "30 yoshda afsuslanmaslik uchun nima qilish kerak?",
			user: "Shaha Dolimov ",
			statistics: "41K views  2 days ago",
		},
	];

	return (
		<div
			className=" grid pl-5 grid-cols-1 border-solid border-4 gap-3
    pt-14 pr-5 sm:grid-cols-2 md:pl-20 xl:grid-cols-3 lg:pl-60 2xl:grid-cols-4 "
		>
			{article.map((item, index) => (
				<div
					key={index}
					className=" border-solid border-4 border-green-500 "
				>
					<div className=" relative">
						<img
							src={item.img}
							alt="hero"
							className="w-full h-full rounded-[12px] "
						/>
						<div className="absolute bottom-[5px] right-1 bg-[rgba(0,0,0,0.6)] text-white p-[5px] rounded-[5px]">
							10:00
						</div>
					</div>
					<div className="flex gap-[10px] mt-3 mr-2 p-1">
						<img
							src={item.avatar_url}
							alt="avatar"
							className="w-9 h-9 rounded-full"
						/>

						<div>
							<div className="line-clamp-2 leading-[22px] text-[rgba(15,15,15,1)]">
								{item.title}
								{/* Free BGM "I'll be sleepy after a snack" 2 hours ver -
								Kawaii Afternoon Break [NoCopyrightMusic] */}
							</div>
							<div className="line-clamp-1 text-sm font-normal text-[rgba(15,15,15,1)]">
								{item.user}
							</div>
							<div className="line-clamp-1 text-sm font-normal text-[rgba(96,96,96,1)]">
								{item.statistics}
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
