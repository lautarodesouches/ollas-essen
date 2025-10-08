import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.css'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { WHATSAPP__NUMBER } from '@/constants'

export default function Whatsapp() {
    return (
        <aside className={styles.whatsapp}>
            <a
                href={`https://wa.me/${WHATSAPP__NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
        </aside>
    )
}
