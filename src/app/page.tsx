import Image from 'next/image'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from "lucide-react"
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className='mb-12 mt-24 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 cursor-pointer'>
        <p className='font-semibold text-sm text-gray-700'>
          Newsly is still in development 🏗️
        </p>
      </div>
      <h1 className='max-w-4xl text-bold text-5xl md:text-6xl lg:text-7xl'>
          Write your 
          <span className='text-blue-600'> Newsletter </span>
          in seconds
      </h1>
      <p className="mt-5 max-w-prose text-zinc-300 sm:text-lg">
        Newsly enables you to write blogs and newsletter in any style you want just by asking.
      </p>

      <Link className={buttonVariants({
        className: "mt-5",
        size: 'lg',
      }
      )} href="/dashboard" target='_black'>
        Get started <ArrowRight className='ml-5 h-5 w-5'/>
      </Link>
    </MaxWidthWrapper>

    {/* values only */}
    <div>
      
    </div>

    </>
  )
}
