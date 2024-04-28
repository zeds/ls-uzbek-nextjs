"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const back = () => {
    router.push("/");
  };

  const name = "richi";

  return (
    <header className="w-full h-[56px] bg-blue-200 flex items-center">
      <div className="w-10 h-10 bg-red-200 p-2">
        <img src="burger.svg"></img>
      </div>
      <button onClick={back}>Return</button>
      <Link href="/" className=" bg-orange-200 p-3 border-[2px] border-red-500">
        Back
      </Link>
    </header>
  );
};

export default page;
