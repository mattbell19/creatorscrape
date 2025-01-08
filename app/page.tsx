import Header from "@/components/header"
import Hero from "@/components/hero"
import InfluencerGrid from "@/components/influencer-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <InfluencerGrid />
    </main>
  )
}

