import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { ROUTES } from '@/routes'
import TrackedLink from '../TrackedLink'

export default function Whatsapp() {
    return (
        <aside className={styles.whatsapp}>
            <TrackedLink
                href={ROUTES.WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </TrackedLink>
        </aside>
    )
}
