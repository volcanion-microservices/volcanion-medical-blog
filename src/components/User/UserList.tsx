'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchUsers } from '@/redux/usersSlice'
import { useAppDispatch } from '@/redux/hooks'
import { RootState } from '@/redux/store'

const UserList = () => {
  const dispatch = useAppDispatch()
  const { data: users, loading, error } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <section id='about' className='pt-16 md:pt-20 lg:pt-28'>
        <div className='container'>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default UserList
