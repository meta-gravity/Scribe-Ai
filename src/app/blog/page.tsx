import { MetaIcon } from "@/components/Blog/MetagravityHoverCard"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { CardHeader, CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import Image from "next/image"

export default function Page() {
  return (
    <MaxWidthWrapper className="py-16">
        <Card className="w-full space-y-1">
            <CardHeader>
                <Image alt="Syndra - The Dark Sovereign" className="w-full h-[24rem] object-cover rounded-sm" src='/begins.jpeg' width='1024' height="1024"/>
            </CardHeader>
            <CardContent className="space-y-2">
                <CardTitle>The Journey begins for Scribe ai</CardTitle>
                <Badge className="">Company News</Badge>

                <CardDescription>
                 Wanted to code something and here it is.....
                 This project started as a simple idea - to create an AI that could help with writing tasks. Still making it better daily. This is filled with countless hours of coding, debugging, and testing. But the result was worth it. Scribe AI is now a reality, and it&aploss ready to assist you in your writing endeavors.
                </CardDescription>
                <p className="text-gray-400 dark:text-gray-600 text-sm"><MetaIcon />|<span className='text-[12px] text-gray-400 dark:text-gray-700'> 4th of December</span> </p>
            </CardContent>
        </Card>
    </MaxWidthWrapper>
  )
}

