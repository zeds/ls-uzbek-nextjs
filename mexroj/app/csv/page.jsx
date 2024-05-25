"use client";
import React from "react";
import CsvDownloader from "react-csv-downloader";

const Page = () => {
  const columns = [
    {
      id: "img",
      displayName: "img_url",
    },
    {
      id: "title",
      displayName: "title",
    },
    {
      id: "user",
      displayName: "user_name",
    },
    {
      id: "statistics",
      displayName: "stats",
    },
  ];

  const datas = [
    {
      first: "foo",
      second: "bar",
    },
    {
      first: "foobar",
      second: "foobar",
    },
  ];

  const recommendData = [
    {
      img: "https://i.ytimg.com/vi/q-VNPpo9z0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTfzICpNJURsAUR7H5oKiwbRU1OQ",
      title: 'I don"t know what are you talking?',
      user: "🌹ディアナちゃんねる🌹",
      statistics: "57,007 回視聴  2024/03/15",
    },
    {
      img: "https://i.ytimg.com/vi/q-VNPpo9z0Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCTfzICpNJURsAUR7H5oKiwbRU1OQ",
      title: "ロシアから日本を選んで住んだ理由。",
      user: "🌹ディアナちゃんねる🌹",
      statistics: "57,007 回視聴  2024/03/15",
    },
    {
      img: "https://i.ytimg.com/vi/JM75dAskORs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTNuT62ywWpzAiB8-XMZJXdr6iEg",
      title:
        "【ドーパミン中毒】スタンフォード大学医学部「冷たいシャワーの効果とは」／朝一番のエクササイズが効果的な理由／苦痛と快楽の感情はシーソーのように行き来する【PIVOT GLOBAL】",
      user: "PIVOT 公式チャンネル",
      statistics: "チャンネル登録者数 144万人",
    },
    {
      img: "https://i.ytimg.com/vi/TO2t9esOUZA/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbmuO4gXa25PqUBzpwJhqHfOwsbw",
      title: "ИСТОРИИ СПАСАТЕЛЯ! Страшные истории на ночь.Страшилки на ночь.",
      user: "DARK~PHIL",
      statistics: "65万回視聴",
    },
    {
      img: "https://i.ytimg.com/vi/BH4ukdHaLmg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7AOL5WAISU0HpHDVqNF_ySb2yOw",
      title: "КВАРТИРА КОШМАРОВ! Страшные истории на ночь.Страшилки на ночь.",
      user: "DARK~PHIL",
      statistics: "21万回視聴",
    },

    {
      img: "https://i.ytimg.com/vi/BFS9n4B_2xA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0XuNyVjX1z1FRManXoNmQKxlBSg",
      title: "Bali in 8k ULTRA HD HDR - Paradise of Asia (60 FPS)",
      user: "8K WORLD",
      statistics: "3M Subscribers",
    },

    {
      img: "https://i.ytimg.com/vi/N1-Jmq7BLFE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCyLpS3boh1ChcvVbXOTWBR6sWt5w",
      title: "Bulgaria 8K HDR 60P (FUHD) Very beautiful place",
      user: "Jacob + Keitz Shwartz",
      statistics: "900K Subscribers",
    },

    {
      img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFEoPjAP&rs=AOn4CLDMnU74TxZBcC5ano3eLkdFn0SEFw",
      title:
        "Morning Piano Music | Piano music to Study, Work, Ambience,... 🎷 | Best Choice for Study, Work #2",
      user: "Aom",
      statistics: "50 thousand Subscribers",
    },
    {
      img: "https://i.ytimg.com/vi/RqooLet7B2Q/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAAbA9SZZz9H8rBTMfma5QFcRsdvw",
      title: "BUMP OF CHICKEN「Sleep Walking Orchestra」",
      user: "BUMP OF CHICKEN",
      statistics: "342万回視聴",
    },
    // Sarviee
    {
      img: "https://i.ytimg.com/vi/1N-I7vNVYVQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCrBrRV3JQn4-8bnLiahdxCGa_I-A",
      title: "Cottagecore Spring Hobbies 🌷🍓🐇 | Making Strawberry Cookies |",
      user: "Our Cottage Life",
      statistics: "46K views  2 weeks ago",
    },
    // shox
    {
      img: "https://i.ytimg.com/vi/ncUTNE6D39M/hq720.jpg?sqp=- oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOjYm_cjlGPXFQV0BZPYHIMX-4yw ",
      title:
        "FAST X | Won't Back Down (Official Music Video) - NBA YoungBoy, Bailey Zimmerman, Dermot Kennedy",
      user: "YoungBoy Never Broken",
      statistics: "10万回視聴",
    },
    //Asila
    {
      img: "https://i.ytimg.com/vi/AnErrgFRWV4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLATKBtEcTwQn8zPaKgEYujNFV8Ntw",
      title: "Sizga yetib bo'lmay qoladi www | Iqtibos podcast #23",
      user: "Aziz Rakhimov",
      statistics: "52K views  2 weeks ago",
    },
    //alsu
    {
      img: "https://i.ytimg.com/vi/OEfz-pZPg24/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPH78BAUaVBNzeu9JLfJzxz_pIWw",
      title:
        "A Mellow Morning In Tokyo - (𝙿𝚕𝚊𝚢𝚕𝚒𝚜𝚝) 𝙻𝚊𝚖𝚙, 𝙸𝚌𝚑𝚒𝚔𝚘 𝙰𝚘𝚋𝚊, 𝙼𝚊𝚖𝚎𝚛𝚒𝚌𝚘,フレネシ",
      user: "Hangout Session",
      statistics: "7万回視聴",
    },
    //mexroj
    {
      img: "https://i.ytimg.com/vi/rBadprLH1jM/hq720.jpg",
      title: "temani qattimi",
      user: "mexroj",
      statistics: "1M views",
    },
  ];

  return (
    <div className="pt-[56px]">
      <CsvDownloader
        filename="myfile"
        extension=".csv"
        separator=";"
        wrapColumnChar=""
        columns={columns}
        datas={recommendData}
        text="DOWNLOAD"
      />
    </div>
  );
};

export default Page;
