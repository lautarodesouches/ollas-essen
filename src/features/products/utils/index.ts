import { generateSlug } from './helpers'
import { Product } from '../types'
import path from 'path'
import fs from 'fs/promises'

export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(process.cwd(), 'src', 'data', 'products.json')
    const fileContent = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContent)
    return data
}

export async function getProductBySlug(
    slug: string
): Promise<Product | undefined> {
    const products = await getProducts()
    const product = products.find(p => {
        return generateSlug(p) === slug
    })
    return product
}

export async function getLines(): Promise<string[]> {
    const products = await getProducts()
    const lines = Array.from(new Set(products.map(p => p.linea)))
    return lines
}

export async function getServings(): Promise<string[]> {
    const products = await getProducts()
    const servings = Array.from(
        new Set(
            products
                .map(p => p.comensales)
                .filter((v): v is number => v != null)
        )
    )
        .sort((a, b) => a - b)
        .map(String)
    return servings
}

export async function getRandomProducts(
    limit: number = 10
): Promise<Product[]> {
    const products = await getProducts()
    return products.sort(() => Math.random() - 0.5).slice(0, limit)
}

export { generateSlug }
export { capitalize } from './helpers'
