import Link from 'next/link'
import styles from '@/app/page.module.css'
import { ROUTES } from '@/routes'

export default function Hero() {
    return (
        <section className={styles.start}>
            <h2 className={styles.start__title}>
                Descubre la Magina de Cocinar con Essen
            </h2>
            <h3 className={styles.start__subtitle}>
                Productos de alta calidad que transforman tu experiencia culinaria
            </h3>
            <div className={styles.start__div}>
                <Link href={ROUTES.PRODUCTOS}>
                    <button className={styles.start__button}>
                        Ver Productos
                    </button>
                </Link>
                <Link href={ROUTES.RECETAS}>
                    <button className={styles.start__button}>Ver Recetas</button>
                </Link>
            </div>
        </section>
    )
}
