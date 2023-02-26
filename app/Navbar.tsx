import React from 'react'
import{useSession,signIn, signOut } from "next-auth/react"
import labd from "../public/labd.png"
export default function 
() {
    const {data:session} = useSession()
  return (
    <div className='w-full flex justify-around items-center bg-white mb-5 h-[80px]'>
       
       <h1 className='text-4xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500'>LAB</h1>
        <div className='flex items-center'>
            {
                session ?
                (<div className='flex items-center space-x-6'>
                  <div className='flex items-center space-x-1'>
                    <img src={session.user?.image!} width={40} height={40} className='rounded-full'/>
                    <h1 className='text-sm font-bold'>Welcome ,{session.user?.name}</h1>
                  </div>
                    
                     <button onClick={()=>{signOut({callbackUrl:"/"})}} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 px-6 rounded-md ml-5'>Logout</button>
                </div>
               )
                :
                (<button onClick={()=>{signIn("google",{callbackUrl:"/Home"})}} className='bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 px-6 rounded-md ml-5'>Login</button>)
            }
            
            
        </div>
    </div>
  )
}
