import { ROUTES } from '@/routes'
import { generateSlug } from '@/utils'
import Link from 'next/link'
import styles from './page.module.css'
import { Product } from '@/interfaces'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
    product: Product
}

export default function Card({ product }: Props) {
    const productTitle = `${product.nombre}${product.medida ? ` ${product.medida}cm` : ''}`

    return (
        <Link
            href={`${ROUTES.PRODUCTOS}/${generateSlug(product)}`}
            className={styles.card}
            aria-label={`Ver detalles de ${productTitle} - Línea ${product.linea}`}
        >
            <div className={styles.imageWrapper}>
                <Image
                    src={`/images/products/${product.imagenes[0]}`}
                    alt={`${productTitle} - Línea ${product.linea}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
                    className={styles.image}
                    quality={80}
                    loading="lazy"
                />
            </div>

            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <span className={styles.line}>{product.linea}</span>
                    <h3 className={styles.title}>{productTitle}</h3>
                </div>

                <div className={styles.cta}>
                    <span>Ver detalles</span>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.icon} />
                </div>
            </div>
        </Link>
    )
}
