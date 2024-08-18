"use client"

import TaskCard from '@/components/cards/TaskCard';
import { tasks } from '@/constants/data';
import { useSession } from 'next-auth/react';
import { Skeleton } from "@/components/ui/skeleton"

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

      const now = new Date(); // Get current date and time
      const greeting = getGreeting(now); // Determine the appropriate greeting

      const session = useSession();
      const username = session.data?.user?.name as string
  return (
    <div className='w-full min-h-screen px-20'>
      <div className='text-2xl pt-8 flex justify-center items-center'>
       {(username) ? `${greeting}, ${username}`  :<Skeleton className="h-8 w-[400px]" />}
      </div>
      <p className='mt-20 backdrop:w-full text-xl'>Tasks</p>
      <div className='mt-10 grid grid-cols-4 gap-4'>
        {tasks.map((task) => (
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
