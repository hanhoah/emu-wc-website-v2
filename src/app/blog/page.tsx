import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import SearchBar from '@/components/blog/search-bar'
import { getAllPosts, getFeaturedPosts, getAllCategories, formatDate } from '@/lib/blog'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPage() {
  const allPosts = getAllPosts()
  const featuredPosts = getFeaturedPosts()
  const categories = getAllCategories()
  const regularPosts = allPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#3889be] to-blue-600 text-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              EMU WC Blog
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Expert insights, product updates, and smart bathroom solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <SearchBar />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredPosts.map((post) => (
                    <article key={post.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="aspect-video relative bg-gray-200">
                        <Image 
                          src={post.image || '/assets/blog/placeholder.jpg'}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-[#3889be] text-white text-xs font-semibold px-3 py-1 rounded-full">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          <Link href={`/blog/${post.slug}`} className="hover:text-[#3889be] transition-colors">
                            {post.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-[#3889be] font-medium hover:underline"
                        >
                          Read more
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {(regularPosts.length > 0 ? regularPosts : allPosts).map((post) => (
                  <article key={post.slug} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          <Link href={`/blog/${post.slug}`} className="hover:text-[#3889be] transition-colors">
                            {post.title}
                          </Link>
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
                          <Link 
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center text-[#3889be] font-medium hover:underline"
                          >
                            Read more
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* No Posts Message */}
              {allPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m0 0V9a2 2 0 00-2-2H9" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-600 mb-2">No blog posts yet</h3>
                  <p className="text-gray-500">Check back soon for expert insights and updates!</p>
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
                      return (
                        <Link 
                          key={category}
                          href={`/blog?category=${encodeURIComponent(category)}`}
                          className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-gray-700">{category}</span>
                          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
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
                            <Link href={`/blog/${post.slug}`} className="hover:text-[#3889be] transition-colors">
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
              <div className="bg-gradient-to-r from-[#3889be] to-blue-600 rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get the latest insights on smart bathroom technology delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <button className="w-full bg-white text-[#3889be] font-medium py-2 px-4 rounded-lg text-sm hover:bg-gray-100 transition-colors">
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