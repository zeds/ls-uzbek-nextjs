import React from "react";
import "../globals.css";
import Image from "next/image";

const videoData = [
  {
    img: "https://i.ytimg.com/vi/q-VNPpo9z0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTfzICpNJURsAUR7H5oKiwbRU1OQ",
    avatar:
      "https://yt3.ggpht.com/kC64Y7jnM8ZwGGSI47X-4tqpWTlrvwcq8h-d9EHLCKKmZNwdwnH708OTMcq_DxlhuGu8EeAASA=s68-c-k-c0x00ffffff-no-rj",
    title: 'I don"t know what are you talking?',
    user: "🌹ディアナちゃんねる🌹",
    statistics: "57,007 回視聴  2024/03/15",
  },
  {
    img: "https://i.ytimg.com/vi/q-VNPpo9z0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTfzICpNJURsAUR7H5oKiwbRU1OQ",
    avatar:
      "https://yt3.ggpht.com/fE56JKD-a5gtDhkoGbMDVRAeko0tJDMnwAR70-Ae1ZcOr4hLSA6etheeFL-G9Z5XY_voBbo9dg=s68-c-k-c0x00ffffff-no-rj",
    title: "ロシアから日本を選んで住んだ理由。",
    user: "🌹ディアナちゃんねる🌹",
    statistics: "57,007 回視聴  2024/03/15",
  },
  {
    img: "https://i.ytimg.com/vi/JM75dAskORs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTNuT62ywWpzAiB8-XMZJXdr6iEg",
    avatar:
      "https://yt3.ggpht.com/ytc/AIdro_lDUuYkkfQ9ZVvTDOaBxMsmBwE64TiN1SBxcIbqm2CNCA=s68-c-k-c0x00ffffff-no-rj",
    title:
      "【ドーパミン中毒】スタンフォード大学医学部「冷たいシャワーの効果とは」",
    user: "PIVOT 公式チャンネル",
    statistics: "チャンネル登録者数 144万人",
  },
  {
    img: "https://i.ytimg.com/vi/TO2t9esOUZA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbmuO4gXa25PqUBzpwJhqHfOwsbw",
    avatar:
      "https://yt3.ggpht.com/AGG9gXYHZ6cSudAmnu4AqlM6f3QyDjE_6g71pqeU0FiTnDuFh5DG7xWIeIfKtchktFqGVpSLyQ=s68-c-k-c0x00ffffff-no-rj",
    title: "ИСТОРИИ СПАСАТЕЛЯ! Страшные истории на ночь.Страшилки на ночь.",
    user: "DARK~PHIL",
    statistics: "65万回視聴",
  },
  {
    img: "https://i.ytimg.com/vi/BH4ukdHaLmg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7AOL5WAISU0HpHDVqNF_ySb2yOw",
    avatar:
      "https://yt3.ggpht.com/b_DOxt3qhN_Vi2hOJuUdJEG10X-sLkXoy5KZyuveTC1pcZx447xXpk8aXu_6f8SkIcmUmNO4=s68-c-k-c0x00ffffff-no-rj",
    title: "КВАРТИРА КОШМАРОВ! Страшные истории на ночь.Страшилки на ночь.",
    user: "DARK~PHIL",
    statistics: "21万回視聴",
  },

  {
    img: "https://i.ytimg.com/vi/BFS9n4B_2xA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0XuNyVjX1z1FRManXoNmQKxlBSg",
    avatar:
      "https://yt3.ggpht.com/t36VXNf-66_N4hqInAb-1IJI1yTDwdKnvRtyKdQtRKXCAlGYfsmcME41etUxYZtAF8ElJFJv8Q=s68-c-k-c0x00ffffff-no-rj",
    title: "Bali in 8k ULTRA HD HDR - Paradise of Asia (60 FPS)",
    user: "8K WORLD",
    statistics: "3M Subscribers",
  },

  {
    img: "https://i.ytimg.com/vi/N1-Jmq7BLFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyLpS3boh1ChcvVbXOTWBR6sWt5w",
    avatar:
      "https://yt3.ggpht.com/cLOWEn8IJcc3L2Dg8DcAi2Yb8qj3vRW4VcgCJFrvuvwn8XFR_dHq2ZX_oeCClKjuLEuxdqbHmg=s68-c-k-c0x00ffffff-no-rj",
    title: "Bulgaria 8K HDR 60P (FUHD) Very beautiful place",
    user: "Jacob + Keitz Shwartz",
    statistics: "900K Subscribers",
  },

  {
    img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFEoPjAP&rs=AOn4CLDMnU74TxZBcC5ano3eLkdFn0SEFw",
    avatar:
      "https://yt3.ggpht.com/rn_DtSmz97SPUdRhXJdDdl_wbK7RIaoFcHXtCw1H3hwiosEcGzfBNQIJfOgc73iv_EZBdYi8v6I=s68-c-k-c0x00ffffff-no-rj",
    title:
      "Morning Piano Music | Piano music to Study, Work, Ambience,... 🎷 | Best Choice for Study, Work #2",
    user: "Aom",
    statistics: "50 thousand Subscribers",
  },
  {
    img: "https://i.ytimg.com/vi/RqooLet7B2Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAbA9SZZz9H8rBTMfma5QFcRsdvw",
    avatar:
      "https://yt3.ggpht.com/r-3mT2ukrIt2DOV-tUK-XphTW8eQzr0yWdnyukb_UIZwix3-6fLLbVnJPRY34CLX86Wqs8j2Gw=s68-c-k-c0x00ffffff-no-rj",
    title: "BUMP OF CHICKEN「Sleep Walking Orchestra」",
    user: "BUMP OF CHICKEN",
    statistics: "342万回視聴",
  },
  // Sarviee
  {
    img: "https://i.ytimg.com/vi/1N-I7vNVYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrBrRV3JQn4-8bnLiahdxCGa_I-A",
    avatar:
      "https://yt3.ggpht.com/BuADt-5SxPlpqTX8inp_-PZfIQzm74Yj_QvaV_7l4n7EKdlY9D15cWiX1nMu_aW-42pG6euM7bM=s68-c-k-c0x00ffffff-no-rj",
    title: "Cottagecore Spring Hobbies 🌷🍓🐇 | Making Strawberry Cookies |",
    user: "Our Cottage Life",
    statistics: "46K views  2 weeks ago",
  },
  // shox
  {
    img: "https://i.ytimg.com/vi/ncUTNE6D39M/hq720.jpg?sqp=- oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOjYm_cjlGPXFQV0BZPYHIMX-4yw ",
    avatar:
      "https://yt3.ggpht.com/BuADt-5SxPlpqTX8inp_-PZfIQzm74Yj_QvaV_7l4n7EKdlY9D15cWiX1nMu_aW-42pG6euM7bM=s68-c-k-c0x00ffffff-no-rj",
    title:
      "FAST X | Won't Back Down (Official Music Video) - NBA YoungBoy, Bailey Zimmerman, Dermot Kennedy",
    user: "YoungBoy Never Broken",
    statistics: "10万回視聴",
  },
  //Asila
  {
    img: "https://i.ytimg.com/vi/AnErrgFRWV4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLATKBtEcTwQn8zPaKgEYujNFV8Ntw",
    avatar:
      "https://yt3.ggpht.com/fE56JKD-a5gtDhkoGbMDVRAeko0tJDMnwAR70-Ae1ZcOr4hLSA6etheeFL-G9Z5XY_voBbo9dg=s68-c-k-c0x00ffffff-no-rj",
    title: "Sizga yetib bo'lmay qoladi www | Iqtibos podcast #23",
    user: "Aziz Rakhimov",
    statistics: "52K views  2 weeks ago",
  },
  //alsu
  {
    img: "https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw",
    avatar:
      "https://yt3.ggpht.com/Xu-Q1pLsDrrFjUVlHxA-YPW1ezZ_wcKOaicgPLEk5tIv2Mf1W13988hVjdsWSKZSxEbeBrMNHA=s68-c-k-c0x00ffffff-no-rj",
    title:
      "A Mellow Morning In Tokyo - (𝙿𝚕𝚊𝚢𝚕𝚒𝚜𝚝) 𝙻𝚊𝚖𝚙, 𝙸𝚌𝚑𝚒𝚔𝚘 𝙰𝚘𝚋𝚊, 𝙼𝚊𝚖𝚎𝚛𝚒𝚌𝚘,フレネシ",
    user: "Hangout Session",
    statistics: "7万回視聴",
  },
  //mexroj
  {
    img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg",
    avatar:
      "https://yt3.ggpht.com/bcIxVEAxUisiLDW-sgs26jwZEPlWUv7RtD2Pp66levO5mhoLaUKKu9qTHX_bN0KeGwn0_IqVWA=s68-c-k-c0x00ffffff-no-rj",
    title: "temani qattimi",
    user: "mexroj",
    statistics: "1M views",
  },
];

function page() {
  return (
    <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 pt-[66px] gap-3">
      {videoData.map((item, index) => (
        <div key={index} className="article">
          <img className="w-full h-2/3 rounded-[12px]" src={item.img} />
          <div className="flex  m-2">
            <img className="w-9 h-9 rounded-full mt-3 mr-3" src={item.avatar} />
            <div className="pr-6">
              <h2 className="">{item.title}</h2>
              <p className="text-slate-600">{item.user}</p>
              <p className="font-normal">{item.statistics}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
