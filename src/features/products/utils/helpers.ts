import { Product } from '../types'

export function capitalize(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

export function generateSlug(p: Product) {
    return `${p.linea}-${p.nombre}${p.medida ? `-${p.medida}` : ''}`
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}
