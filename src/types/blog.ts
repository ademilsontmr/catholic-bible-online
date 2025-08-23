export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  image?: string
  readTime?: string
  author: string
  date: string
  publishedAt: string
  content: string
}

export type BlogData = BlogPost[] 