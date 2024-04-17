export default function Home() {
  return (
    <main className='w-full h-screen bg-red-200'>
      <header className='my-grid'>
        <div className='flex items-center justify-center'>
          <img className='h-[20px]' src='logo.svg'></img>
        </div>
        <div className=' flex items-center justify-center'>
          <input className='h-[40px] w-[80%] outline-none rounded-s-lg'></input>
          <button className="bg-slate-200 p-2"><img className=""></img>Search</button>
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
    </main>
  )
}
