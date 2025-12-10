import { ROUTES } from '@/routes'
import { generateSlug } from '@/utils'
import Link from 'next/link'
import styles from './page.module.css'
import { Product } from '@/interfaces'
import Image from 'next/image'

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
                <Image
                    src={`/images/products/${product.imagenes[0]}`}
                    alt={product.nombre || ''}
                    width={300}
                    height={300}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    quality={80}
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
