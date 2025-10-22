import { List } from '@/components'
import Filters from '@/components/Product/Filter'
import { Product } from '@/interfaces'
import { getLines, getProducts, getServings } from '@/utils'
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
        if (linea && p.linea.toLowerCase() !== linea.toLowerCase()) return false
        if (comensales && p.comensales !== comensales) return false
        if (medida && p.medida?.toLowerCase() !== medida.toLowerCase())
            return false
        if (nombre && !p.nombre.toLowerCase().includes(nombre.toLowerCase()))
            return false
        return true
    })

    return (
        <div className={styles.container}>
            <Filters
                currentFilters={{ linea, comensales, medida, nombre }}
                lines={lines}
                servings={servings}
            />
            <List products={filtered} />
        </div>
    )
}
