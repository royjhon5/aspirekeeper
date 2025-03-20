import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://aspirekeeper.com',
      lastModified: new Date(),
    },
  ]
}