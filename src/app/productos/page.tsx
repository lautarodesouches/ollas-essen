import ProductsClient from '@/src/features/products/components/ProductsClient'
import { getLines, getProducts, getServings } from '@/src/features/products/utils'
import styles from './page.module.css'

export const dynamic = 'force-static'

export default async function Products() {
    const lines = await getLines()
    const servings = await getServings()
    const allProducts = await getProducts()

    return (
        <div className={styles.container}>
            <ProductsClient
                allProducts={allProducts}
                lines={lines}
                servings={servings}
            />
        </div>
    )
}

