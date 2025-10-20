import Image from 'next/image'
import styles from './page.module.css'
import Card from '../Card'
import { Product } from '@/interfaces'

export default function ProductList({ products }: { products: Product[] }) {
    if (!products.length) return <p>No se encontraron productos.</p>

    return (
        <div className={styles.grid}>
            {products.map(p => (
                <Card product={p} key={p.codigo} />
            ))}
        </div>
    )
}
