import { Calendar, Code2, Cpu, Dice4Icon, Plus, SparklesIcon } from 'lucide-react';
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
                            <div className='bg-purple-800 text-white p-3 rounded-lg inline-block'>
                                <Cpu size={20} />
                            </div>
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-500/40 w-full p-2'></span>
                    <Link href='/'>
                        <div>
                            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block text-gray-900'>
                                <SparklesIcon size={20} />
                            </div>
                        </div>
                    </Link>
                    <Link href='/dashboard/post'>
                        <div>
                            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block  text-gray-900'>
                                <Plus size={20} />
                            </div>
                        </div>
                    </Link>
                    <Link href='/dashboard/schedule'>
                        <div>
                            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block  text-gray-900'>
                                <Calendar size={20} />
                            </div>
                        </div>
                    </Link>
                    <Link href='/dashboard/integrations'>
                        <div>
                            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block  text-gray-900'>
                                <Code2 size={20} />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <main className="ml-20 w-full">{children}</main> */}
        </div>
    )
}

export default SideBar;