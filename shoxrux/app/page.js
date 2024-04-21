export default function Home() {
  return (
    <main className="w-full h-screen">
      <header className="my-grid">
        <div className="flex items-center justify-around">
          <img className="w-[40px] p-[8px]" src="burger.svg"></img>
          <img className="h-[20px]" src="logo.svg"></img>
        </div>
        <div className=" flex items-center justify-center">
          <input className="h-[40px] w-[80%] outline-none rounded-s-3xl border-black input-br px-5"></input>
          <button className="search-btn w-[64px] h-[40px] p-2 rounded-e-3xl border-current">
            <img className="pl-2 pr-2 " src="search.svg"></img>
          </button>
        </div>
        <ul className="flex items-center justify-around">
          <li className="h-[56px] flex items-center justify-center cursor-pointer">
            <img className="p-18" src="video.svg"></img>
          </li>
          <li className="h-[56px] flex items-center justify-center cursor-pointer">
            <img className="p-18" src="bell.svg"></img>
          </li>
          <li className="py-[1px] px-[6px] cursor-pointer">
            <img
              className="h-[32px] w-[32px] rounded-full object-cover"
              src="fff.jpg"
            ></img>
          </li>
        </ul>
      </header>
      <div className="contents-grid h-[100vh]">
        <div className="">
          <div className="flex w-[90%]">
            <ul className="ml-[20px] mt-[5px]">
              <li className="category-list pl-2 pr-7  h-[40px] flex items-center cursor-pointer">
                <img src="home.svg"></img>ホーム
              </li>
              <li className="category-list pl-2 pr-7 h-[40px] flex items-center cursor-pointer">
                <img src="shorts.svg"></img>ショーツ
              </li>
              <li className="category-list pl-2 pr-7 h-[40px] flex items-center cursor-pointer">
                <img src="subscribe.svg"></img>サブスクライブ
              </li>
            </ul>
          </div>
        </div>
        <div className="article-container bg-green-200">
          <div className="articel">
< a href="https://youtu.be/1Ut6RouSs0w?si=GBMKbhLb_4MgMdR9">            <img className="rounded-[15px] w-[100%]" src="tg.jpg"></img></a>
            <div className="video-info flex">
              <img className="rounded-[55px] h-[36px]" src="canelTg.jpg"></img>
              <div className="info-text">
                <h1>Telegram Creator on Elon Musk, Resisting FBI Attacks, and Getting Mugged in California</h1>
                <h4>Tucker Carlson</h4>
                <h4>2,3 млн просмотров</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* next */}
    </main>
  );
}
