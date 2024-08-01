"use client"

import React from 'react'

interface TaskTypes {
    id: number;
    title: string;
    description: string;
    completed: boolean
}

const TaskCard = ({id,title,description,completed}: TaskTypes) => {
  return (
    <div className='max-w-72 bg-slate-700 h-fit flex flex-col gap-2 text-white px-2 py-2 rounded-md'>
        <p className='text-whtie text-xl'>{title}</p>
        <p className='text-whtie text-sm'>{description}</p>
        {completed ? (
            <div className='w-3 h-3 rounded-full bg-green-600'></div>
        ):(
            <div className='w-3 h-3 rounded-full bg-red-600'></div>
        )}
    </div>
  )
}

export default TaskCard