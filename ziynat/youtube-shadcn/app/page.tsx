import Image from "next/image";

const list = [
  "すべて",
  "ライブ",
  "オーディオブック",
  "観光",
  "フィットネス",
  "最近アップロードされた動画",
  "視聴済み",
  "新しい動画の発見",
];

export default function Home() {
  return (
    <div className="w-full h-dvh bg-sky-300 flex pr-5">
      <>
        <div className="fixed z-20 flex h-[56px] top-0 w-full justify-between items-center bg-white px-3">
          <div className="flex items-center justify-center w-[169px] ">
            <div className="w-10 h-10 p-2 shrink-0">
              <img src="images/burger.svg" alt=""></img>
            </div>
            {/* <Link href={"/"}> */}
            <div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="images/logos--youtube.svg" alt=""></img>
            </div>
            {/* </Link> */}
          </div>
          <div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
            {/* search */}
            <input
              type="text"
              placeholder="検索"
              className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
            ></input>

            {/* scope */}
            <button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300 tooltip">
              <img
                className="w-[24px] absolute right-4 bottom-1.5"
                src="images/scope.svg"
                alt=""
              ></img>
              <span className="tooltip-text">検索</span>
            </button>

            {/* mic */}
            <button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square relative tooltip">
              <img
                className="flex rounded-full w-[24px]"
                src="images/mic.svg"
                alt=""
              ></img>
              <span className="tooltip-text">音声で検索</span>
            </button>
          </div>
          <ul className="flex items-center justify-end w-[225px] h-[40px] pr-3  shrink-0">
            {/* search */}
            <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
              <img className="" src="images/scope.svg" alt=""></img>
            </li>
            {/* mic */}
            <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
              <img className="" src="images/mic.svg" alt=""></img>
            </li>

            <>
              {/* video */}
              <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
                <img className="" src="images/video.svg" alt=""></img>
              </li>
              {/*bell*/}
              <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
                <img className="" src="images/bell.svg" alt=""></img>
              </li>
            </>
            <img
              className="w-[32px] h-[32px] rounded-full cursor-pointer"
              src="images/youtubeprofile.jpg"
              alt="ziynat"
            ></img>
          </ul>
        </div>
      </>

      <div className="fixed z-20 h-dvh hidden md:block md:w-[80px] xl:w-[270px] bg-pink-300">
        <nav>
          <ul>
            <li className="flex px-[12px] items-center  bg-red-500 py-3 text-[14px] h-[40px] gap-6">
              <img src="images/menu_home.svg" alt="home" />
              <div>ホーム</div>
            </li>
          </ul>
        </nav>
      </div>

      {/* tag */}
      <ul className="fixed w-full flex bg-red-400 pl-5 md:pl-[90px] xl:pl-[280px] gap-3 p-1 overflow-y-scroll hidden-scrollbar">
        {list.map((item, index) => (
          <li className="bg-gray-300 p-2 whitespace-nowrap" key={index}>
            {item}
          </li>
        ))}
      </ul>

      {/* articles */}
      <div className="bg-green-300 pt-[70px] h-fit w-full grid grid-cols-1 pl-5 md:pl-[90px] xl:pl-[280px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        <div className="bg-red-300">
          <div className="relative">
            <img src="images/Morningmusic.webp" alt="Morningmusic" />
            <span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
              10:00
            </span>
          </div>
          <div className="flex">
            <img
              className="w-9 h-9 rounded-full"
              src="images/icon.jpg"
              alt="icon"
            />
            <div>
              <div>title</div>
              <div>user</div>
              <div>stats</div>
            </div>
          </div>
        </div>
        <div className="bg-red-300">
          <div className="relative">
            <img src="images/Morningmusic.webp" alt="Morningmusic" />
            <span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
              10:00
            </span>
          </div>
          <div className="flex">
            <img className="w-9 h-9 rounded-full" src="tom.jpeg" alt="tom" />
            <div>
              <div>title</div>
              <div>user</div>
              <div>stats</div>
            </div>
          </div>
        </div>
        <div className="bg-red-300">
          <div className="relative">
            <img src="images/Morningmusic.webp" alt="Morningmusic" />
            <span className="absolute bottom-0 right-0 bg-[rgba(0,0,0,0.7)] text-white p-1">
              10:00
            </span>
          </div>
          <div className="flex">
            <img className="w-9 h-9 rounded-full" src="tom.jpeg" alt="tom" />
            <div>
              <div>title</div>
              <div>user</div>
              <div>stats</div>
            </div>
          </div>
        </div>
        <div className="bg-red-300">item-2</div>
        <div className="bg-red-300">item-3</div>
        <div className="bg-red-300">item-4</div>
        <div className="bg-red-300">item-5</div>
        <div className="bg-red-300">item-6</div>
        <div className="bg-red-300">item-7</div>
      </div>
    </div>
  );
}
