'use client'

import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import {sidebarLinks} from '@/constants/data'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

function LeftSidebar(){

    const router = useRouter();
    const pathname = usePathname();
    const {userId} = useAuth();
    return(
        <section className="custon-scrollbar leftsidebar">
            <div className="w-full flex flex-col flex-1 gap-6 px-4">
                {sidebarLinks.map((link) =>{

                    const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route; 

                    if (link.route === "/profile") link.route = `${link.route}/${userId}`;
            
                    return(
                    <Link href={link.route} key={link.label} className={`leftsidebar_link ${isActive && 'bg-white'}`}>
                        <Image src={link.imgURL} alt={link.label} width={24} height={24} />
                        <p className='text-emerald-600 max-lg:hidden'>{link.label}</p>
                    </Link>
                )})}
            </div>
        </section>
    )
}

export default LeftSidebar;