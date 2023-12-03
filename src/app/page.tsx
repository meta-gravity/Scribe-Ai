import Image from 'next/image'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight, Wand2Icon } from "lucide-react"
import { Button, buttonVariants } from '@/components/ui/button'
// import { loglib } from "@loglib/tracker";
import Cookiesbtn  from "@/components/cookies"
import { DashImage } from '@/components/DarshboardImage'
// import Navbar from '@/components/Navbar'
import Card from '@/components/HomeComponent/card'
import { Input } from '@/components/ui/input'
import Trusted from '@/components/HomeComponent/Trusted'
import Footer from '@/components/footer'
import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/components/ui/use-toast'
import { ButtonToast1 } from '@/components/ButtonToastWait'

// import { BentoDemo } from '@/components/magicui/bento-grid'
// import { useScroll } from "framer-motion"
// import { useRef } from "react"

export const Home = () => {
  // const targetRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  return (
    <
    // ref={targetRef}
    >
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
          <div className='
          mx-auto mb-6 dark:bg-black dark:border-purple-900/30 hover:shadow-xl 
          hover:shadow-purple-500/20 dark:hover:shadow-purple-400/10 border-black/10 shadow-blur 
          flex max-w-fit items-center justify-center space-x-2
          rounded-full border bg-white px-8 py-2 font-medium italic xl:mx-0 
          shadow-md backdrop-blur transition-all hover:border-primary ease-in-out
          hover:bg-white/50 cursor-pointer'>
            <p className='font-medium text-xs dark:text-purple-200'>
              <Link href="https://x.com/Metagravity0/status/1708203253173727691?s=20">
                <span className='hover:text-primary ease-in-out delay-100 duration-200'>Scribe</span> is still under development 🏗️→
              </Link>
            </p>
            
          </div>
          <h1 className='max-w-4xl font-bold text-5xl sm:text-7xl md:text-6xl lg:text-7xl'>
              Create Engaging
              <span className='text-highlight-purple text-semibold'> Content </span>
              <br />
              in Seconds
          </h1>
          <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg dark:text-gray-400">
            Designed to inspire, guild and supercharge your content as an indvidual, marketer, designer or developer 🚀
          </p>


         

          <span className="kui-spotlight absolute right-[5px] top-2/4"></span>
          {/* <span className="kui-spotlight absolute right-[-250px] top-1/4 z-10"></span> */}

            {/* <div 
              aria-hidden="true" 
              className='pointer-events-none absolute inset-x -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
              <div className='relative 
              aspect-[1155/678]
              w-[36.125rem] 
              -translate-x-1/2 rotate-[30deg] 
              bg-gradient-to-tr from-[#cc5084] to-[#9089fc] 
              opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1857rem]' />
            </div> */}
            <div className='flex mt-8 items-center justify-center'>
              {/* <div className="left-0 top-0 absolute bg-gradient-to-b from-violet-950 to-indigo-900 rounded-lg border border-white border-opacity-50"></div> */}
              <Button className="bg-gradient-to-b from-violet-950 to-indigo-900 rounded-lg border border-white border-opacity-50 space-x-3">
               
               <Wand2Icon className='h-3 w-3'/> Join Waitlist
              </Button>

            </div>

        
          <DashImage />

          <Card />

          {/* <Trusted /> */}

          {/* <ButtonToast1 /> */}


          {/* <BentoDemo /> */}
      </MaxWidthWrapper>

      {/* values only */}
        
      <span className="kui-spotlight absolute center"></span>

      <Footer />


    </>
  )
}

export default Home;
