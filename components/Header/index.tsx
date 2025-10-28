'use client'
import Link from 'next/link'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ROUTES } from '@/routes'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <Link href={ROUTES.INICIO}>
                    <h1>Recetas con Essen</h1>
                </Link>
            </div>
            <FontAwesomeIcon
                icon={faBars}
                className={styles.icon}
                onClick={() => setMenuOpen(open => !open)}
                aria-label="Abrir menú"
            />
            <div
                className={`${styles.header__content} ${
                    menuOpen ? styles.open : ''
                }`}
            >
                <ul className={styles.nav}>
                    {[
                        { name: 'Inicio', link: ROUTES.INICIO },
                        { name: 'Productos', link: ROUTES.PRODUCTOS },
                        { name: 'Recetas', link: ROUTES.RECETAS },
                        { name: 'Sumate', link: ROUTES.SUMATE },
                    ].map((item, index) => (
                        <li key={index} className={styles.nav__item}>
                            <Link
                                href={item.link}
                                onClick={() => setMenuOpen(false)}
                                className={styles.link}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={styles.icons}>
                    <Link href={ROUTES.INSTAGRAM}>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className={styles.icon}
                        />
                    </Link>
                    <Link href={ROUTES.WHATSAPP}>
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className={styles.icon}
                        />
                    </Link>
                </div>
            </div>
        </header>
    )
}
