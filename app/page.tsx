import Link from 'next/link'
import styles from './page.module.css'
import { ROUTES } from '@/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
import { getLines, getRandomProducts } from '@/utils'
import { Card, List } from '@/components'

export default async function Home() {
    const lines = await getLines()

    const randomProducts = await getRandomProducts()

    return (
        <>
            <section className={styles.start}>
                <h2 className={styles.start__title}>
                    Descubre la Magina de Cocinar con Essen
                </h2>
                <h3 className={styles.start__subtitle}>
                    Productos de alta calidad que transforman tu experiencia
                    culinaria
                </h3>
                <div className={styles.start__div}>
                    <button className={styles.start__button}>
                        <Link href={ROUTES.PRODUCTOS}>Ver Productos</Link>
                    </button>
                    <button className={styles.start__button}>
                        <Link href={ROUTES.RECETAS}>Ver Recetas</Link>
                    </button>
                </div>
            </section>
            <section className={styles.categories}>
                <h2 className={styles.categories__title}>
                    Conocé Todas Las Líneas
                </h2>
                <ul className={styles.categories__list}>
                    {lines.map((item, index) => (
                        <li className={styles.categories__item} key={index}>
                            <Link href={`${ROUTES.PRODUCTOS}?linea=${item}`}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={styles.products}>
                <h2 className={styles.products__title}>Productos Destacados</h2>
                <ul className={styles.products__list}>
                    <List products={randomProducts} />
                </ul>
            </section>
            <section className={styles.why}>
                <h2 className={styles.why__title}>¿Por qué Elegir Essen?</h2>
                <ul className={styles.why__list}>
                    {[
                        {
                            icon: faFire,
                            title: 'Ahorro de Energía',
                            text: 'Cocina más rápido y consume menos gas o electricidad',
                        },
                        {
                            icon: faHeart,
                            title: 'Saludable',
                            text: 'Cocina sin aceite preservando los nutrientes',
                        },
                        {
                            icon: faStar,
                            title: 'Durabilidad',
                            text: 'Productos que duran toda la vida con garantía',
                        },
                    ].map((item, index) => (
                        <li className={styles.why__item} key={index}>
                            <FontAwesomeIcon icon={item.icon} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
