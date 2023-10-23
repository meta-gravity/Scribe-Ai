import Image from 'next/image'
import { motion } from "framer-motion"
// import dash from '../../public/dash.png'
import da from '../../public/da.png'

export function DashImage() {
  return (
    <div className='mx-auto max-w-6xl px-6 lg:px-8'>
      <div className='mt-16 flow-root sm:mt-24 p-2'>
        <Image 
          src={da} 
          alt="me in this working" 
          quality={100}
          loading='lazy'
          className='border-2 rounded-4xl'
        />
      </div>
    </div>
  )
};