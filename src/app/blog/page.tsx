import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import SearchBar from '@/components/blog/search-bar'
import PageHero from '@/components/ui/page-hero'
import { getAllPosts, getFeaturedPosts, getAllCategories, getPostsByCategory, formatDate } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPageProps {
  searchParams: { category?: string }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  
  // Filter posts by category if provided
  const filteredPosts = searchParams.category 
    ? getPostsByCategory(searchParams.category)
    : allPosts
  
  const featuredPosts = searchParams.category 
    ? filteredPosts.filter(post => post.featured)
    : getFeaturedPosts()
    
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      <PageHero 
        title="EMU WC Blog"
        subtitle="Expert insights, product updates, and smart bathroom solutions"
      />

      {/* Search Bar Section */}
      <section className="bg-gray-50 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Category Filter Info */}
            {searchParams.category && (
              <div className="mb-8 p-4 bg-[#3f86c2]/5 border border-[#3f86c2]/20 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Filtered by: {searchParams.category}
                    </h2>
                    <p className="text-gray-700 text-sm">
                      Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} in this category
                    </p>
                  </div>
                  <Link 
                    href="/blog"
                    className="text-[#3f86c2] hover:text-[#2a6b94] text-sm font-medium underline"
                  >
                    Clear filter
                  </Link>
                </div>
              </div>
            )}
            
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {searchParams.category ? `Featured in ${searchParams.category}` : 'Featured Articles'}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                        <div className="aspect-video relative bg-gray-200">
                          <Image 
                            src={post.image || '/assets/blog/placeholder.jpg'}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-[#3f86c2] text-white text-xs font-semibold px-3 py-1 rounded-full">
                              Featured
                            </span>
                          </div>
                        </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <time>{formatDate(post.date)}</time>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#3f86c2] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center text-[#3f86c2] font-medium hover:underline">
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </article>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {searchParams.category 
                  ? `Latest in ${searchParams.category}` 
                  : 'Latest Articles'
                }
              </h2>
              <div className="space-y-12">
                {(regularPosts.length > 0 ? regularPosts : filteredPosts).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block mb-6">
                    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                      <div className="md:flex">
                        <div className="md:w-1/3 aspect-video md:aspect-square relative bg-gray-200">
                          <Image 
                            src={post.image || '/assets/blog/placeholder.jpg'}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span className="bg-gray-100 px-2 py-1 rounded text-xs font-medium">
                            {post.category}
                          </span>
                          <time>{formatDate(post.date)}</time>
                          <span className="text-gray-400">•</span>
                          <span>{post.author}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#3f86c2] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.tags.slice(0, 3).map((tag) => (
                              <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <span className="inline-flex items-center text-[#3f86c2] font-medium hover:underline">
                            Read more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* No Posts Message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m0 0V9a2 2 0 00-2-2H9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-600 mb-2">
                    {searchParams.category 
                      ? `No posts in "${searchParams.category}" category`
                      : 'No blog posts yet'
                    }
                  </h3>
                  <p className="text-gray-500">
                    {searchParams.category 
                      ? 'Try browsing other categories or view all posts.'
                      : 'Check back soon for expert insights and updates!'
                    }
                  </p>
                  {searchParams.category && (
                    <Link 
                      href="/blog"
                      className="inline-block mt-4 text-[#3f86c2] hover:underline font-medium"
                    >
                      View all posts
                    </Link>
                  )}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              
              {/* Categories */}
              {categories.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const categoryPosts = allPosts.filter(post => post.category === category)
                      const isActive = searchParams.category === category
                      return (
                        <Link 
                          key={category}
                          href={`/blog?category=${encodeURIComponent(category)}`}
                          className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                            isActive 
                              ? 'bg-[#3f86c2] text-white' 
                              : 'hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <span>{category}</span>
                          <span className={`text-sm px-2 py-1 rounded ${
                            isActive 
                              ? 'bg-white/20 text-white' 
                              : 'bg-gray-100 text-gray-500'
                          }`}>
                            {categoryPosts.length}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Recent Posts */}
              {allPosts.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {allPosts.slice(0, 5).map((post) => (
                      <div key={post.slug} className="flex gap-3">
                        <div className="w-16 h-16 relative bg-gray-200 rounded-lg flex-shrink-0">
                          <Image 
                            src={post.image || '/assets/blog/placeholder.jpg'}
                            alt={post.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            <Link href={`/blog/${post.slug}`} className="hover:text-[#3f86c2] transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs text-gray-500">
                            {formatDate(post.date)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Newsletter Signup */}
              <div className="bg-[#3f86c2] rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-white/70 text-sm mb-4">
                  Get the latest insights on smart bathroom technology delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <button className="w-full bg-white text-[#3f86c2] font-medium py-2 px-4 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}