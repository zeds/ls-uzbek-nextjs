import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Page = () => {
    return (
        <div className="flex items-center justify-center  w-full h-screen">
            <div className="bg-gray-200 w-[400px] flex flex-col p-4 rounded-xl shadow-lg">
                <div>パスワードを再設定メールを送る</div>
                <div className="my-2 font-bold">メールアドレス</div>
                <Input
                    type="email"
                    placeholder=""
                    className="bg-white placeholder:text-gray-400"
                />
                <p className="pt-5">Qiitaに登録したメールのみ送信可能です。</p>
                <div className="flex gap-10 justify-between ">
                    <Button className="mt-5 w-[100px]"><Link href="./login">back</Link></Button>
                    <Button className="mt-5 w-[100px]">送信</Button>

                </div>
            </div>
        </div>
    );
};

export default Page;
