import Link from 'next/link'
import Image from 'next/image'
import styles from '@/src/app/page.module.css'
import { ROUTES } from '@/src/config/routes'

export default function Hero() {
    return (
        <section className={styles.start}>
            <Image
                src="/images/kitchen.jpg"
                alt="Cocina moderna con productos Essen"
                fill
                className={styles.startImage}
                priority
                quality={85}
                sizes="100vw"
            />
            <div className={styles.startOverlay} />
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
