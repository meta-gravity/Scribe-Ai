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
//   import { render } from "react-dom";
  import React, { useState, useEffect, useRef } from "react";
  

export default function Cards() {
    return (
        <MaxWidthWrapper>
            <div className='space-x-10 flex items-center justify-center '>
                <div className="mb-12 mt-12 max-w-xl flex">
                <Card className="flex-1 p-6">
                    <CardHeader>
                        <CardTitle>
                            Quality Content 
                            {/* <Badge>AI Powered</Badge> */}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        Our AI content writer produces high-quality content that is both
                        engaging and SEO-optimized.
                    </CardContent>
                </Card>
                <Card className="flex-1 p-6">
                    <CardHeader>
                        <CardTitle>
                            Fast and Efficient 
                            {/* <Badge>AI Powered</Badge> */}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        Generate content quickly and efficiently, saving you time and
                        resources.
                    </CardContent>
                </Card>
                <Card className="flex-2 p-6">
                     <CardHeader>
                        <CardTitle>
                            Customizable Content 
                            {/* <Badge>AI Powered</Badge> */}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        Customize the output to match your specific needs. Whether you need
                        blog posts, social media updates, or product descriptions, our AI can
                        handle it.
                    </CardContent>
                </Card>
                </div>

               
               

            




            </div>
        </MaxWidthWrapper>
    )
}