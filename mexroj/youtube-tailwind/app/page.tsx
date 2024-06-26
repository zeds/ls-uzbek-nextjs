import Image from "next/image";

export default function Home() {
  return (
    <div
      className="w-full h-full border-4 border-blue-700
     bg-[rgb-(250,250,210)]"
    >
      <div className="pl-0 border-4 border-sky-300 h-14 w-full flex md:pl-20  xl:pl-60   ">
        <div>全て</div>
        <div>ミックス</div>
        <div>ライブ</div>
        <div>ニュース</div>
        <div>ペット</div>
      </div>
      <nav className="absolute left-0 top-0 bottom-0 border-4 border-orange-400 hidden sm:hidden md:w-16 md:block xl:w-[216px]">
        <ul>
          <li className="pt-4 pr-0 pb-[14px]">
            <img src="../images/yt-home.svg" alt="home" />
            <span className="">Home</span>
          </li>
        </ul>
      </nav>
      <div className="pl-0 grid grid-cols-1 sm:grid-cols-2 md:pl-20 xl:pl-60 lg:grid-cols-3 2xl:grid-cols-4   border-4 border-pink-300 gap-3  ">
        <div className="border-4 border-green-700 ">
          <img src="../images/raichel.webp" alt="" />
        </div>
        <div className="border-4 border-green-700 ">
          <img src="../images/raichel.webp" alt="" />
        </div>
        <div className="border-4 border-green-700 ">
          <img src="../images/raichel.webp" alt="" />
        </div>
        <div className="border-4 border-green-700 ">
          <img src="../images/raichel.webp" alt="" />
        </div>
        <div className="border-4 border-green-700 ">
          <img src="../images/raichel.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
