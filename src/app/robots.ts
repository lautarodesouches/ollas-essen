import { MetadataRoute } from 'next'
import { NEXT_PUBLIC_BASE_URL } from '@/src/lib/constants'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = NEXT_PUBLIC_BASE_URL || 'https://ollasessen.com.ar'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/link/'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    }
}
