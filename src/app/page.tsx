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
      <h1 className='max-w-4xl font-bold text-5xl md:text-6xl lg:text-7xl'>
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
      <div className='relative isolate'>
        <div aria-hidden="true" className='pointer-events-none absolute inset-x -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <div style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }} className='relative left-[calc(50% -11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50% - 30rem)] sm:w-[72.1857rem]' 
          />
        </div>

        <div>
          <div className='mx-auto max-w-6xl px-6 lg:px-8'>
            <div className='mt-16 flow-root sm:mt-24'>
              <div className='-m-2 rounded-lg p-2 ring-1 bg-grey-900/5 ring-inset ring-grey-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <Image />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
