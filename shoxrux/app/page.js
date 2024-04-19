export default function Home() {
  return (
    <main className='w-full h-screen'>
      <header className='my-grid'>
        <div className='flex items-center justify-center'>
          <img className='h-[20px] mr-5' src='burger.svg'></img>
          <img className='h-[20px]' src='logo.svg'></img>
        </div>
        <div className=' flex items-center justify-center'>
          <input className='h-[40px] w-[80%] outline-none rounded-s-3xl'></input>
          <button className="bg-neutral-200 p-2 rounded-e-3xl"><img className="pl-2 pr-2" src="search.svg"></img></button>
        </div>
        <ul className='flex items-center justify-center'>
          <li className='p-2'>
            <img className='h-[24px]' src='video.svg'></img>
          </li>
          <li className='p-2'>
            <img className='h-[24px]' src='bell.svg'></img>
          </li>
          <li className='py-[1px] px-[6px]'>
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
