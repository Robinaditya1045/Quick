

import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import TaskCard from '@/components/cards/TaskCard';
import { tasks } from '@/constants/data';

const Page = async() => {
      const user = await currentUser();
      const completedTasks = tasks.filter((task) => (
        task.completed === true
      ) );
      const incompleteTasks = tasks.filter((task) => (
        task.completed === false
      ));

  return (
    <div className='w-full min-h-screen bg-gray-900 px-20'>
      <p className='text-2xl text-white pt-8 text-center'>
        Good Evening, {user?.firstName} {user?.lastName}
      </p>
      <p className='mt-20 backdrop:w-full text-white text-xl'>Remaining tasks</p>
      <div className='mt-10 grid grid-cols-4 gap-4'>
        {incompleteTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        ))}
      </div>
      <p className='mt-20 w-full text-white text-xl'>Completed tasks</p>
      <div className='mt-10 grid grid-cols-4 gap-4'>
      {completedTasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            completed={task.completed}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
