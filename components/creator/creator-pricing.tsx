import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'

export default function CreatorPricing() {
  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white">Collaboration Pricing</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Instagram Post</span>
            <span className="font-semibold text-white">$500</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Instagram Story</span>
            <span className="font-semibold text-white">$300</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">Instagram Reel</span>
            <span className="font-semibold text-white">$800</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-zinc-400">YouTube Video</span>
            <span className="font-semibold text-white">$1500</span>
          </div>
        </div>
        <div className="mb-6 space-y-2">
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#CEFF00]" />
            <span className="text-white">Professional content creation</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#CEFF00]" />
            <span className="text-white">24-hour turnaround time</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#CEFF00]" />
            <span className="text-white">One round of revisions</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-[#CEFF00]" />
            <span className="text-white">Usage rights for 30 days</span>
          </div>
        </div>
        <Button className="w-full bg-[#CEFF00] font-medium text-black hover:bg-[#CEFF00]/90">
          Contact for Collaboration
        </Button>
      </CardContent>
    </Card>
  )
}

