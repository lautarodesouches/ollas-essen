import Image from 'next/image'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHolding, faLock, faLayerGroup } from '@fortawesome/free-solid-svg-icons'

interface Props {
    images?: string[]
}

export default function ProductTechnical({ images = [] }: Props) {
    const showImages = images.length >= 3;

    return (
        <section className={styles.technical}>
            <h3 className={styles.title}>Diseño Inteligente</h3>

            <div className={styles.grid}>
                <div className={styles.item}>
                    <div className={styles.imagePlaceholder}>
                        {showImages ? (
                            <Image
                                src={`/images/products/${images[0]}`}
                                alt="Mango Seguro"
                                width={150}
                                height={150}
                                className={styles.img}
                            />
                        ) : (
                            <FontAwesomeIcon icon={faHandHolding} />
                        )}
                    </div>
                    <h4 className={styles.itemTitle}>Mango Seguro</h4>
                    <p className={styles.itemText}>Diseño ergonómico que disipa el calor para cocinar siempre segura.</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.imagePlaceholder}>
                        {showImages ? (
                            <Image
                                src={`/images/products/${images[1]}`}
                                alt="Cierre Perfecto"
                                width={150}
                                height={150}
                                className={styles.img}
                            />
                        ) : (
                            <FontAwesomeIcon icon={faLock} />
                        )}
                    </div>
                    <h4 className={styles.itemTitle}>Cierre Perfecto</h4>
                    <p className={styles.itemText}>Mantiene la humedad y los sabores dentro de la cacerola.</p>
                </div>

                <div className={styles.item}>
                    <div className={styles.imagePlaceholder}>
                        {showImages ? (
                            <Image
                                src={`/images/products/${images[2]}`}
                                alt="Aluminio Fundido"
                                width={150}
                                height={150}
                                className={styles.img}
                            />
                        ) : (
                            <FontAwesomeIcon icon={faLayerGroup} />
                        )}
                    </div>
                    <h4 className={styles.itemTitle}>Aluminio Fundido</h4>
                    <p className={styles.itemText}>Distribución de calor pareja de borde a borde. Adiós comida quemada.</p>
                </div>
            </div>
        </section>
    )
}
