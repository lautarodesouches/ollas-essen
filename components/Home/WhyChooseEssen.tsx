import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '@/app/page.module.css'
import { WHY_CHOOSE_ESSEN } from '@/constants/data'

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
