"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, Paperclip, Smile } from 'lucide-react'
import Image from "next/image"

const messages = [
  { id: 1, sender: "Tom Green", content: "Hey, are you available for a collaboration next week?", time: "10:30 AM", isMine: false },
  { id: 2, sender: "You", content: "Hi Tom! Yes, I'm available. What do you have in mind?", time: "10:35 AM", isMine: true },
  { id: 3, sender: "Tom Green", content: "Great! I'm thinking about a joint Instagram live session on sustainable fashion. What do you think?", time: "10:40 AM", isMine: false },
  { id: 4, sender: "You", content: "That sounds fantastic! I'd love to collaborate on that topic. Do you have a specific date in mind?", time: "10:45 AM", isMine: true },
  // Add more messages as needed
]

export default function MessagesContent() {
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      <div className="border-b border-zinc-800 p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg"
              alt="Tom Green"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-white">Tom Green</h2>
            <p className="text-xs text-zinc-400">Online</p>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.isMine ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`rounded-lg p-3 ${message.isMine ? 'bg-[#CEFF00] text-black' : 'bg-zinc-800 text-white'}`}>
              <p>{message.content}</p>
              <p className="mt-1 text-right text-xs opacity-70">{message.time}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="border-t border-zinc-800 p-4">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
          />
          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
            <Smile className="h-5 w-5" />
          </Button>
          <Button onClick={handleSendMessage} className="bg-[#CEFF00] text-black hover:bg-[#CEFF00]/90">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

