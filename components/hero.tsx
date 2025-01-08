"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, Mic, Search, Video } from 'lucide-react'

export default function Hero() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-4">
          <h1 className="text-5xl font-bold text-white md:text-6xl">Find</h1>
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#CEFF00]">
            <Search className="h-6 w-6 text-[#CEFF00]" />
          </div>
          <h1 className="text-5xl font-bold text-white md:text-6xl">Influencers</h1>
        </div>
        <h2 className="text-5xl font-bold text-white md:text-6xl">to collaborate with</h2>

        <div className="flex max-w-2xl items-center gap-2 rounded-lg bg-zinc-800/50 p-2">
          <Input
            type="text"
            placeholder="Search"
            className="border-none bg-transparent text-white placeholder:text-zinc-500"
          />
          <Button variant="ghost" size="icon" className="text-[#CEFF00]">
            <Mic className="h-5 w-5" />
          </Button>
          <Button size="icon" className="bg-[#CEFF00] hover:bg-[#CEFF00]/90">
            <Search className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-end">
          <Button className="group bg-[#CEFF00] px-6 py-6 text-lg font-semibold text-black hover:bg-[#CEFF00]/90">
            <Video className="mr-3 h-6 w-6" />
            See how it&apos;s done
            <ArrowUpRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

