import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

export default function Page() {
  const router = useRouter();

  const back = () => {
    router.back();
  }

  return (
    <header className='w-full h-[56px] bg-blue-200 items-center'>
      <div className='bg-red-200 w-10'>
        <FaArrowLeft onClick={back} />
      </div>
    </header>
  );
}
