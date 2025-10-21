import { ROUTES } from '@/routes'
import { generateSlug } from '@/utils'
import Link from 'next/link'
import styles from './page.module.css'
import { Product } from '@/interfaces'

interface Props {
    product: Product
}

export default function Card({ product }: Props) {
    return (
        <Link
            href={`${ROUTES.PRODUCTOS}${generateSlug(product)}/`}
            key={product.codigo}
            className={styles.card}
        >
            <li>
                <img
                    src={`/images/products/${product.imagenes[0]}`}
                    alt={product.nombre || ''}
                    loading="lazy"
                />
                <h4>
                    {product.nombre} {product.medida && `${product.medida}cm`} -{' '}
                    {product.linea}
                </h4>
                <button>Ver</button>
            </li>
        </Link>
    )
}
