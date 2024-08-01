import React from 'react'
import { currentUser } from '@clerk/nextjs/server';

const page = async() => {
    const user = await currentUser();
  return (
    <div className='w-full min-h-screen bg-gray-900 flex justify-center'>
        <p className='text-2xl text-white pt-8'>Good Evening, {user?.firstName} {user?.lastName}</p>
    </div>
  )
}

export default page