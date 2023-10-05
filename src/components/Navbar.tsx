import React from "react"
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import {LoginLink, RegisterLink} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

const Navbar = () => {
    return (
        <nav className="sticky inset-x-0 h-14 top-0 w-full z-30 border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex items-center border-b h-14 justify-between border-zinc-200">
                    <Link href='/'>
                        <span>
                            Newsly.
                            {/* <span>
                                Io
                            </span> */}
                        </span>
                    </Link>



                    <div className="hidden items-center space-x-4 sm:flex ">
                        <>
                            <Link href='/pricing' 
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}>
                                Pricing
                            </Link>
                            <LoginLink 
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
                            </RegisterLink>
                        </>
                    </div>
                </div>
                {/* <ModeToggle /> */}
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar