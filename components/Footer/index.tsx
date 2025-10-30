import Link from 'next/link'
import styles from './styles.module.css'
import { ROUTES } from '@/routes'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <p>©{year} Todos los derechos reservados</p>
            <p>
                <Link href={ROUTES.PRIVACY}>Politica de privacidad</Link>
            </p>
            <p>
                <Link href={ROUTES.TERMS}>Terminos y condiciones</Link>
            </p>
            <p>
                <Link href={ROUTES.CONTACT}>Contacto</Link>
            </p>
        </footer>
    )
}
