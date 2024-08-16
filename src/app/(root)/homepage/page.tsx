"use client"

import TaskCard from '@/components/cards/TaskCard';
import { tasks } from '@/constants/data';
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';

const getGreeting = (date: Date) => {
  const hours = date.getHours();
  if (hours < 12) {
    return 'Good Morning';
  } else if (hours < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
};

const Page = () => {
      const completedTasks = tasks.filter((task) => (
        task.completed === true
      ) );
      const incompleteTasks = tasks.filter((task) => (
        task.completed === false
      ));

      const now = new Date(); // Get current date and time
      const greeting = getGreeting(now); // Determine the appropriate greeting

      const session = useSession();
  return (
    <div className='w-full min-h-screen bg-gray-900 px-20'>
      <p className='text-2xl text-white pt-8 text-center'>
      {greeting}
      </p>
      <p className='text-white'>{JSON.stringify(session)}</p>
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
