import { Card } from "@/components/ui/card"
import InfluencerCard from "./influencer-card"
import ShowAllCard from "./show-all-card"

const influencers = [
  {
    id: "1",
    name: "Susan Adams",
    verified: true,
    location: "Barcelona, ESP",
    followers: "870k",
    category: "Comedy",
    price: "$5200",
    socials: ["youtube", "tiktok", "instagram"],
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Tamara Brown",
    verified: true,
    location: "Wellington, NZ",
    followers: "440k",
    category: "Lifestyle",
    price: "$2400",
    socials: ["instagram", "tiktok"],
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Jay Keller",
    verified: true,
    location: "New York, USA",
    followers: "315k",
    category: "Fashion",
    price: "$2150",
    socials: ["youtube", "twitter", "instagram"],
    image: "/placeholder.svg",
  },
]

export default function InfluencerGrid() {
  return (
    <div className="mx-auto max-w-7xl overflow-x-auto px-4 pb-12">
      <div className="flex gap-6">
        {influencers.map((influencer) => (
          <InfluencerCard key={influencer.id} influencer={influencer} />
        ))}
        <ShowAllCard count="13 150" />
      </div>
    </div>
  )
}

