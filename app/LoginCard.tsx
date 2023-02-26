import React from 'react'
import {signIn} from "next-auth/react"
import Logo from "../public/logo.png"
import {motion} from "framer-motion"
import { redirect } from 'next/dist/server/api-utils'
export default function LoginCard() {
  return (
    <motion.div className='p-[100px] bg-white rounded-md w-1/3 mx-auto text-black divide-y divide-blue-200' 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
         <h1 className='text-4xl font-bold bg-clip-text py-2 text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>LOGIN</h1>
        <div className='p-5'>

            <button onClick={()=>{signIn("google",{callbackUrl:"/Home"})}}  className='flex items-center justify-center w-full p-3 mt-5 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500'>
                <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 12H4'></path>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4l8 8-8 8'></path>
                </svg>
                <span>Sign in with Google</span>
            </button>
        </div>
    </motion.div>
  )
}
