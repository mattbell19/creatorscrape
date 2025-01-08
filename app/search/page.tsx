import SearchBar from "@/components/search/search-bar"
import SearchResults from "@/components/search/search-results"
import SearchFilters from "@/components/search/search-filters"

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="border-b border-zinc-800 bg-zinc-900/50 py-4">
        <div className="mx-auto max-w-7xl px-4">
          <SearchBar />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-8">
          <SearchFilters />
          <SearchResults />
        </div>
      </div>
    </main>
  )
}

