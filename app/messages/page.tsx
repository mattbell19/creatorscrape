import Header from "@/components/header"
import MessagesSidebar from "@/components/messages/messages-sidebar"
import MessagesContent from "@/components/messages/messages-content"

export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex h-[calc(100vh-200px)] overflow-hidden rounded-lg bg-zinc-900">
          <MessagesSidebar />
          <MessagesContent />
        </div>
      </div>
    </main>
  )
}

