import OpenTaskDialogButton from '@/components/cta/OpenTaskDialogButton'
import { Button } from '@/components/ui/button'
import { PlusIcon } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className="p-8 space-y-8 flex flex-col">
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
    </div>

    <div className='mx-32'>
    <section className='mb-10'>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      {/* Add your tasks components here */}
      <div className="flex items-center justify-center w-28 h-28 rounded-lg bg-primary text-white">
        {/* <PlusIcon className="w-6 h-6" /> */}
        <OpenTaskDialogButton />
      </div>
    </section>
    
    <section>
      <h2 className="text-xl font-semibold mb-4">Links</h2>
      <Button className="rounded-lg">
        Manage Links
      </Button>
    </section>
    </div>
  </div>

  ) 
}

export default page