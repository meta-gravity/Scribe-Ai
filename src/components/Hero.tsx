// "use client"

// import Image from 'next/image'
// import MaxWidthWrapper from '../components/MaxWidthWrapper'
// import Link from 'next/link'
// import { ArrowRight } from "lucide-react"
// import { Button, buttonVariants } from '@/components/ui/button'
// // import { loglib } from "@loglib/tracker";
// import Cookiesbtn  from "@/components/cookies"
// import { DashImage } from '@/components/DarshboardImage'
// import { useScroll } from "framer-motion"
// import { useRef } from "react"

// export const Hero = () => {
//   const targetRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   return (
//     <main ref={targetRef}>
//       <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
//         <div className='mx-auto mb-4 dark:border-gray-600 dark:bg-black hover:shadow-lg hover:shadow-purple-500/20 shadow-blur 
//         flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 
//         shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 cursor-pointer'>
//           <p className='font-semibold text-sm text-gray-700 dark:text-white'>
//             <Link href="https://x.com/Metagravity0/status/1708203253173727691?s=20">
//               <span className='hover:text-primary ease-in-out delay-150 duration-300'>Scribe</span> is still under development 🏗️
//             </Link>
//           </p>
//         </div>
//         <h1 className='max-w-4xl font-bold text-5xl md:text-6xl lg:text-7xl'>
//             Create Engaging
//             <span className='text-primary'> Content </span>
//             in Seconds
//         </h1>
//         <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg dark:text-gray-400">
//         Scribe AI is your solution. Our cutting-edge AI technology is designed to inspire, guide, and supercharge your writing<br/> Say goodbye to writer&apos;s block and hello to limitless🚀.
//         </p>

//         <Link className={buttonVariants({
//           className: "mt-4 bg-gradient-to-tl rgb(129, 93, 231) via-purple-600 to-violet-700 hover:rounded-lg ease-in-out delay-150 duration-300 transition-property: all right-4",
//           size: 'lg',
//         }
//         )} href="/dashboard" target='_black'>
//           Get started <ArrowRight className='ml-5 h-5 w-5'/>
//         </Link>

      
//       </MaxWidthWrapper>
//       <DashImage />

//       {/* values only */}
//       <div>
//         <div className='relative isolate'>
//           <div 
//           aria-hidden="true" 
//           className='pointer-events-none absolute inset-x -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
//             <div style={{
//               clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
//             }} className='relative left-[calc(50% -11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1857rem]' 
//             />
//           </div>

          

//           {/* preview */}
//           {/* <div className='mx-auto max-w-6xl px-6 lg:px-8'>
//             <div className='mt-16 flow-root sm:mt-24'>
//               <div className='-m-2 rounded-lg p-2 ring-1 bg-gray-900/5 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'> */}
//                 {/* <img
//                   src='/dashboard.png'
//                   alt='The preview of the product'
//                   width={1282}
//                   height={834}
//                   quality={100}
//                   // className='rounded-md p-2 bg-purple-600 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
//                 <img /> */}
//               {/* </div>
//             </div>
//           </div> */}

//           {/* card */}
            
//           <div className='space-x-10 flex items-center justify-center '>

//             <div className="mb-12 mt-12 max-w-xl flex">
//               <div className="px-2 ">
//                 <div className="text-center -m-2 p-2 border-gradient bg-gray-900/5 ring-inset 
//                 lg:-m-4 lg:rounded-2xl lg:p-4  ">
//                   Hello

//                   <p className='text-left left-1 '>Thniwbwiwgiwwigwg <br/>is is a text aof just nomartl things let see if it wrks...</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-12 mt-12 max-w-xl flex">
//               <div className="px-2 ">
//                 <div className="text-center -m-2 p-2 border-gradient bg-gray-900/5 ring-inset 
//                 lg:-m-4 lg:rounded-2xl lg:p-4  ">
//                   Hello

//                   <p className='text-left left-1 '>Thniwbwiwgiwwigwg <br/>is is a text aof just nomartl things let see if it wrks...</p>
//                 </div>
//               </div>
//             </div>

//             <div className="mb-12 mt-12 max-w-xl flex">
//               <div className="px-2 ">
//                 <div className="text-center -m-2 p-2 border-gradient bg-gray-900/5 ring-inset 
//                 lg:-m-4 lg:rounded-2xl lg:p-4  ">
//                   Hello

//                   <p className='text-left left-1 '>Thniwbwiwgiwwigwg <br/>is is a text aof just nomartl things let see if it wrks...</p>
//                 </div>
//               </div>
//             </div>

          
            
            
//           </div>

//           <div 
//           aria-hidden="true" 
//           className='pointer-events-none absolute inset-x -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
//             <div style={{
//               clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
//             }} className='relative left-[calc(50% -13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 36rem)] sm:w-[72.1857rem]' 
//             />
//           </div>
//         </div>
//       </div>


//       {/* FEATURES */}
//       <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
//         <div className='mb-12 px-6 lg:px-8'>
//           <div className='mx-auto max-x-2xl sm:text-center'>
//             <h2 className='mt-2 font-bold text-gray-900 text-4xl sm:text-5xl'>Create blogs and newsletter insatantly</h2>
//             <p className='mt-4 text-lg text-gray-600'>
//               creating blog post has never been easier and fun than with newsly
//             </p>
//           </div>
//         </div>

//         {/* <>
//         <Button onClick={() => loglib.setConsent("granted")}>Accept</Button>
//       </> */}
//       <Cookiesbtn />

//         {/* steps */}
//         <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
//           <li className='md:flex-1'>
//             <div className='flex flex-col space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
//               <span className='text-sm font-medium text-blue-600'>Step 1</span>
//               <span className='text-lg font-semibold'>Sign up for an account</span>
//               <span className='mt-2 text-zinc-500'>Either starting with a free account or choose our fantastic {''}
//                 <Link href="/pricing" className='text-blue-700 underline underline-offset-2'>
//                   pro plan
//                 </Link>
//                 .
//               </span>
//             </div>
//           </li>
//           <li className='md:flex-1'>
//             <div className='flex flex-col space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
//               <span className='text-sm font-medium text-blue-600'>Step 2</span>
//               <span className='text-lg font-semibold'>You can upload a refrence newsletter or blog post</span>
//               <span className='mt-2 text-zinc-500'>we&apos;ll anaylize your refrence blog and get it ready for you to generate creative post</span>
//             </div>
//           </li>
//           <li className='md:flex-1'>
//             <div className='flex flex-col space-y-2 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
//               <span className='text-sm font-medium text-blue-600'>Step 3</span>
//               <span className='text-lg font-semibold'>Start generating</span>
//               <span className='mt-2 text-zinc-500'>It&apos;s that simple. Try {''} <Link href='/' className='font-medium hover:text-blue-700 hover:underline underline-offset-2'>Newsly</Link> {' '} today -
//               it really take&apos;s less than a minute.
//               </span>
//             </div>
//           </li>
//         </ol>

//         <div className='mx-auto max-w-6xl px-6 lg:px-8'>
//           <div className='mt-16 flow-root sm:mt-24'>
//             <div className='-m-2 rounded-lg p-2 ring-1 bg-gray-900/5 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
//               <Image 
//                 src='/dred.png'
//                 alt='The preview of the product'
//                 width={1500}
//                 height={400}
//                 quality={100}
//                 className='rounded-md p-2 bg-white sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
//                 />
//               </div>
//             </div>
//           </div>
//       </div>
//     </main>
//   )
// }

// export default Hero;
