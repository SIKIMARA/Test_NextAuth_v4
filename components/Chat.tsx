"use client"
import React from 'react'
import ChatInput from './ChatInput'
import { motion } from 'framer-motion'

function Chat() {
  return (
    <motion.div className='bg-white p-[50px] rounded-lg flex flex-col'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
        <ChatInput />
        
    </motion.div>
  )
}


export default Chat