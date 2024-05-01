"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const back = () => {
    router.push("./");
  };

  return (
    <div className="p-20">
      <div>会社情報</div>
      <button className="w-20 h-full bg-blue-400" onClick={back}>
        戻る
      </button>
    </div>
  );
};

export default page;
