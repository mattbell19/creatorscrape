import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Twitter, Youtube } from 'lucide-react'

export default function CreatorStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-zinc-900">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-zinc-400">Followers</p>
            <p className="text-2xl font-bold text-white">23.5K</p>
          </div>
          <Instagram className="h-8 w-8 text-[#E1306C]" />
        </CardContent>
      </Card>
      <Card className="bg-zinc-900">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-zinc-400">Subscribers</p>
            <p className="text-2xl font-bold text-white">12.8K</p>
          </div>
          <Youtube className="h-8 w-8 text-[#FF0000]" />
        </CardContent>
      </Card>
      <Card className="bg-zinc-900">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-zinc-400">Followers</p>
            <p className="text-2xl font-bold text-white">45.2K</p>
          </div>
          <Twitter className="h-8 w-8 text-[#1DA1F2]" />
        </CardContent>
      </Card>
      <Card className="bg-zinc-900">
        <CardContent className="flex items-center justify-between p-4">
          <div>
            <p className="text-sm text-zinc-400">Engagement</p>
            <p className="text-2xl font-bold text-white">3.2%</p>
          </div>
          <div className="h-8 w-8 rounded-full bg-[#CEFF00]" />
        </CardContent>
      </Card>
    </div>
  )
}

