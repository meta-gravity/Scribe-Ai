import { Dice4Icon } from 'lucide-react';
import Link from 'next/link';
import React, { ReactNode } from 'react'


interface SideBarProps {
    children: ReactNode;
  }
  

const SideBar = (
    // { children}: SideBarProps
    ) => {
    return (
        <div className="flex">
            <div className="fixed w-20 h-screen p-4 bg-white border-r-1 flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <Link href='/'>
                        <div>
                            <Dice4Icon className="bg-black" />
                        </div>
                    </Link>
                </div>
            </div>
            {/* <main className="ml-20 w-full">{children}</main> */}
        </div>
    )
}

export default SideBAr;