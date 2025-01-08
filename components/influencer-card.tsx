import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Bookmark, CheckCircle, Instagram, Mail, Twitter, Youtube } from 'lucide-react'
import Image from "next/image"

interface InfluencerCardProps {
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
  youtube: Youtube,
  twitter: Twitter,
  instagram: Instagram,
}

export default function InfluencerCard({ influencer }: InfluencerCardProps) {
  return (
    <Card className="w-[300px] shrink-0 overflow-hidden bg-zinc-900">
      <CardHeader className="p-0">
        <div className="aspect-[3/2] w-full bg-zinc-800">
          <Image src={influencer.image} alt={influencer.name} width={300} height={200} className="h-full w-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-white">{influencer.name}</span>
            {influencer.verified && <CheckCircle className="h-4 w-4 text-[#CEFF00]" />}
          </div>
          <span className="text-white">{influencer.followers}</span>
        </div>
        <p className="mb-6 text-sm text-zinc-400">{influencer.location}</p>
        <div className="mb-6 flex items-center gap-3">
          {influencer.socials.map((social) => {
            const Icon = socialIcons[social as keyof typeof socialIcons]
            return Icon ? <Icon key={social} className="h-4 w-4 text-white" /> : null
          })}
          <Badge variant="secondary" className="ml-auto bg-zinc-800 text-white hover:bg-zinc-800">
            {influencer.category}
          </Badge>
        </div>
        <div className="border-t border-zinc-800 pt-6">
          <div className="mb-6">
            <p className="text-xs text-zinc-400">Advertising Price</p>
            <p className="text-2xl font-bold text-white">{influencer.price}</p>
          </div>
          <div className="flex items-center gap-4">
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
        </div>
      </CardContent>
    </Card>
  )
}

