'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

const page = () => {
   const supabase = createClient()
   const [dataSource, setDataSource] = useState([]);

   const getProfile = useCallback(async () => {
      try {
      //   setLoading(true)
  
        const { data, error, status } = await supabase
          .from('profiles')
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
  
    const onChangeHandler = (name,index) => {
      console.log(dataSource[index].username)
      // dataSourceを直接編集できない
      // dataSourceのコピーを作って、編集したあと、コピーをdataSourceに上書きする
      let newArr = [...dataSource]
      newArr[index].username = name
      setDataSource(newArr)
   };

  return (
   <>
    <div>プロフィール</div>
    <div className='flex bg-gray-300 gap-1 flex-wrap p-2'>
      {dataSource.map((item, index) => (
        <div key={index} className='w-[200px] h-[300px] bg-blue-300 relative p-2'>
          <div>
            <div>Name</div>
            <input
              className='p-1'
              type="text"
              name="name"
              onChange={(e) => onChangeHandler(e.target.value,index)}
              value={item.username}
            />
          </div>
          <div className='justify-center flex absolute bottom-1 start-1/3'>
            <button className='bg-blue-400 text-white px-3 py-1 rounded-md'>更新</button>
          </div>
        </div>
       ))}
   </div>
   </>
  )
}

export default page