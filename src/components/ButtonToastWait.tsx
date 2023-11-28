// "use client"

// import { Link, ArrowRight } from "lucide-react"
// import { Button } from "./ui/button"
// import { toast, useToast } from "./ui/use-toast"

// export function ButtonToast1() {
//     const { toast } = useToast()
    
//     return (
//         <div>
//             <Button
//             //   className= "flex pr-4  bg-gradient-to-tlrgb(129, 93, 231) via-purple-600 to-violet-700 hover:rounded-lg ease-in-out delay-150 duration-300 transition-property:all "
//               variant="outline"
//                 onClick={() => {
//                 toast({
//                 title: "Uh oh! Something went wrong.",
//                 description: "There was a problem with your request.",
//                 })
//             }}
//             >

//               hello
//             </Button>
//         </div>
//     )
// }

"use client"
 
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
 
export function ButtonToast1() {
  const { toast } = useToast()
 
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
            description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}