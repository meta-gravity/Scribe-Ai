import {  CreditCardIcon, LogOut, MenuIcon, Settings, SparklesIcon, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button, buttonVariants } from "./ui/button"
import Link from "next/link"

const SideBar = () => {
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="destructive" className="absolute right-4 inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-gray-600">
                         <MenuIcon 
                        className="block md:hidden h-6 w-6"
                        aria-hidden="true"
                        /> 
                    </Button>
                </DropdownMenuTrigger>
                <div className="p-6 w-1/2 h-screen bg-white z-10 fixed lg:w-60 peer-focus lg:left-0 ease-out delay peer-transition duration-200 delay-150">
                    <div className="flex flex-col justify-start items-center">
                        <h1 className="text-3xl text-center cursor-pointer font-bold text-blue-900 border-b border-gray-500 w-full pb-4">
                            <Link href='/dashboard' 
                            className={buttonVariants({
                                variant: "ghost",
                                size: "lg"
                                
                            })}> 
                                Dashboard
                            </Link>
                        </h1>
                        <DropdownMenuSeparator />
                        <div className="my-4 border-b border-gray-100 pb-4">
                                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-500 group-hover:text-white p-2 rounded-md hover:shadow-sm cursor-pointer">
                                    <SparklesIcon className="text-2xl text-gray-800"/>
                                    <h3 className="text-base text-gray-800 font-semibold">
                                        Generate
                                    </h3>
                                </div>
                                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-500 group-hover:text-white p-2 rounded-md hover:shadow-sm cursor-pointer">
                                    <Settings className="text-2xl text-gray-800"/>
                                    <h3 className="text-base text-gray-800 font-semibold">
                                        Settings
                                    </h3>
                                </div>
                                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-blue-500 group-hover:text-white p-2 rounded-md hover:shadow-sm cursor-pointer">
                                    <CreditCardIcon className="text-2xl text-gray-800"/>
                                    <h3 className="text-base text-gray-800 font-semibold">
                                        Billing
                                    </h3>
                                </div>
                        </div>
                        <DropdownMenuSeparator />


                        <div className="my-4  items-center">
                                <div className="flex mb-2 justify-start items-center gap-4 px-5 p-2 cursor-pointer">
                                    <Button variant="ghost"
                                        className="mb-2 gap-4 px-5 p-2 border-red-300 rounded-md items-center peer-hover:text-white">
                                        <LogOut className="text-2xl text-gray-800"/>
                                        <h3 className="text-base text-gray-800 font-semibold">
                                            Sign out
                                        </h3>
                                    </Button>
                                </div>
                                <div className="flex mb-2 justify-start items-center px-5 p-2  hover:accent-white hover:text-white cursor-pointer">
                                    <Button 
                                        variant="outline"
                                        className="mb-2 gap-4 px-5 p-2 border-red-300 hover:bg-red-500 rounded-md items-center"
                                        >
                                        <Trash className="text-2xl text-gray-900"/>
                                        <h3 className="text-base text-gray-900 font-semibold">
                                            Delete
                                        </h3>
                                    </Button>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </DropdownMenu>

            {/* <MenuIcon /> */}
        </div>
    )
}

export default SideBar