import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-dvh bg-sky-300 flex pt-14 pr-5">
      <div className="fixed top-0 bg-gray-400 w-full h-14 z-20">ヘッダー</div>
      <div className="fixed z-20 h-dvh hidden md:block md:w-[80px] xl:w-[270px] bg-pink-300">
        nav
      </div>
      <div className="bg-green-300 h-fit w-full grid grid-cols-1 pl-5 md:pl-[80px] xl:pl-[270px] sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
        <div className="bg-red-300">
          <div className="relative">
            <img src="diana.webp" alt="diana" />
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
            <img src="diana.webp" alt="diana" />
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
            <img src="diana.webp" alt="diana" />
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
