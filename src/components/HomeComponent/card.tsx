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

//   import { render } from "react-dom";
  import React, { useState, useEffect, useRef } from "react";
  

export default function Cards() {
    return (
        // <MaxWidthWrapper>
        //     <div className='space-x-10 flex'>
        //         <div className="m-12 p-6 flex">
                   
        //             <Card className="flex-1 flex-col space-y-2 flex p-6 m-2 justify-center">
        //                 <CardHeader className="flex text-center">
        //                     <CardTitle className="text-center justify-center">
        //                         Fast and Efficient 
        //                         <Badge>AI Powered</Badge>
        //                     </CardTitle>
        //                 </CardHeader>
        //                 <CardContent className="flex m-1 text-center">
        //                     Generate content quickly and efficiently, saving you time and
        //                     resources.
        //                 </CardContent>
        //             </Card>
        //             <Card className="flex-col space-y-2 flex p-6 m-2 justify-center">
        //                 <CardHeader>
        //                     <CardTitle>
        //                         Customizable Content 
        //                         <Badge>AI Powered</Badge>
        //                     </CardTitle>
        //                 </CardHeader>
        //                 <CardContent className="flex m-1 text-center">
        //                     Customize the output to match your specific needs. Whether you need
        //                     blog posts, social media updates, or product descriptions, our AI can
        //                     handle it.
        //                 </CardContent>
        //             </Card>
        //         </div>
        //     </div>
        // </MaxWidthWrapper>

        <main className="flex mx-auto container py-20 ">
            <section id="features" className="mx-auto px-6 py-12 mt-24 sm-py-24 max-w-5xl md:max-w-6xl relative">
                <div className="relative rounded-3xl border-t border-slate-600 pt-20 overflow-hidden pb-4 ">
                    <div aria-hidden="true" 
                    className="left-1/2 top-0 w-full  user-select-none center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2 
                    background:linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)"></div>
                    <div aria-hidden="true" 
                    className="-top-1 left-1/2 h-[200px] w-full user-select-none center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2 
                    background:conic-gradient(from 90deg at 50% 50%, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)"></div>


                    <h2 className="mt-4 md:mt-0 font-medium font-effect-hero font-display mb-2 text-center text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] font-gradient">Features</h2>
                    <p className=" mx-auto mb-10 max-w-sm lg:max-w-[34rem] text-center text-xl md:text-[1.125rem] md:leading-[1.5] text-muted-foreground  mt-4 relative z-40">AI-powered, Connect to your workflow seamleasly and more</p>

                    <div className="grid grid-cols-3 gap-4 w-full">

                        


                        <Card className="p-6 border-stone-800 rounded-xl flex flex-col gap-1 row-span-2 col-span-2
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
                        </Card>


                        <Card className="p-6 border-stone-800 rounded-xl flex flex-col gap-1
                        pointer-events-none transition duration-300 group-hover:opacity-100 background:radial-gradient(
                            650px circle at 0px 0px,
                            rgba(200, 200, 200, 0.1),
                            transparent 50%
                            )">
                            <CardHeader>
                                <CardTitle>
                                    <span className="font-bold text-xl">Fast and Efficient</span>
                                    <Badge className="text-center">AI Powered</Badge>
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="flex m-1 text-center">
                                Our AI content writer produces high-quality content that is both
                                engaging and SEO-optimized.
                            </CardContent>
                        </Card>


                        <Card className="p-6 border-stone-800 rounded-xl flex flex-col gap-1
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
                        </Card>

                        <Card className="p-6 border-stone-800 rounded-xl flex flex-col gap-1 row-span-5 col-span-3
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
                        </Card>

                    </div>
                    
                </div>
            </section>
        </main>
    )
}