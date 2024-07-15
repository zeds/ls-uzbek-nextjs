import Image from "next/image";

export default function Home() {
  const list = [
    { name: "All" },
    { name: "Music" },
    { name: "Live" },
    { name: "オーディオブック" },
    { name: "フィットネス" },
    { name: "最近アップロードされた動画" },
    { name: "視聴済み" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
    { name: "新しい動画の発見" },
  ];

  return (
    <div className="w-full h-dvh flex pt-14">
      <>
        <div className="fixed z-20 flex h-[56px] top-0 w-full justify-between items-center bg-white px-3">
          <div className="flex items-center justify-center w-[169px] ">
            <div className="w-10 h-10 p-2 shrink-0">
              <img src="burger.svg" alt=""></img>
            </div>
            {/* <Link href={"/"}> */}
            <div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="youtube.svg" alt=""></img>
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
                src="scope.svg"
                alt=""
              ></img>
              <span className="tooltip-text">検索</span>
            </button>

            {/* mic */}
            <button className="shrink-0 ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square relative tooltip">
              <img
                className="flex rounded-full w-[24px]"
                src="mic.svg"
                alt=""
              ></img>
              <span className="tooltip-text">音声で検索</span>
            </button>
          </div>
          <ul className="flex items-center justify-end w-[225px] h-[40px] pr-3  shrink-0">
            {/* search */}
            <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
              <img className="" src="scope.svg" alt=""></img>
            </li>
            {/* mic */}
            <li className="flex shrink-0 sm:hidden w-[40px] h-[40px] p-2">
              <img className="" src="mic.svg" alt=""></img>
            </li>

            <>
              {/* video */}
              <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
                <img className="" src="video.svg" alt=""></img>
              </li>
              {/*bell*/}
              <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2">
                <img className="" src="bell.svg" alt=""></img>
              </li>
            </>
            <img
              className="w-[32px] h-[32px] rounded-full cursor-pointer"
              src="images/me.jpeg"
              alt="tom"
            ></img>
          </ul>
        </div>
      </>
      <div className="fixed top-[56px] z-20 h-dvh hidden md:block md:w-[80px] xl:w-[270px]  bg-red-300">
        nav
      </div>
      <div className="fixed z-10 top-14 h-14 w-full items-center flex sm:pl-0 md:pl-[90px] xl:pl-[280px] bg-white">
        <ul className="fixed w-full flex bg-red-400 pl-5 md:pl-[80px] xl:pl-[270px] gap-3 p-1 overflow-scroll hidden-scrollbar ">
          {list.map((item, index) => (
            <li className="bg-gray-300 p-2 whitespace-nowrap" key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-fit w-full grid grid-cols-1 md:pl-[80px] xl:pl-[280px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 pt-[60px]">
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
        <div className="border-solid border-4">
          <div className="relative">
            <img className="w-full rounded-[12px]" src="3.webp" alt="diana" />
            <span className="absolute bottom-2 right-2 bg-[rgba(0,0,0,0.7)] text-white p-1 rounded-md">
              10:00
            </span>
          </div>

          <div className="flex gap-[10px] mt-3 mr-2 p-1">
            <img
              className="w-9 h-9 rounded-full pl-1 pt-1"
              src="3.jpg"
              alt="avatar"
            />
            <div>
              <div className="line-clamp-2 overflow-hidden text-[#0f0f0f] font-medium text-[16px] leading-[22px]">
                Free BGM "I'll be sleepy after a snack" 2 hours ver - Kawaii
                Afternoon Break NoCopyrightMusic
              </div>
              <div>Nyalpaca BGM Workshop</div>
              <div>440K views 2 months ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
