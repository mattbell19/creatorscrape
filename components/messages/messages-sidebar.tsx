import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Plus } from 'lucide-react'
import Image from "next/image"

const conversations = [
  { id: 1, name: "Tom Green", lastMessage: "Hey, are you available for...", time: "2m ago", unread: 2 },
  { id: 2, name: "Sarah Johnson", lastMessage: "The campaign looks great!", time: "1h ago", unread: 0 },
  { id: 3, name: "Mike Williams", lastMessage: "Can we schedule a call?", time: "3h ago", unread: 1 },
  // Add more conversations as needed
]

export default function MessagesSidebar() {
  return (
    <div className="w-1/3 border-r border-zinc-800">
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Messages</h2>
          <Button size="icon" variant="ghost" className="text-zinc-400 hover:text-white">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <Input
            type="text"
            placeholder="Search messages"
            className="pl-10 bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-400"
          />
        </div>
      </div>
      <ScrollArea className="h-[calc(100vh-280px)]">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            className="flex items-center gap-3 border-b border-zinc-800 p-4 hover:bg-zinc-800 cursor-pointer"
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src="/placeholder.svg"
                alt={conversation.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white">{conversation.name}</h3>
                <span className="text-xs text-zinc-400">{conversation.time}</span>
              </div>
              <p className="text-sm text-zinc-400 truncate">{conversation.lastMessage}</p>
            </div>
            {conversation.unread > 0 && (
              <div className="h-5 w-5 rounded-full bg-[#CEFF00] text-center text-xs font-bold leading-5 text-black">
                {conversation.unread}
              </div>
            )}
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

