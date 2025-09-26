import Link from 'next/link'
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ROUTES } from '@/routes'

export default function Header() {
    return (
        <header className={styles.header}>
            <div></div>
            <ul className={styles.nav}>
                {
                    [{name: 'Inicio', link: '/'}, {name: 'Productos', link: '/productos'},{name: 'Recetas', link: '/recetas'}, {name: 'Emprender', link: '/emprender'}].map((item, index) => (
                        <li key={index} className={styles.nav__item}><Link href={item.link}>{item.name}</Link></li>
                    ))
                }
            </ul>
            <div className={styles.icons}>
                <Link href={ROUTES.INSTAGRAM}><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></Link>
                <Link href={ROUTES.WHATSAPP}><FontAwesomeIcon icon={faWhatsapp} className={styles.icon} /></Link>
            </div>
        </header>
    )
}