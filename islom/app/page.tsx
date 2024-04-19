import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen bg-red-200">
      <header className="my-grid bg-green-400">
        <nav className="flex items-center justify-between ml-4">
          <div className="flex items-center">
            <div className="bg-red-200 w-10 h-10 p-2 shrink-0">
              <img src="burger.svg" alt="Menu"></img>
            </div>
            <div className="w-[127px] h-[56px] bg-blue-300 py-[18px] pl-[16px] pr-[14px] shrink-0">
              <img src="logo.svg" alt="Logo"></img>
            </div>
          </div>

          <div className="bg-blue-200 flex items-center justify-center px-4 ">
            <input className="h-[40px] w-full max-w-[536px] rounded-l-full" placeholder="Search"></input>
            <button className="w-[64px] h-[40px] bg-gray-200 flex items-center justify-center rounded-r-full ">
              <img src="scope.svg" alt="Search"></img>
            </button>
            <button className=" ml-[12px] rounded full flex items-center justify-center aspect-ratio">
              <img className="flex rounded-full w-[40px] bg-gray-200 " src="mic.svg" alt="Microphone"></img>
            </button>
          </div>

          <ul className="flex items-center justify-center gap-2">
            <li className="p-2">
              <img className="h-[24px]" src="video.svg" alt="Video"></img>
            </li>
            <li className="p-2">
              <img className="h-[24px]" src="bell.svg" alt="Notifications"></img>
            </li>
            <li className="p-2">
              <img className="h-[32px] rounded-full" src="tom.png" alt="User"></img>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
