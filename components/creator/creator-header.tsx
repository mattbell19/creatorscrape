import { Button } from "@/components/ui/button"
import { CheckCircle, Heart, Share2 } from 'lucide-react'
import Image from "next/image"

export default function CreatorHeader() {
  return (
    <div className="bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
          <div className="relative h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40">
            <Image
              src="/placeholder.svg"
              alt="Creator profile"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
              <h1 className="text-3xl font-bold text-white">Patricia West</h1>
              <CheckCircle className="h-6 w-6 text-[#CEFF00]" />
            </div>
            <p className="mb-4 text-lg text-zinc-400">@patricia_west</p>
            <p className="mb-6 max-w-2xl text-white">
              Lifestyle blogger and photographer based in Nottingham, UK. Sharing my passion for sustainable living, travel, and mindfulness.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button className="bg-[#CEFF00] font-medium text-black hover:bg-[#CEFF00]/90">
                Follow
              </Button>
              <Button variant="outline" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
                <Heart className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" className="border-zinc-700 bg-transparent text-white hover:bg-zinc-800">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

