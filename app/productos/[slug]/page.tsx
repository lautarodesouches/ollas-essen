import { notFound } from 'next/navigation'
import { capitalize, getProductBySlug } from '@/utils'
import styles from './page.module.css'
import Link from 'next/link'
import { ROUTES } from '@/routes'
import { Faqs, Gallery } from '@/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { WHATSAPP__NUMBER } from '@/constants'
import Recommendded from '@/components/Product/Recommended'
import {
    faCcAmex,
    faCcMastercard,
    faCcVisa,
} from '@fortawesome/free-brands-svg-icons'

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
                        href={`${ROUTES.PRODUCTOS}?linea=${product.linea}`}
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
                        <div className={styles.buttons}>
                            <Link
                                href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(
                                    `¡Hola! Estoy interesado/a en el producto ${
                                        product.nombre
                                    }${
                                        product.medida
                                            ? ` ${product.medida}cm`
                                            : ''
                                    } de la línea ${
                                        product.linea
                                    }. ¿Podrías darme más información?`
                                )}`}
                                target="_blank"
                            >
                                <button className={styles.buttons__primary}>
                                    Quiero mas información
                                </button>
                            </Link>
                            <Link
                                href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(
                                    `¡Hola! Quería consultar el precio de ${
                                        product.nombre
                                    }${
                                        product.medida
                                            ? ` ${product.medida}cm`
                                            : ''
                                    } de la línea ${
                                        product.linea
                                    }`
                                )}`}
                                target="_blank"
                            >
                                <button className={styles.buttons__secondary}>
                                    Consultar precio
                                </button>
                            </Link>
                        </div>
                        <div className={styles.methods}>
                            <h3 className={styles.methods__title}>
                                Medios de pago disponibles
                            </h3>
                            <ul className={styles.methods__list}>
                                <li className={styles.methods__li}>
                                    <FontAwesomeIcon
                                        icon={faCcVisa}
                                        className={styles.methods__icon}
                                    />
                                </li>
                                <li className={styles.methods__li}>
                                    <FontAwesomeIcon
                                        icon={faCcMastercard}
                                        className={styles.methods__icon}
                                    />
                                </li>
                                <li className={styles.methods__li}>
                                    <FontAwesomeIcon
                                        icon={faCcAmex}
                                        className={styles.methods__icon}
                                    />
                                </li>
                                <li className={styles.methods__li}>
                                    <FontAwesomeIcon
                                        icon={faCreditCard}
                                        className={styles.methods__icon}
                                    />
                                </li>
                            </ul>
                            <Link
                                href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(
                                    `¡Hola! Estoy interesado/a en las promociones de ${
                                        product.nombre
                                    }${
                                        product.medida
                                            ? ` ${product.medida}cm`
                                            : ''
                                    } de la línea ${product.linea}`
                                )}`}
                                target="_blank"
                                className={styles.method__link}
                            >
                                Consultar todas las promos de este mes
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
