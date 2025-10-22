import { Product } from '@/interfaces'
import path from 'path'
import fs from 'fs/promises'

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export function generateSlug(p: Product) {
    return `${p.linea}-${p.nombre}${p.medida ? `-${p.medida}` : ''}`
        .toLowerCase()
        .normalize('NFD') // separa letras y acentos
        .replace(/[\u0300-\u036f]/g, '') // elimina acentos
        .replace(/[^a-z0-9]+/g, '-') // reemplaza todo lo no alfanumérico por guiones
        .replace(/^-+|-+$/g, '') // limpia guiones del principio y fin
}

export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(process.cwd(), 'data', 'products.json')

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
                .filter((v): v is number => v != null) // quita undefined o null
        )
    )
        .sort((a, b) => a - b) // orden numérico
        .map(String) // convertir a string

    return servings
}

export async function getRandomProducts(
    limit: number = 10
): Promise<Product[]> {
    const products = await getProducts()

    return products.sort(() => Math.random() - 0.5).slice(0, limit)
}
