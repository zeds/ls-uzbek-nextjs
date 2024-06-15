import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Page = () => {
return (
    <main className='w-[100%] h-[100vh] bg-slate-400 flex justify-center items-center'>
        <main1 className="w-full max-w-lg h-[400px] bg-slate-50">
            <div className='ml-3 mt-1 text-2xl'>パスワード再設定メールを送る</div>
            <div className='mt-8 ml-3 text-lg'>メールアドレス</div>
            <Input type="email" placeholder='メールアドレス' className="w-[400px] h-8 ml-3 bg-slate-200"></Input>
            <div className='ml-3'>登録されたメールアドレスのみ送信可能です。</div>
            <div>
                <div className="flex items-center space-x-2 border w-[300px] h-[100px] ml-3 mt-3 bg-slate-200">
                    <Checkbox className="w-[30px] h-[30px] ml-1" id="terms"/><Label htmlFor="terms">私のロボットではありません</Label>
                </div>
            </div>
            <Button className="mt-[85px] ml-3 bg-green-700">送信</Button>
        </main1>
    </main>
)
}

export default Page