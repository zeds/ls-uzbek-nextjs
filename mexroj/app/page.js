import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-red-200">
      <header className="flex  bg-green-400 items-center justify-between">
        <div className="flex items-center justify-center w-[169px] bg-blue-500">
          <div className="bg-red-200 w-10 h-10 p-2 shrink-0">
            <img src="burger.svg"></img>
          </div>
          <div className="w-[127px] h-[56px] bg-blue-300 py-[18px] pl-[16px] pr-[14px] shrink-0">
            <img src="logo.svg"></img>
          </div>
        </div>
        <div className="ml-[90px] w-full max-w-[732px] h-[40px] bg-orange-200 hidden sm:flex justify-end">
          <input
            placeholder="検索"
            className="pl-4 h-[40px] w-full max-w-[536px] rounded-l-full outline outline-gray-300"
          ></input>

          {/* scope */}
          <button className="shrink-0 w-[64px] h-[40px] bg-gray-200 relative rounded-r-full border-2 border-solid outline outline-gray-300">
            <img
              className="w-[24px] absolute right-4 bottom-1.5"
              src="scope.svg"
            ></img>
          </button>

          {/* mic */}
          <button className="ml-[12px] w-[40px] h-[40px] rounded-full bg-gray-300 flex items-center justify-center aspect-square">
            <img
              className="flex shrink-0 rounded-full w-[24px]"
              src="mic.svg"
            ></img>
          </button>
        </div>

        <ul className="flex items-center justify-end w-[225px] h-[40px] bg-red-500 shrink-0">
          <li className="flex sm:hidden ml-[12px] w-[40px] h-[40px] p-2 shrink-0">
            <img className="bg-green-200" src="scope.svg"></img>
          </li>
          <li className="flex sm:hidden ml-[12px] w-[40px] h-[40px] p-2 shrink-0">
            <img className="bg-green-500" src="mic.svg"></img>
          </li>
          {/* video */}
          <li className="p-2 w-[40px] h-[40px] flex items-center">
            <img className="bg-green-500" src="video.svg"></img>
          </li>
          {/*bell*/}
          <li className="p-2 w-[40px] h-[40px] flex items-center">
            <img className="bg-green-500" src="bell.svg"></img>
          </li>
          <li className="flex justify-center py-[1px] px-[6px] w-[60px] h-[34px]">
            <img
              className="w-[32px] h=[32px] rounded-full"
              src="me.jpg
            "
            ></img>
          </li>
        </ul>
      </header>
    </main>
  );
}
