import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white">
      <header className="my-grid w-full h-[56px]">
        {/* burger logo */}
        <div className="flex items-center justify-center">
          <div className=" w-[40px] h-[40px] p-[8px]">
            <img src="burger.svg"></img>
          </div>
          <div className="w-[127px] h-[56px]  py-[18px] pl-[16px] pr-[14px]">
            <img src="logo.svg"></img>
          </div>
        </div>
      </header>
    </main>
  );
}
