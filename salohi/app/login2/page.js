import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const page = () => {
return (
    <div className='w-full h-screen bg-yellow-100 flex justify-center items-center'>
        <div className='flex flex-col w-[400px] bg-gray-200 p-4'>
            <div className='my-2 font-bold'>ユーザー名</div>
            <Input type="email" placeholder="メールアドレス"/><div className='my-2 font-bold'>パスワード</div>
            <Input type="password" placeholder="パスワード"/>
            <Link href="/forget-password"
            className='text-blue-500 underline text-sm mt-1'>パスワードを忘れた</Link>
            <Button className="mt-5">ログイン</Button>
        </div>
    </div>
)
}

export default page