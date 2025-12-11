import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFire,
    faPiggyBank,
    faClock,
    faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'

export default function ProductBenefits() {
    return (
        <section className={styles.benefits}>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <FontAwesomeIcon icon={faFire} className={styles.icon} />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.title}>Efecto Horno</h4>
                    <p className={styles.text}>Cociná tortas y carnes en la hornalla.</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <FontAwesomeIcon icon={faPiggyBank} className={styles.icon} />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.title}>Ahorro Real</h4>
                    <p className={styles.text}>Ahorrá hasta un 70% de gas al mes.</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <FontAwesomeIcon icon={faClock} className={styles.icon} />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.title}>Tiempo Libre</h4>
                    <p className={styles.text}>Cocciones rápidas, más tiempo para vos.</p>
                </div>
            </div>

            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <FontAwesomeIcon icon={faWandMagicSparkles} className={styles.icon} />
                </div>
                <div className={styles.content}>
                    <h4 className={styles.title}>Limpieza Mágica</h4>
                    <p className={styles.text}>Antiadherente premium, un trapo y listo.</p>
                </div>
            </div>
        </section>
    )
}
