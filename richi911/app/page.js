export default function Home() {
  return (
    <main className="w-full h-screen bg-red-200">
      <div className="my-grid bg-blue-400">
        <div className="flex justify-center items-center">
          <img className="h-[20px]" src="youtube-logo.svg"></img>
        </div>
        <div className="bg-green-200 flex justify-center items-center">
          <input className="w-full max-w-[536px] h-[40px]"></input>
          <button className="w-[64px] h-[40px] bg-gray-400">1</button>
          <button className="aspect-square rounded-full ml-[12px] w-[40px] h-[40px] bg-gray-400">
            1
          </button>
        </div>
        <ul class="list-none flex justify-center items-center gap-2">
          <li className="p-2">
            <img className="h-[24px]" src="create.svg"></img>
          </li>
          <li className="p-2">
            <img className="h-[24px]" src="notifications.svg"></img>
          </li>
          <li className="p-2">
            <img className="h-[32px] rounded-full" src="profile.jpg"></img>
          </li>
        </ul>
      </div>
    </main>
  );
}
