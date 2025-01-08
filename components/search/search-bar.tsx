"use client"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Heart, MapPin, Search } from 'lucide-react'

export default function SearchBar() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
        <input
          type="text"
          placeholder="Lifestyle blogger based in UK"
          className="h-10 w-full rounded-md bg-zinc-900 pl-10 pr-4 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#CEFF00]"
        />
      </div>
      <Button className="h-10 bg-[#CEFF00] px-8 font-medium text-black hover:bg-[#CEFF00]/90">
        Find
      </Button>
      <Select defaultValue="nottingham">
        <SelectTrigger className="h-10 w-[180px] border-none bg-zinc-900 text-white">
          <MapPin className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Select location" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="nottingham">Nottingham, UK</SelectItem>
          <SelectItem value="london">London, UK</SelectItem>
          <SelectItem value="manchester">Manchester, UK</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="instagram">
        <SelectTrigger className="h-10 w-[180px] border-none bg-zinc-900 text-white">
          <SelectValue placeholder="Select platform" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="instagram">Instagram</SelectItem>
          <SelectItem value="tiktok">TikTok</SelectItem>
          <SelectItem value="youtube">YouTube</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="lifestyle">
        <SelectTrigger className="h-10 w-[180px] border-none bg-zinc-900 text-white">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lifestyle">Lifestyle</SelectItem>
          <SelectItem value="fashion">Fashion</SelectItem>
          <SelectItem value="sports">Sports</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" className="h-10 border-[#CEFF00] px-6 text-[#CEFF00] hover:bg-[#CEFF00] hover:text-black">
        <Heart className="mr-2 h-4 w-4" />
        Save search
      </Button>
    </div>
  )
}

