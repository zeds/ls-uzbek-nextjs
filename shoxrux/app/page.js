export default function Home() {
  return (
    <main className='w-full h-screen'>
      <header className='my-grid'>
        <div className='flex items-center justify-around'>
          <img className='w-[40px] p-[8px]' src='burger.svg'></img>
          <img className='h-[20px]' src='logo.svg'></img>
        </div>
        <div className=' flex items-center justify-center'>
          <input className='h-[40px] w-[80%] outline-none rounded-s-3xl border-black input-br'></input>
          <button className="bg-neutral-200 hover:bg-neutral-300  p-2 rounded-e-3xl border-current"><img className="pl-2 pr-2" src="search.svg"></img></button>
        </div>
        <ul className='flex items-center justify-around'>
          <li className='h-[56px] flex items-center justify-center cursor-pointer'>
            <img className='p-18' src='video.svg'></img>
          </li>
          <li className='h-[56px] flex items-center justify-center cursor-pointer'>
            <img className='p-18' src='bell.svg'></img>
          </li>
          <li className='py-[1px] px-[6px] cursor-pointer'>
            <img
              className='h-[32px] w-[32px] rounded-full object-cover'
              src='fff.jpg'
            ></img>
          </li>
        </ul>
        <div></div>
      </header>
      {/* next */}
    </main>
  )
}
