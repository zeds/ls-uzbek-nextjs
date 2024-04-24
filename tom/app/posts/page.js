'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

const page = () => {
   const supabase = createClient()
   const [dataSource, setDataSource] = useState([]);

   const getProfile = useCallback(async () => {
      try {
      //   setLoading(true)
  
        const { data, error, status } = await supabase
          .from('posts')
          .select("*")
  
        if (error && status !== 406) {
          throw error
        }
  
        if (data) {
           console.log("data = ", data)
           setDataSource(data)
        }
      } catch (error) {
        alert('Error loading user data!')
      } finally {
      //   setLoading(false)
      }
    }, [])

    useEffect(() => {
      getProfile()
    }, [])
  
  return (
   <>
    <div>投稿一覧</div>
    <div className='flex bg-blue-200 gap-1 flex-wrap p-2'>
      {dataSource.map((item) => (
         <Link href={`posts/${item.id}`}>
            {item.id}
            <div className='flex justify-center items-center w-[100px] h-[100px] bg-pink-200'>{item.title}</div>
         </Link>
       ))}
   </div>
   </>
  )
}

export default page