import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white">
      {/* 169px 1fr 156px */}
      <div className="my-grid bg-blue-400">
        <div className="flex justify-center items-center">
        <button className="w-[64px] h-[40px] bg-gray-400 fill"><img className="h-[20]" src=""></img></button>
          <img className="h-[20px]" src="logo.svg"></img>
        </div>
        <div className="bg-green-200 flex justify-center items-center">
          <input className="w-full max-w-[536px] h-[40px]"></input>
          <button className="w-[64px] h-[40px] bg-gray-400 fill"><img src="lupa.svg"></img></button>
          <button className="aspect-square rounded-full ml-[12px] w-[40px] h-[40px] bg-gray-400">
          <img src="mike.svg"></img>
          </button>
        </div>
        <ul class="list-none flex justify-center items-center gap-2">
          <li className="p-2">
            <button><img className="h-[24px]" src="video.svg"></img><Link href="app/company/page.js"></Link></button>
          </li>
          <li className="p-2">
            <img className="h-[24px]" src="bell.svg"></img>
          </li>
          <Link href="/profiles2">
            <li className="flex justify-center w-[60px] h-[34px] px-[6px] py-[1px]">
              <img
                className="w-[32px] h-[32px] rounded-full"
                src="tom.png"
                alt=""
              ></img>
            </li>
          </Link>
          
        </ul>
      </div>
    </main>
  );
}

