import MaxWidthWrapper from "../MaxWidthWrapper"
import { Skeleton } from "../ui/skeleton"

export default function Page() {
  return (
    <MaxWidthWrapper className="py-16">
        <Skeleton className="w-full space-y-1">
            <div>
                <Skeleton className="w-full h-[24rem] object-cover rounded-sm"/>
            </div>
            <div className="space-y-2">
                <Skeleton>The Journey begins for Scribe ai</Skeleton>
                <Skeleton className="">Company News</Skeleton>

                <Skeleton className="h-4 w-[500px]" />
            </div>
        </Skeleton>
    </MaxWidthWrapper>
  )
}

