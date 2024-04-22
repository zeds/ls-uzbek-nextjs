'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'

const page = () => {
  const supabase = createClient()
  const [dataSource, setDataSource] = useState([])

  const getProfile = useCallback(async () => {
    try {
      //   setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles2')
        .select('*')

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        console.log('data = ', data)
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
      <div>プロフィール</div>
      <div className='bg-red-200'>
        {dataSource.map(item => (
          <div>{item.username}</div>
        ))}
      </div>
      <div className='bg-green-200'>
        {dataSource.map(item => (
          <div>{item.address}</div>
        ))}
      </div>
      <div className='bg-yellow-200'>
        {dataSource.map(item => (
          <div>{item.phone}</div>
        ))}
      </div>
    </>
  )
}

export default page
