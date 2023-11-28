// import { Link } from "lucide-react";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Binary, LucideGithub, LucideTwitter, Slack } from "lucide-react";

export default function Footer(){
    return (
        <main className="bg-[#0a0a0a0a] ">
            <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 border-t border-gray-800/30">
                <div className="mx-auto max-w-md">
                    <strong
                        className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
                        <h2 className="mt-2 md:mt-0 font-medium font-effect-hero font-display mb-2 text-center text-[3rem] md:text-[2.5rem] tracking-tight leading-[120%] dark:text-white text-black">want to join the waitlist</h2>
                    </strong>

                    <form className="mt-6">
                        <div className="relative max-w-lg">
                            <label className="sr-only"> Email </label>

                            <Input
                                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:bg-[#0a0a0a0a] dark:border-gray-500/30"
                                id="email"
                                type="email"
                                placeholder="ScribeAi@gmail.com"
                            />
                            <Button
                                className="absolute end-0 top-1/2 -translate-y-1/2 rounded-full hover:transition-all-3s bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-">
                                Join waitlist
                            </Button>
                        </div>
                    </form>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                    <div className="mx-auto max-w-sm lg:max-w-none">
                        <p className="mt-4 text-center text-gray-500 dark:text-gray-600 lg:text-left lg:text-lg">
                             Designed to inspire, guild and supercharge your content as an indvidual, marketer, designer or developer 🚀
                        </p>

                        <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                        <Link
                            className="text-gray-500 transition hover:text-primary"
                            href="https://twitter/metagravity0"
                            target="_blank"
                            rel="noreferrer">
                            <span className="sr-only"> Twitter </span>

                            <LucideTwitter className="h-6 w-6 "/>
                        </Link>

                        <Link
                            className="text-gray-500 transition hover:text-primary"
                            href="https://github.com/meta-gravity/Scribe-Ai"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="sr-only"> Github </span>

                            <LucideGithub className="h-6 w-6"/>
                        </Link>

                        <Link
                            className="text-gray-500 transition hover:text-primary"
                            href="https://dub.co/genZ-developer"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="sr-only"> Slack </span>

                             <Slack className="h-6 w-6"/>
                        </Link>

                        
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                    <div>
                        <strong className="font-medium text-gray-900 dark:text-gray-400"> Product </strong>

                        <ul className="mt-6 space-y-1">
                            <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Documentation
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Pricing
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Enterprise
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Changelog
                                </a>
                                </li>
                            </ul>
                    </div>

                        <div>
                            <strong className="font-medium text-gray-900 dark:text-gray-400"> Company </strong>

                            <ul className="mt-6 space-y-1">
                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Customers
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Careers
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    privacy policy
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Our Team
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <strong className="font-medium text-gray-900 dark:text-gray-400"> Support </strong>

                            <ul className="mt-6 space-y-1">
                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    FAQs
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Contact
                                </a>
                                </li>

                                <li>
                                <a
                                    className="text-gray-500 transition hover:text-primary"
                                    href="/"
                                >
                                    Community...
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-gray-500/40 pt-8">
                    <div className=" text-center text-xs/relaxed text-gray-500">
                            © 2023 Scribe, Inc. 

                                <br />

                                <p className="flex text-center items-center justify-center">
                                    Created with <Binary className="h-4 w-4 items-center"/> by 
                                </p> 

                                <p className="hover:text-underline hover:cursor-pointer hover:text-primary hover:text-sm">
                                    <Link href="https://twitter/metagravity0">
                                        Metagravity
                                    </Link>
                                </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

