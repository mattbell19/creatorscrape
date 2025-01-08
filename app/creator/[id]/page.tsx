import Header from "@/components/header"
import CreatorHeader from "@/components/creator/creator-header"
import CreatorStats from "@/components/creator/creator-stats"
import CreatorContent from "@/components/creator/creator-content"
import CreatorPricing from "@/components/creator/creator-pricing"

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <CreatorHeader />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CreatorStats />
            <CreatorContent />
          </div>
          <div>
            <CreatorPricing />
          </div>
        </div>
      </div>
    </main>
  )
}

