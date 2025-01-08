import { Card } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

interface ShowAllCardProps {
  count: string
}

export default function ShowAllCard({ count }: ShowAllCardProps) {
  return (
    <Card className="relative flex w-[300px] shrink-0 flex-col items-center justify-center gap-3 bg-[#8A6FFF] p-12">
      <ArrowRight className="h-6 w-6 text-white" />
      <h3 className="text-3xl font-bold text-white">Show All</h3>
      <p className="text-white/80">{count} bloggers</p>
      <div className="absolute bottom-6 right-6 h-10 w-10 rotate-45 bg-[#CEFF00]" />
    </Card>
  )
}

