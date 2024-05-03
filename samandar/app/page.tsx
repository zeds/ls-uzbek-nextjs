import Image from "next/image";

export default function Home() {
  return (
    <main className=" w-full h-[200px] min-h-screen bg-red-200">
      <div className="my-grid">
        <div className="flex justify-center items-center bg-red-600">
          <img className="h-20px" src="logo.svg"></img>
        </div>
        <div className="bg-green-200 flex justify-center items-center">
          <input className="w-full max-w-[536px] h-[48px] rounded-full"></input>
          <button className="w-[64px] h-{40px] bg-gray-200">12</button>
          <button className="w-[64px] h-[40px] bg-gray-200">24</button>
        </div>
        <ul className="list-none flex gap-2 justify-center items-center">
          <li className="p-2">
            <img className="h-[24px]" src=""></img>
          </li>
          <li className="p-2">
            <img className="h-[24px]" src=""></img>
          </li>
          <li className="p-2">
            <img className="h-[32px] rounded-full" src=""></img>
          </li>
        </ul>
      </div>
    </main>
  );
} 