import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-red-200">
      <header className="my-grid bg-green-400">
        <div className="flex items-center justify-center ml-4">
          <div className="bg-red-200 w-10 h-10 p-2 shrink-0">
            <img src="burger.svg"></img>
          </div>
          <div className="w-[127px] h-[56px] bg-blue-300 py-[18px] pl-[16px] pr-[14px] shrink-0">
            <img src="logo.svg"></img>
          </div>
        </div>

        <div className="bg-blue-200 flex items-center justify-center px-4 ">
          <input className="h-[40px] w-full max-w-[536px] rounded-l-full"></input>
          {/*scope*/}
          <button className="w-[64px] h-[40px] bg-gray-200 flex items-center justify-center rounded-r-full ">
            <img src="scope.svg"></img>
          </button>
          {/*mic*/}
          <button className=" ml-[12px] rounded full flex items-center justify-center aspect-ratio">
            <img
              className="flex rounded-full w-[40px] bg-gray-200 "
              src="mic.svg"
            ></img>
          </button>
        </div>
        {/*video*/}
        <ul className="flex items-center justify-center gap-2">
          <li className="p-2">
            <img className="h-[24px]" src="video.svg"></img>
          </li>
          {/*bell*/}
          <li className="p-2">
            <img className="h-[24px]" src="bell.svg"></img>
          </li>
          <li className="p-2">
            <img className="h-[32px] rounded-full" src="tom.png"></img>
          </li>
        </ul>
      </header>
    </main>
  );
}
