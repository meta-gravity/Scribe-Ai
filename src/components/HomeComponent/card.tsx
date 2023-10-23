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
        <MaxWidthWrapper>
            <div className='space-x-10 flex'>
                <div className="m-12 p-6 flex">
                    <Card className="flex-col space-y-2 flex p-6 m-2 justify-center">
                        <CardHeader className="flex text-center">
                            <CardTitle className="text-center justify-center">
                                Quality Content 
                                <Badge className="text-center">AI Powered</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex m-1 text-center">
                            Our AI content writer produces high-quality content that is both
                            engaging and SEO-optimized.
                        </CardContent>
                    </Card>
                    <Card className="flex-1 flex-col space-y-2 flex p-6 m-2 justify-center">
                        <CardHeader className="flex text-center">
                            <CardTitle className="text-center justify-center">
                                Fast and Efficient 
                                <Badge>AI Powered</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex m-1 text-center">
                            Generate content quickly and efficiently, saving you time and
                            resources.
                        </CardContent>
                    </Card>
                    <Card className="flex-col space-y-2 flex p-6 m-2 justify-center">
                        <CardHeader>
                            <CardTitle>
                                Customizable Content 
                                <Badge>AI Powered</Badge>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex m-1 text-center">
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