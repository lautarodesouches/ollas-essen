import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '@/src/app/page.module.css'
import { faUtensils, faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons'

const WHY_CHOOSE_ESSEN = [
    { icon: faUtensils, title: 'Calidad Premium', text: 'Productos de alta calidad para cocinar rico' },
    { icon: faShieldAlt, title: 'Garantía Total', text: 'Respaldados por años de experiencia' },
    { icon: faTruck, title: 'Envío Rápido', text: 'Recibí tus productos en tiempo récord' }
]

export default function WhyChooseEssen() {
    return (
        <section className={styles.why}>
            <h2 className={styles.why__title}>¿Por qué Elegir Essen?</h2>
            <ul className={styles.why__list}>
                {WHY_CHOOSE_ESSEN.map((item, index) => (
                    <li className={styles.why__item} key={index}>
                        <FontAwesomeIcon icon={item.icon} />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
