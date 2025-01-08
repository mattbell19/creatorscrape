import { Button } from "@/components/ui/button"
import { Bell, Layers, MapPin, Settings } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-black px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center space-x-8">
          <Button variant="ghost" size="icon" className="text-white">
            <Layers className="h-6 w-6" />
          </Button>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#" className="border-b-2 border-[#CEFF00] px-1 py-1 text-[#CEFF00]">
              Home
            </Link>
            <Link href="#" className="px-1 py-1 text-white hover:text-[#CEFF00]">
              Search
            </Link>
            <Link href="#" className="px-1 py-1 text-white hover:text-[#CEFF00]">
              Messages
            </Link>
            <Link href="#" className="px-1 py-1 text-white hover:text-[#CEFF00]">
              Community
            </Link>
            <Link href="#" className="px-1 py-1 text-white hover:text-[#CEFF00]">
              Resources
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center text-white">
            <MapPin className="mr-2 h-4 w-4" />
            <span>London, UK</span>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-zinc-800">
              <Image src="/placeholder.svg" alt="Profile" width={32} height={32} />
            </div>
            <span className="text-white">Evelyn Munoz</span>
          </div>
        </div>
      </div>
    </header>
  )
}

