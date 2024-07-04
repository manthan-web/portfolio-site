"use client"
import { Bot } from 'lucide-react'
import React, { useState } from 'react'
import AIChatBox from './AIChatBox'

const AIChatButton = () => {


  const [chatboxOpen, setChatBoxOpen] = useState(false)

  return (
    <>
    <button onClick={() => setChatBoxOpen(true)}>
        <Bot size={24}  />
    </button>
    <AIChatBox open={chatboxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  )
}

export default AIChatButton