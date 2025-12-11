import { notFound } from 'next/navigation'
import { capitalize, generateSlug, getProductBySlug, getProducts } from '@/src/features/products/utils'
import styles from './page.module.css'
import Link from 'next/link'
import { ROUTES } from '@/src/config/routes'
import ProductFaqs from '@/src/features/products/components/ProductFaqs'
import ProductGallery from '@/src/features/products/components/ProductGallery'
import ProductRecommended from '@/src/features/products/components/ProductRecommended'
import TrackedLink from '@/src/features/tracking/components/TrackedLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faUsers, faExpand } from '@fortawesome/free-solid-svg-icons'
import { faCcVisa, faCcMastercard, faCcAmex } from '@fortawesome/free-brands-svg-icons'
import { WHATSAPP__NUMBER } from '@/src/lib/constants'

// Wireframe Components
import ProductBenefits from '@/src/features/products/components/ProductBenefits'
import ProductEmotional from '@/src/features/products/components/ProductEmotional'
import ProductTechnical from '@/src/features/products/components/ProductTechnical'

interface Props {
    params: Promise<{ slug: string }>
}

export const dynamic = 'force-static'
export const revalidate = 3600

export async function generateStaticParams() {
    const products = await getProducts()
    return products.map(product => ({
        slug: generateSlug(product)
    }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const product = await getProductBySlug(slug)
    if (!product) return

    const title = `${capitalize(product.linea)} ${capitalize(product.nombre)} ${product.medida ? product.medida + 'cm' : ''}`
    return {
        title: title,
        description: product.descripcion,
    }
}

export default async function Product({ params }: Props) {
    const { slug } = await params
    const product = await getProductBySlug(slug)

    if (!product) return notFound()

    const technicalName = `Essen ${capitalize(product.linea)} ${capitalize(product.nombre)} ${product.medida ? product.medida + 'cm' : ''}`;
    const cleanName = `${product.nombre} ${product.medida ? product.medida : ''} ${product.linea}`;

    return (
        <div className={styles.container}>
            {/* Breadcrumbs */}
            <nav className={styles.nav}>
                <Link className={styles.nav__link} href={ROUTES.PRODUCTOS}>Productos</Link>
                <span className={styles.nav__span}>/</span>
                <Link className={styles.nav__link} href={`${ROUTES.PRODUCTOS}?linea=${product.linea}`}>{product.linea}</Link>
                <span className={styles.nav__span}>/</span>
                <span className={styles.nav__link}>{product.nombre}</span>
            </nav>

            {/* HERO BLOCK */}
            <article className={styles.product}>
                {/* Left: Gallery */}
                <div className={styles.product__gallery_col}>
                    <ProductGallery images={product.imagenes} />
                </div>

                {/* Right: Info & Actions */}
                <div className={styles.product__info_col}>
                    <header>
                        <h1 className={styles.technicalName}>
                            {technicalName}
                        </h1>
                        <h2 className={styles.salesTitle}>
                            {product.titulo_venta || 'Tu aliada perfecta en la cocina'}
                        </h2>
                        <span className={styles.sku}>Código: {product.codigo}</span>
                    </header>

                    {/* Quick Specs */}
                    <div className={styles.specs}>
                        {product.comensales && (
                            <div className={styles.specItem}>
                                <FontAwesomeIcon icon={faUsers} className={styles.specIcon} />
                                <span>{product.comensales} Comensales</span>
                            </div>
                        )}
                        {product.capacidad && (
                            <div className={styles.specItem}>
                                <FontAwesomeIcon icon={faExpand} className={styles.specIcon} />
                                <span>{product.capacidad} Lits</span>
                            </div>
                        )}
                        {product.medida && (
                            <div className={styles.specItem}>
                                <FontAwesomeIcon icon={faExpand} className={styles.specIcon} />
                                <span>{product.medida} cm</span>
                            </div>
                        )}
                    </div>

                    {/* Price & Financing */}
                    <div className={styles.priceBlock}>
                        <div className={styles.financingTitle}>
                            <FontAwesomeIcon icon={faCreditCard} />
                            Cuotas Sin Interés
                        </div>
                        <p className={styles.description} style={{ fontSize: '0.9rem', margin: 0 }}>
                            Pagá con tarjeta o consultá por descuentos en efectivo.
                        </p>
                        <div className={styles.paymentMethods}>
                            <FontAwesomeIcon icon={faCcVisa} />
                            <FontAwesomeIcon icon={faCcMastercard} />
                            <FontAwesomeIcon icon={faCcAmex} />
                        </div>
                    </div>

                    {/* Description Short */}
                    <div className={styles.description}>
                        <p>{product.descripcion}</p>
                    </div>

                    {/* CTAs */}
                    <div className={styles.buttons}>
                        <TrackedLink
                            href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(`Hola Cami! Me encantó la ${cleanName}. Quiero realizar la compra! 😍`)}`}
                            target="_blank"
                            className={styles.primaryBtn}
                        >
                            QUIERO MI ESSEN HOY
                        </TrackedLink>

                        <TrackedLink
                            href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(`Hola Cami! Me gustaría saber el precio y financiación de la ${cleanName}.`)}`}
                            target="_blank"
                            className={styles.secondaryBtn}
                        >
                            CONSULTAR PRECIO
                        </TrackedLink>
                    </div>
                </div>
            </article>

            {/* BLOCK 2: BENEFITS */}
            <ProductBenefits />

            {/* BLOCK 3: EMOTIONAL */}
            <ProductEmotional
                descripcion={product.descripcion || ''}
                comensales={product.comensales || 4}
                videos={product.videos}
                images={product.imagenes}
            />

            {/* BLOCK 4: TECHNICAL */}
            {/* BLOCK 4: TECHNICAL */}
            <ProductTechnical images={product.imagenes} />

            <div className={styles.separator} />

            {/* FAQs & RECOMMENDED */}
            <ProductRecommended codigo={product.codigo} />
            <ProductFaqs />

            {/* Mobile Sticky Bar (Visible only on < 768px via CSS) */}
            <div className={styles.mobileStickyBar}>
                <div className={styles.stickyPrice}>
                    <span className={styles.stickyPriceLabel}>Precio</span>
                    <span className={styles.stickyPriceValue}>Consultar</span>
                </div>
                <TrackedLink
                    href={`https://wa.me/${WHATSAPP__NUMBER}?text=${encodeURIComponent(`Hola Cami! Estoy decidid@, quiero la ${cleanName}. Me pasas info de pago? 💳`)}`}
                    target="_blank"
                    className={styles.stickyBtn}
                >
                    COMPRAR
                </TrackedLink>
            </div>
        </div>
    )
}
