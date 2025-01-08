import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function CreatorContent() {
  return (
    <Tabs defaultValue="posts" className="mt-8">
      <TabsList className="grid w-full grid-cols-4 bg-zinc-900">
        <TabsTrigger value="posts" className="data-[state=active]:bg-[#CEFF00] data-[state=active]:text-black">Posts</TabsTrigger>
        <TabsTrigger value="reels" className="data-[state=active]:bg-[#CEFF00] data-[state=active]:text-black">Reels</TabsTrigger>
        <TabsTrigger value="stories" className="data-[state=active]:bg-[#CEFF00] data-[state=active]:text-black">Stories</TabsTrigger>
        <TabsTrigger value="about" className="data-[state=active]:bg-[#CEFF00] data-[state=active]:text-black">About</TabsTrigger>
      </TabsList>
      <TabsContent value="posts" className="mt-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src="/placeholder.svg"
                alt={`Post ${i + 1}`}
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="reels" className="mt-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="aspect-[9/16] overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src="/placeholder.svg"
                alt={`Reel ${i + 1}`}
                width={225}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="stories" className="mt-4">
        <div className="grid gap-4 sm:grid-cols-4 md:grid-cols-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="aspect-[9/16] overflow-hidden rounded-lg bg-zinc-800">
              <Image
                src="/placeholder.svg"
                alt={`Story ${i + 1}`}
                width={225}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="about" className="mt-4">
        <div className="rounded-lg bg-zinc-900 p-6 text-white">
          <h3 className="mb-4 text-xl font-semibold">About Patricia West</h3>
          <p className="mb-4">
            Patricia West is a lifestyle blogger and photographer based in Nottingham, UK. With a passion for sustainable living, travel, and mindfulness, Patricia shares her experiences and insights with her growing audience across multiple social media platforms.
          </p>
          <p>
            Her content focuses on eco-friendly lifestyle tips, breathtaking travel photography, and practical mindfulness exercises. Patricia's authentic approach and engaging personality have earned her a dedicated following and numerous brand collaborations in the lifestyle and travel industries.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}

