"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import SearchResultCard from "./search-result-card"

const results = [
  {
    id: "1",
    name: "Patricia West",
    verified: true,
    location: "Nottingham, UK",
    followers: "23k",
    category: "Lifestyle",
    price: "$900",
    socials: ["instagram", "youtube", "twitter"],
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Tom Green",
    verified: true,
    location: "Nottingham, UK",
    followers: "10k",
    category: "Sport",
    price: "$250",
    socials: ["instagram", "youtube", "tiktok"],
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Glenda Hayes",
    verified: true,
    location: "Nottingham, UK",
    followers: "120k",
    category: "Lifestyle",
    price: "$1800",
    socials: ["instagram", "tiktok"],
    image: "/placeholder.svg",
  },
]

export default function SearchResults() {
  return (
    <div className="flex-1">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Influencers</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">Sort by:</span>
          <Select defaultValue="popular">
            <SelectTrigger className="h-8 w-[120px] border-none bg-transparent text-white">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="recent">Recent</SelectItem>
              <SelectItem value="price-low">Price: Low</SelectItem>
              <SelectItem value="price-high">Price: High</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <SearchResultCard key={result.id} influencer={result} />
        ))}
      </div>
    </div>
  )
}

