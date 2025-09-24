'use client'

import { useState, useRef, useEffect } from 'react'
import { BlogPost } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'

interface SearchBarProps {
  locale?: string
}

const SearchBar = ({ locale = 'en' }: SearchBarProps) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([])
      setShowResults(false)
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}&locale=${locale}`)
      if (response.ok) {
        const data = await response.json()
        setResults(data.results)
        setShowResults(true)
      }
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    handleSearch(value)
  }

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          placeholder="Search articles..."
          className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3889be] focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#3889be]"></div>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.slice(0, 6).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                  onClick={() => setShowResults(false)}
                >
                  <div className="w-12 h-12 relative bg-gray-200 rounded-lg flex-shrink-0">
                    <Image 
                      src={post.image || '/assets/blog/placeholder.jpg'}
                      alt={post.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium text-gray-900 line-clamp-1 mb-1">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 line-clamp-2 mb-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#3889be] bg-[#3889be]/5 px-2 py-0.5 rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
              {results.length > 6 && (
                <div className="px-4 py-2 text-xs text-gray-500 border-t">
                  {results.length - 6} more results...
                </div>
              )}
            </div>
          ) : query.length >= 2 ? (
            <div className="px-4 py-8 text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-sm">No articles found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try different keywords</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default SearchBar