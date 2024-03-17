"use client"

import MaxWidthWrapper from "../MaxWidthWrapper"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    // Badge,
  } from "@/components/ui/card"
  import { Badge } from "@/components/ui/badge"

  //Images for features cards 
  import Image from 'next/image'
  import begins from '../../../public/begins.jpeg'
  import nd from '../../../public/nd.jpg'
  import holeg from '../../../public/holeg.png'


//   import { render } from "react-dom";
  import React, { useState, useEffect, useRef } from "react";
  

export default function Cards() {
    return (
        <main className="flex mx-auto container py-20 ">
            <section id="features" className="mx-auto px-6 py-12 mt-24 sm-py-24 max-w-5xl md:max-w-6xl relative">
                <div className="relative rounded-3xl border-t border-slate-600 pt-20 overflow-hidden pb-4 ">
                    <div aria-hidden="true" 
                    className="left-1/2 top-0 w-full  user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 
                    background:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)"></div>
                    <div aria-hidden="true" 
                    className="-top-1 left-1/2 h-[200px] w-full user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2 
                    background:conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)"></div>


                    <h2 className="mt-4 md:mt-0 font-medium font-effect-hero font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient ">Features</h2>
                    <p className=" mx-auto mb-10 max-w-sm lg:max-w-[34rem] text-center text-xl md:text-[1.125rem] md:leading-[1.5] text-muted-foreground  mt-4 relative z-40">AI-powered, Connect to your workflow seamleasly and more</p>

                    <div className="grid grid-cols-3 gap-4 w-full">

                        <Card className="p-6  hover:bg-white/50 cursor-pointer dark:border-stone-800 border-stone-200 hover:shadow-gray-300/70 hover:shadow-xl shadow-blur ease-in-out delay-100 rounded-xl flex flex-col gap-1 row-span-2 col-span-2
                        pointer-events-none transition duration-300 group-hover:opacity-100 
                        background:radial-gradient(
                            650px circle at 0px 0px,
                            rgba(200, 200, 200, 0.1),
                            transparent 50%
                            )
                        ">

                            <div className=" max-w-6xl px-6 lg:px-4 p-2 m-2 space-x-1 space-between">
                                <div className="m-2 rounded-3xl">
                                <Image
                                    src={begins}
                                    alt="me in this working"
                                    quality={100}
                                    loading='lazy'
                                    className='rounded-lg ' />                 
                                </div>
                            </div>
                           

                            <CardHeader>
                                <CardTitle className="space-x-2">
                                    <span className="font-bold text-xl">Quality Content</span>
                                    <Badge className="text-center hover:bg-red-400">AI Powered</Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex m-1 text-center">
                                Our AI content writer produces high-quality content that is both
                                engaging and SEO-optimized.
                            </CardContent>
                        </Card>


                        <Card className="p-6 dark:border-stone-800 border-stone-200 hover:shadow-gray-300/70 hover:shadow-xl shadow-blur ease-in-out delay-100 rounded-xl flex flex-col gap-1
                        pointer-events-none transition duration-300 group-hover:opacity-100 background:radial-gradient(
                            650px circle at 0px 0px,
                            rgba(200, 200, 200, 0.1),
                            transparent 50%
                            )">

                            <div className=" max-w-6xl px-6 lg:px-4 p-2 m-2 space-x-1 space-between">
                                <div className="m-2 rounded-3xl">
                                <Image
                                    src={nd}
                                    alt="me in this working"
                                    quality={100}
                                    loading='lazy'
                                    className='rounded-lg ' />                 
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="space-x-2">
                                    <span className="font-bold text-xl">Fast and Efficient</span>
                                    <Badge className="text-center">AI Powered</Badge>
                                </CardTitle >
                            </CardHeader>

                            <CardContent className="flex m-1 text-center">
                                Our AI content writer produces high-quality content that is both
                                engaging and SEO-optimized.
                            </CardContent>
                        </Card>


                        <Card className="p-6 dark:border-stone-800 border-stone-200 hover:shadow-gray-300/70 hover:shadow-xl shadow-blur ease-in-out delay-100 rounded-xl flex flex-col gap-1
                        pointer-events-none transition duration-300 group-hover:opacity-100 background:radial-gradient(
                            650px circle at 0px 0px,
                            rgba(200, 200, 200, 0.1),
                            transparent 50%
                            )
                        ">
                            {/* <div className=" max-w-6xl px-6 lg:px-4 p-2 m-2 space-x-1 space-between">
                                <div className="m-2 rounded-3xl">
                                <Image
                                    src={holeg}
                                    height={50}
                                    width={50}
                                    alt="me in this working"
                                    quality={100}
                                    loading='lazy'
                                    className='rounded-lg ' />                 
                                </div>
                            </div> */}

                            <CardHeader>
                                <CardTitle className="space-x-2">
                                    <span className="font-bold text-xl">Quality Content</span>
                                    <Badge className="text-center">AI Powered</Badge>
                                </CardTitle >
                            </CardHeader>

                            <CardContent className="flex m-1 text-center">
                                Our AI content writer produces high-quality content that is both
                                engaging and SEO-optimized.
                            </CardContent>
                        </Card>

                        {/* <Card className="p-6 border-stone-800 rounded-xl flex flex-col gap-1 row-span-5 col-span-3
                        pointer-events-none transition duration-300 group-hover:opacity-100 background:radial-gradient(
                            650px circle at 0px 0px,
                            rgba(200, 200, 200, 0.1),
                            transparent 50%
                            )
                        ">
                            <CardHeader>
                                <CardTitle>
                                    <span className="font-bold text-xl">Quality Content</span>
                                    <Badge className="text-center">AI Powered</Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex m-1 text-center">
                                Our AI content writer produces high-quality content that is both
                                engaging and SEO-optimized.
                            </CardContent>
                        </Card> */}

                    </div>
                    
                </div>
            </section>
        </main>
    )
}