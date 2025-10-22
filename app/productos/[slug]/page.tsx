import { notFound } from 'next/navigation'
import { capitalize, getProductBySlug } from '@/utils'
import styles from './page.module.css'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import { Faqs, Gallery } from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { WHATSAPP__NUMBER } from '@/constants'
import Recommendded from '@/components/Product/Recommended'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params

    const product = await getProductBySlug(slug)

    if (!product) return

    return {
        title: `${capitalize(product.linea)} ${capitalize(product.nombre)}`,
    }
}

export default async function Product({ params }: Props) {
    const { slug } = await params

    const product = await getProductBySlug(slug)

    if (!product) return notFound()

    return (
        <>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <Link className={styles.nav__link} href={ROUTES.PRODUCTOS}>
                        Productos
                    </Link>
                    <span className={styles.nav__span}>/</span>
                    <Link
                        className={styles.nav__link}
                        href={`${ROUTES.PRODUCTOS}linea=${product.linea}`}
                    >
                        {product.linea}
                    </Link>
                    <span className={styles.nav__span}>/</span>
                    <span className={styles.nav__link}>{product.nombre}</span>
                </nav>
                <article className={styles.product}>
                    <div className={styles.product__div}>
                        <Gallery images={product.imagenes} />
                    </div>
                    <div className={styles.product__div}>
                        <h3 className={styles.product__subtitle}>
                            Línea {product.linea}
                        </h3>
                        <h2 className={styles.product__title}>
                            {product.nombre}{' '}
                            {product.medida && `${product.medida} cm`}
                        </h2>
                        <h4 className={styles.producto__code}>
                            Código: {product.codigo}
                        </h4>
                        <div className={styles.product__info}>
                            {product.comensales && (
                                <div>
                                    <p>{product.comensales}</p>
                                    <p>Comensales</p>
                                </div>
                            )}
                            {product.capacidad && (
                                <div>
                                    <p>{product.capacidad} L</p>
                                    <p>Capacidad</p>
                                </div>
                            )}
                            {product.medida && (
                                <div>
                                    <p>{product.medida} cm</p>
                                    <p>Diámetro</p>
                                </div>
                            )}
                        </div>
                        <div className={styles.button}>
                            <Link
                                href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(
                                    `¡Hola! 😊 Estoy interesado/a en el producto ${
                                        product.nombre
                                    }${
                                        product.medida
                                            ? ` ${product.medida}cm`
                                            : ''
                                    } de la línea ${
                                        product.linea
                                    }. ¿Podrías darme más información?`
                                )}`}
                            >
                                <button>
                                    Quiero comprar{' '}
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
            <Recommendded codigo={product.codigo} />
            <Faqs />
        </>
    )
}
