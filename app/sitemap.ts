import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://satyamkrjha.site'

  // Define your static routes here
  const routes = [
    '',
    '/projects',
    '/resume',
    '/blogs',
    '/contact',
    '/guestbook'
  ]

  const staticSitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Fetch dynamic blog routes
  let blogSitemap: MetadataRoute.Sitemap = []
  try {
    const blogDir = path.join(process.cwd(), 'content/blog')
    const files = fs.readdirSync(blogDir)
    
    blogSitemap = files
      .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
      .map((file) => {
        const slug = file.replace(/\.mdx?$/, '')
        return {
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(), // Ideally read the file stats or frontmatter date
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }
      })
  } catch (error) {
    console.error('Error generating blog sitemap:', error)
  }

  return [...staticSitemap, ...blogSitemap]
}
