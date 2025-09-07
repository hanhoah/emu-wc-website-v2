import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  author: string
  tags: string[]
  featured: boolean
  content: string
}

export function getAllPosts(locale: string = 'en'): BlogPost[] {
  const localeDirectory = path.join(postsDirectory, locale)
  
  // Check if directory exists
  if (!fs.existsSync(localeDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(localeDirectory)
  const allPostsData = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(localeDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || '',
        excerpt: data.excerpt || '',
        date: data.date || '',
        category: data.category || '',
        image: data.image || '',
        author: data.author || '',
        tags: data.tags || [],
        featured: data.featured || false,
        content,
      } as BlogPost
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getFeaturedPosts(locale: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.featured)
}

export function getPostBySlug(slug: string, locale: string = 'en'): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, locale, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      category: data.category || '',
      image: data.image || '',
      author: data.author || '',
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string, locale: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string, locale: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => 
    post.tags.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function getAllCategories(locale: string = 'en'): string[] {
  const allPosts = getAllPosts(locale)
  const categories = Array.from(
    new Set(allPosts.map(post => post.category).filter(Boolean))
  )
  return categories.sort()
}

export function getAllTags(locale: string = 'en'): string[] {
  const allPosts = getAllPosts(locale)
  const tags = Array.from(
    new Set(allPosts.flatMap(post => post.tags))
  )
  return tags.sort()
}

// Search functionality
export function searchPosts(query: string, locale: string = 'en'): BlogPost[] {
  const allPosts = getAllPosts(locale)
  const searchTerm = query.toLowerCase()
  
  return allPosts.filter(post => {
    return (
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
      post.category.toLowerCase().includes(searchTerm)
    )
  })
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}