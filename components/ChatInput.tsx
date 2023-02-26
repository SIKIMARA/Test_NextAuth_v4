"use client"
import React from 'react'
import {useSession } from "next-auth/react"
import { Configuration, OpenAIApi} from "openai"
import { motion } from 'framer-motion'
import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
function  ChatInput() {
    const {data:session} = useSession()
    const [message, setMessage] = React.useState('')
    const [response, setResponse] = React.useState('')
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        example(message)
        
    }
    async function example(message: string) {
        const api = new ChatGPTUnofficialProxyAPI({
            accessToken: process.env.OPENAI_ACCESSTOKEN!
          })
        
          const res = await api.sendMessage(message)

          setResponse(res.text)
        }
  return (
    <div>
    <div className='bg-gray-100 w-full p-3 rounded-lg '>
            <form className='flex  justify-between' onSubmit={sendMessage}>
                <input 
                type="text"
                placeholder='Type a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                className='bg-transparent w-[95%] focus:outline-none' 
                />
                <button  type='submit' className='bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-full text-xs text-white' >Send</button>
            </form>
            
        </div>
        {
            response ? (
                <motion.div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-3 rounded-lg mt-3'
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                <p className='text-sm text-white font-bold'>{response}</p>
        </motion.div>
            )
            :
            <div className='bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-3 rounded-lg mt-3'>
                <p className='text-sm text-white font-bold'>Hi {session?.user?.name}, how can i help you? </p>
        </div>

        }
       
    </div>
    
  )
}

export default ChatInput