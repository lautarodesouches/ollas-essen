'use client'
import Link from 'next/link'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ROUTES } from '@/src/config/routes'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'

import TrackedLink from '@/src/features/tracking/components/TrackedLink'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Prevent body scroll when menu is open on mobile
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <header className={styles.header}>
            <div className={styles.title}>
                <Link href={ROUTES.INICIO}>
                    <h1>Recetas con <span>Essen</span></h1>
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button
                className={styles.toggleIcon}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>

            {/* Nav Content (Overlay on Mobile) */}
            <div className={`${styles.header__content} ${menuOpen ? styles.open : ''}`}>
                <nav>
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
                </nav>

                <div className={styles.icons}>
                    <Link href={ROUTES.INSTAGRAM} target="_blank" aria-label="Instagram">
                        <FontAwesomeIcon
                            icon={faInstagram}
                            className={styles.icon}
                        />
                    </Link>
                    <TrackedLink href={ROUTES.WHATSAPP} target="_blank" aria-label="WhatsApp">
                        <FontAwesomeIcon
                            icon={faWhatsapp}
                            className={styles.icon}
                        />
                    </TrackedLink>
                </div>
            </div>
        </header>
    )
}
