import ProductList from '@/src/features/products/components/ProductList'
import ProductFilter from '@/src/features/products/components/ProductFilter'
import { Product } from '@/src/features/products/types'
import { getLines, getProducts, getServings } from '@/src/features/products/utils'
import styles from './page.module.css'

interface Props {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Products({ searchParams }: Props) {
    const lines = await getLines()
    const servings = await getServings()

    const params = await searchParams

    const linea = params.linea as string | undefined
    const comensales = params.comensales ? Number(params.comensales) : undefined
    const medida = params.medida as string | undefined
    const nombre = params.nombre as string | undefined

    const allProducts: Product[] = await getProducts()

    const filtered = allProducts.filter(p => {
        if (linea && p.linea?.toLowerCase() !== linea.toLowerCase()) return false
        if (comensales && p.comensales !== comensales) return false
        if (medida && !p.medida?.toLowerCase().includes(medida.toLowerCase()))
            return false
        if (nombre && !p.nombre.toLowerCase().includes(nombre.toLowerCase()))
            return false
        return true
    })

    return (
        <div className={styles.container}>
            <ProductFilter
                currentFilters={{ linea, comensales, medida, nombre }}
                lines={lines}
                servings={servings}
            />
            <ProductList products={filtered} />
        </div>
    )
}
