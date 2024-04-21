import Image from "next/image";
export default function Home() {
  return (
    <main className="w-full h-screen bg-red-200">
      {/* 169px 1fr 156px */}
      <div className="my-grid bg-blue-400">
        <div className="flex justify-center items-center">
          <img src="logo.svg"></img>
        </div>
        <div className="bg-green-200">いいい</div>
        <div>ううう</div>
      </div>
    </main>
  );
}
