import Link from 'next/link'
import styles from './page.module.css'
import { ROUTES } from '@/src/config/routes'

interface Props {
    lines: string[]
}

export default function Categories({ lines }: Props) {
    return (
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
    )
}
