import Image from 'next/image'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from "lucide-react"
import { Button, buttonVariants } from '@/components/ui/button'
// import { loglib } from "@loglib/tracker";
import Cookiesbtn  from "@/components/cookies"
import { DashImage } from '@/components/DarshboardImage'
// import Navbar from '@/components/Navbar'
import Card from '@/components/HomeComponent/card'
// import { useScroll } from "framer-motion"
// import { useRef } from "react"

export const Home = () => {
  // const targetRef = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  // });

  return (
    <
      // main 
    // ref={targetRef}
    >
      <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
        <div className='mx-auto mb-4 dark:border-[#8f67fe] dark:bg-black hover:shadow-lg  hover:shadow-purple-500/60 dark:hover:shadow-purple-500/10 shadow-blur 
        flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-purple-400 bg-white px-7 py-2 
        shadow-md backdrop-blur transition-all hover:border-primary ease-in-out hover:bg-white/50 cursor-pointer'>
          <p className='font-semibold text-sm text-gray-700 dark:text-white'>
            <Link href="https://x.com/Metagravity0/status/1708203253173727691?s=20">
              <span className='hover:text-primary ease-in-out delay-100 duration-200'>Scribe</span> is still under development 🏗️
            </Link>
          </p>
        </div>
        <h1 className='max-w-4xl font-bold text-5xl md:text-6xl lg:text-7xl'>
            Create Engaging
            <span className='text-primary '> Content </span>
            in Seconds
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg dark:text-gray-400">
        {/* Scribe AI is your solution. Our cutting-edge AI technology is designed to inspire, guide, and supercharge your writing<br/>  */}
        Say goodbye to writer&apos;s block and hello to limitless🚀.
        </p>

          {/* <div 
            aria-hidden="true" 
            className='pointer-events-none absolute inset-x -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div style={{
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} className='relative left-[calc(50% -11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1857rem]' 
            />
          </div> */}

        <Link className={buttonVariants({
          className: "mt-4 bg-gradient-to-tl rgb(129, 93, 231) via-purple-600 to-violet-700 hover:rounded-lg ease-in-out delay-150 duration-300 transition-property: all right-4",
          size: 'lg',
        }
        )} href="/dashboard" target='_black'>
          Join waitlist <ArrowRight className='ml-5 h-5 w-5'/>
        </Link>

      
      <DashImage />


      <Card />


      </MaxWidthWrapper>

      {/* values only */}
        


      {/* FEATURES */}
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-x-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-gray-900 text-4xl sm:text-5xl'>Create blogs and newsletter insatantly</h2>
            <p className='mt-4 text-lg text-gray-600'>
              creating blog post has never been easier and fun than with newsly
            </p>
          </div>
        </div>

        {/* <>
        <Button onClick={() => loglib.setConsent("granted")}>Accept</Button>
      </> */}
      <Cookiesbtn />

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 1</span>
              <span className='text-lg font-semibold'>Sign up for an account</span>
              <span className='mt-2 text-zinc-500'>Either starting with a free account or choose our fantastic {''}
                <Link href="/pricing" className='text-blue-700 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 2</span>
              <span className='text-lg font-semibold'>You can upload a refrence newsletter or blog post</span>
              <span className='mt-2 text-zinc-500'>we&apos;ll anaylize your refrence blog and get it ready for you to generate creative post</span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 3</span>
              <span className='text-lg font-semibold'>Start generating</span>
              <span className='mt-2 text-zinc-500'>It&apos;s that simple. Try {''} <Link href='/' className='font-medium hover:text-blue-700 hover:underline underline-offset-2'>Newsly</Link> {' '} today -
              it really take&apos;s less than a minute.
              </span>
            </div>
          </li>
        </ol>

       
      </div>
    </
    // main
    >
  )
}

export default Home;
