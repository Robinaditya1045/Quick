"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { signOut } from 'next-auth/react';

const LeftSideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  const handleSignOut = () =>{
    signOut({ callbackUrl: '/signin' });
  }

  return (
    <div className="w-64 bg-black text-white h-screen flex flex-col">
      <div className="flex items-center justify-center h-16">
        <h1 className="text-2xl font-bold">Quick</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link href="/" passHref>
              <div className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                <span className="text-sm font-medium">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/homepage" passHref>
              <div className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                <span className="text-sm font-medium">Tasks</span>
              </div>
            </Link>
          </li>
          <li>
            <button
              className="flex items-center justify-between w-full p-4 focus:outline-none hover:bg-gray-700"
              onClick={toggleOpen}
            >
              <span className="text-sm font-medium">Dropdown</span>
              {open ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {open && (
              <ul className="space-y-1 pl-6">
                <li>
                  <Link href="/subpage1" passHref>
                    <div className="block py-2 px-4 hover:bg-gray-700 cursor-pointer">
                      Subpage 1
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/subpage2" passHref>
                    <div className="block py-2 px-4 hover:bg-gray-700 cursor-pointer">
                      Subpage 2
                    </div>
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/page2" passHref>
              <div className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                <span className="text-sm font-medium">Page 2</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <div className='mb-6 flex items-center'>
      <button onClick={handleSignOut} className='block py-2 px-4 cursor-pointer text-red-500'>Sign out</button>
      </div>
    </div>
  );
};

export default LeftSideBar;
