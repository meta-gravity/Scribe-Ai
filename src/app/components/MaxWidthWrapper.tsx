import { ReactNode } from "react"
import { cn } from "../lib/utils"

const MaxWidthWrapper = ({
    className,
    children
}: {
    className?: string
    children: ReactNode
}) => {
    return (
        <div className={cn("mx-auto max-w-screen-lg px-2.5 w-full", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper