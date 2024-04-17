export default function Home() {
  return (
    <main className="w-full h-screen bg-red-200">
      <header className="my-grid bg-green-400">
        <div className="flex items-center justify-center">
          <img className="h-[20px]" src="logo.svg"></img>
        </div>
        <div className="bg-blue-200 flex items-center justify-center">
          <input className="w-full max-w-[536px] h-[40px] "></input>
          <button className="w-[64px] h-[40px] bg-gray-200"></button>
          <button className="flex items-center justify-center bg-gray-500 ml-[12px]">
            <img src="mic.svg"></img>
          </button>
        </div>
        <ul className="flex items-center justify-center gap-2">
          <li className="p-2">
            <img className="h-[24px]" src="video.svg"></img>
          </li>
          <li className="p-2">
            <img className="h-[24px]" src="bell.svg"></img>
          </li>
          <li className="py-[1px] px-[6px]">
            <img className="h-[32px] rounded-full" src="tom.png"></img>
          </li>
        </ul>
      </header>
    </main>
  );
}
