import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bookmark, CheckCircle, Instagram, Mail, TwitterIcon as TikTok, Twitter, Youtube } from 'lucide-react'
import Image from "next/image"

interface SearchResultCardProps {
  influencer: {
    name: string
    verified: boolean
    location: string
    followers: string
    category: string
    price: string
    socials: string[]
    image: string
  }
}

const socialIcons = {
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
  tiktok: TikTok,
}

export default function SearchResultCard({ influencer }: SearchResultCardProps) {
  return (
    <Card className="overflow-hidden bg-zinc-900">
      <div className="aspect-square w-full bg-zinc-800">
        <Image
          src={influencer.image}
          alt={influencer.name}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">{influencer.name}</span>
            {influencer.verified && <CheckCircle className="h-4 w-4 text-[#CEFF00]" />}
          </div>
          <span className="text-white">{influencer.followers}</span>
        </div>
        <p className="mb-4 text-sm text-zinc-400">{influencer.location}</p>
        <div className="mb-4 flex items-center gap-3">
          {influencer.socials.map((social) => {
            const Icon = socialIcons[social as keyof typeof socialIcons]
            return Icon ? <Icon key={social} className="h-4 w-4 text-white" /> : null
          })}
          <Badge variant="secondary" className="ml-auto bg-zinc-800 text-white hover:bg-zinc-800">
            {influencer.category}
          </Badge>
        </div>
        <div className="mb-4">
          <p className="text-xs text-zinc-400">Advertising Price</p>
          <p className="text-xl font-bold text-white">{influencer.price}</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-white">
            <Mail className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Bookmark className="h-5 w-5" />
          </Button>
          <Button className="flex-1 bg-[#CEFF00] font-medium text-black hover:bg-[#CEFF00]/90">
            Send message
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

