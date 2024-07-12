"use client";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="fixed z-10 flex h-[56px] w-full justify-between items-center bg-white px-3">
        <div className="flex items-center justify-center w-[169px]">
          <div className="w-10 h-10 p-2 shrink-0">
            <img src="burger.svg" alt="" />
          </div>
          <Link href={"/"}>
            <div className="w-[127px] h-[56px] py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="logo.svg" alt="" />
            </div>
          </Link>
        </div>
        <div className="ml-[90px] w-full max-w-[732px] h-[40px] hidden sm:flex justify-end">
          {/* search */}
          <input
            type="text"
            placeholder="検索"
            className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
          />
          {/* scope */}
          <button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300 tooltip">
            <img
              className="w-[24px] absolute right-4 bottom-1.5"
              src="scope.svg"
              alt=""
            />
            <span className="tooltip-text">Search</span>
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
        <ul className="flex items-center justify-end w-[225px] h-[40px] shrink-0">
          {/* video */}
          <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 tooltip">
            <img className="" src="video.svg" alt=""></img>
            <span className="tooltip-text">Video</span>
          </li>
          {/*bell*/}
          <li className="flex items-center shrink-0 w-[40px] h-[40px] p-2 tooltip">
            <img className="" src="bell.svg" alt=""></img>
            <span className="tooltip-text">Bell</span>
          </li>
          {/* Mr Tom */}
          <li className="flex items-center">
            <Image
              className="rounded-full"
              src="/tom.png"
              alt="setting.svg"
              width={30}
              height={30}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
