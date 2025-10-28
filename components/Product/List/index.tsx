import styles from './page.module.css'
import Card from '../Card'
import { Product } from '@/interfaces'

export default function ProductList({ products }: { products: Product[] }) {
    return (
        <div className={styles.grid}>
            {!products.length && <p>No se encontraron productos, prueba con otros filtros.</p>}
            {products && products.map(p => <Card product={p} key={p.codigo} />)}
        </div>
    )
}
