import { MetadataRoute } from 'next'
import { generateSlug, getProducts } from '@/utils'
import { NEXT_PUBLIC_BASE_URL } from '@/constants'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseUrl = NEXT_PUBLIC_BASE_URL

    // Rutas estáticas
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/productos`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/recetas`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contacto`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/sumate`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/politica-de-privacidad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terminos-y-condiciones`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]

    // Rutas dinámicas de productos
    const products = await getProducts()
    const productRoutes: MetadataRoute.Sitemap = products.map(product => ({
        url: `${baseUrl}/productos/${generateSlug(product)}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...staticRoutes, ...productRoutes]
}
