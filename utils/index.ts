import { Product } from '@/interfaces'
import path from 'path'
import fs from 'fs/promises'

export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(process.cwd(), 'data', 'products.json')

    const fileContent = await fs.readFile(filePath, 'utf8')

    const data = JSON.parse(fileContent)

    return data
}

export async function getProduct(slug: string): Promise<Product | undefined> {
    const products = await getProducts()

    const product = products.find(p => {
        const generateSlug = `${p.linea}-${p.nombre}${
            p.medida ? `-${p.medida}` : ''
        }`
            .toLowerCase()
            .replace(/\s+/g, '-')
        return generateSlug === slug
    })

    return product
}

export async function getLines(): Promise<string[]> {
    const products = await getProducts()

    const lines = Array.from(new Set(products.map(p => p.linea)))

    return lines
}

export async function getRandomProducts(
    limit: number = 10
): Promise<Product[]> {
    const products = await getProducts()

    return products.sort(() => Math.random() - 0.5).slice(0, limit)
}
