import React from "react"
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import {LoginLink, LogoutLink, RegisterLink, getKindeServerSession} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight, CreditCard, Keyboard, LogOutIcon, Settings, User } from "lucide-react"
import { ModeToggle } from "./ModeToggle"
import Image from "next/image"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Navbar = () => {
    const { isAuthenticated, getUser } = getKindeServerSession()
    const user = getUser()

    return (
        <nav className="sticky inset-x-0 h-14 top-0 w-full z-30 border-b border-zinc-200 bg-white-900 dark:border-gray-800 dark:bg-white-300/75 backdrop-blur-lg dark:backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex items-center border-b h-14 justify-between border-zinc-200  dark:border-gray-800">
                    <Link href='/'>
                        <span className="text-2xl text-bold ">
                            Scribe 
                            <span className="text-primary text-bold">
                                 Ai
                            </span>
                        </span>
                    </Link>


                    



                    <div className="hidden items-center space-x-4 sm:flex ">
                        <>
                            <Link href='/pricing' 
                                className={buttonVariants({
                                variant: "ghost",
                                size: "sm",
                                })}>
                                Pricing
                            </Link>

                            <div className="flex gap-4 items-center space-x-2">
                                {!isAuthenticated() ? (
                                    <>
                                        
                                        <LoginLink className={buttonVariants({
                                            variant: "outlinehover",
                                            size: "sm",
                                            // border: "ring"
                                          
                                        })}>Sign in</LoginLink>
                                        <RegisterLink className={buttonVariants({
                                            variant: "default",
                                            size: "sm",
                                            border: "default"
                                        })}
                                        >Get started
                                        </RegisterLink>


                                         
                                    </>
                                ) : (
                                    <div className="flex font-normal">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>

                                            {user?.picture ? (
                                                <Avatar>
                                                    <AvatarImage
                                                    
                                                    src={user?.picture}
                                                    width={45}
                                                    height={10}
                                                    />
                                                    <AvatarFallback>{user?.given_name?.[1]}</AvatarFallback>
                                                </Avatar>

                                                ) 
                                                : (
                                                    <div className="p-1 border-gray-200 border b-3 px-2 m-2">
                                                    {user?.given_name?.[0]}
                                                    {user?.family_name?.[0]}
                                                </div>
                                            )}
                                           </DropdownMenuTrigger>
                                           <DropdownMenuContent className="px-2 ring-1 ring-gray-300/70">
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                    {/* <p className="">
                                                        {user?.given_name} {user?.family_name}
                                                    </p> */}
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        <User className="mr-2 h-4 w-4" />
                                                        <span>Profile</span>
                                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <User className="mr-2 h-4 w-4" />
                                                        <Link href='/dashboard'>

                                                         <span>Dashboard</span>
                                                        </Link>
                                                        
                                                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <CreditCard className="mr-2 h-4 w-4" />
                                                        <span>Billing</span>
                                                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Settings className="mr-2 h-4 w-4" />
                                                        <span>Settings</span>
                                                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <span className="mr-2 h-4 w-4">🎉</span>
                                                        <span>What&apos;s New</span>
                                                        {/* <DropdownMenuShortcut>h</DropdownMenuShortcut> */}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem className="hover:bg-red-200 hover:ring-red-300 hover:ring-1">
                                                        <LogOutIcon className="mr-2 h-4 w-4"/>
                                                        <span>
                                                        <LogoutLink className="hover:font-semibold">Log out</LogoutLink>
                                                        </span>
                                                    </DropdownMenuItem>
                                                    {/* <DropdownMenuItem>
                                                        <Keyboard className="mr-2 h-4 w-4" />
                                                        <span>Keyboard shortcuts</span>
                                                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                                                    </DropdownMenuItem> */}
                                                    </DropdownMenuGroup>
                                           </DropdownMenuContent>
                                        </DropdownMenu>
                                        {/* <div>
                                            // <p className="text-xl rounded-sm p-1 border-gray-200 border b-3 px-2 m-2">
                                            //     {user?.given_name} {user?.family_name}
                                            // </p>

                                            <LogoutLink className="text-black">Log out</LogoutLink>
                                        </div> */}
                                    </div>


                                )}
                            </div>
                            <div>
                                <ModeToggle />
                            </div>
                            {/* <LoginLink 
                            className={buttonVariants({
                                variant: "outline",
                                size: "sm"
                            })}>
                                Sign in
                            </LoginLink>
                            <RegisterLink
                            className={buttonVariants({
                                size: "sm"
                            })}>
                                Get started <ArrowRight className="ml-1.5 w-5 h-5"/>
                            </RegisterLink> */}
                        </>
                    </div>
                </div>
                {/* <ModeToggle /> */}
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar