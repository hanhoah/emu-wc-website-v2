import Navigation from '@/components/layout/navigation'
import Footer from '@/components/layout/footer'
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog'
import { markdownToHtml } from '@/lib/markdown'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - EMU WC',
    }
  }

  return {
    title: `${post.title} - EMU WC Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Convert markdown to HTML
  const htmlContent = await markdownToHtml(post.content)

  // Get related posts (same category, excluding current post)
  const allPosts = getAllPosts()
  const relatedPosts = allPosts
    .filter(p => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#3889be]">Home</Link>
                <span>/</span>
                <Link href="/blog" className="hover:text-[#3889be]">Blog</Link>
                <span>/</span>
                <span className="text-gray-400">{post.title}</span>
              </div>
            </nav>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="bg-[#3889be] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
                <time>{formatDate(post.date)}</time>
                <span className="text-gray-400">•</span>
                <span>{post.author}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-12">
                <div className="aspect-video relative bg-gray-200 rounded-xl overflow-hidden">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12">
                  {/* Article Body */}
                  <div className="prose prose-lg max-w-none">
                    <div 
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  </div>

                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 self-start space-y-8">
                  
                  {/* Recent Posts */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Posts</h3>
                    <div className="space-y-8">
                      {allPosts.filter(p => p.slug !== post.slug).slice(0, 4).map((recentPost) => (
                        <Link key={recentPost.slug} href={`/blog/${recentPost.slug}`}>
                          <article className="group pb-8 border-b border-gray-200 last:border-b-0 last:pb-0">
                            {/* Title First */}
                            <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#3889be] transition-colors leading-tight mb-4">
                              {recentPost.title}
                            </h4>
                            
                            {/* Featured Image Below Title */}
                            <div className="aspect-video relative bg-gray-200 rounded-lg overflow-hidden mb-4">
                              <Image 
                                src={recentPost.image || '/assets/blog/placeholder.jpg'}
                                alt={recentPost.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-200"
                              />
                            </div>
                          </article>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-[#3889be] rounded-xl p-6 text-white">
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
                      <button className="w-full bg-white text-[#3889be] font-medium py-2 px-4 rounded-lg text-sm hover:bg-gray-100 transition-colors">
                        Subscribe
                      </button>
                    </div>
                  </div>

                  {/* Back to Blog */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <Link 
                      href="/blog"
                      className="inline-flex items-center text-[#3889be] font-medium hover:underline"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Blog
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <article key={relatedPost.slug} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative bg-gray-200">
                      <Image 
                        src={relatedPost.image || '/assets/blog/placeholder.jpg'}
                        alt={relatedPost.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(relatedPost.date)}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-[#3889be] transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center text-[#3889be] font-medium text-sm hover:underline"
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
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-[#3889be] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your Bathroom?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Discover our range of smart toilets and intelligent bathroom solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#3889be] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View Products
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#3889be] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}