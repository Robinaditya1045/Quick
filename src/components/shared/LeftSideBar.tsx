"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const LeftSideBar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <div className="w-64 bg-gray-800 text-white h-screen flex flex-col">
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
            <Link href="/page1" passHref>
              <div className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                <span className="text-sm font-medium">Page 1</span>
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
    </div>
  );
};

export default LeftSideBar;
