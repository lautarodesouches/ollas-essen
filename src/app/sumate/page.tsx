import Image from 'next/image'
import styles from './page.module.css'
import { WHATSAPP__NUMBER } from '@/src/lib/constants'
import TrackedLink from '@/src/features/tracking/components/TrackedLink'

// Import de Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faWallet,
    faClock,
    faMoneyBillWave,
    faCoins,
    faShieldHeart,
    faTruckFast,
    faBagShopping,
    faPlaneDeparture,
    faUsers,
    faGraduationCap,
    faHandshake,
    faComments
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Emprender() {
    return (
        <div className={styles.container}>
            {/* HERO SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>
                        Tu negocio, tus tiempos, <span>tus reglas</span>.
                    </h1>
                    <p className={styles.heroSubtitle}>
                        Emprendé con Essen y transformá tu pasión en ingresos reales.
                        Sin jefes, sin horarios fijos y con el respaldo de la marca líder.
                    </p>

                    <div className={styles.heroBenefits}>
                        <div className={styles.benefitItem}>
                            <FontAwesomeIcon icon={faWallet} className={styles.benefitIcon} />
                            <span>Sin inversión inicial</span>
                        </div>
                        <div className={styles.benefitItem}>
                            <FontAwesomeIcon icon={faMoneyBillWave} className={styles.benefitIcon} />
                            <span>Ingresos desde el primer día</span>
                        </div>
                        <div className={styles.benefitItem}>
                            <FontAwesomeIcon icon={faClock} className={styles.benefitIcon} />
                            <span>Manejá tus propios horarios</span>
                        </div>
                    </div>

                    <div className={styles.heroCtaContainer}>
                        <TrackedLink
                            href={`https://wa.me/${WHATSAPP__NUMBER}?text=Hola! Quisiera más información sobre cómo emprender en Essen.`}
                            target="_blank"
                        >
                            <button className={styles.primaryButton}>
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                                Quiero mi independencia
                            </button>
                        </TrackedLink>
                        <p className={styles.heroNote}>
                            Charla informativa de 15 min sin compromiso
                        </p>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src="/images/join/hero.jpg"
                        alt="Emprendedora feliz"
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={styles.imgCover}
                    />
                </div>
            </section>

            {/* TRUST BAR (Derribando Miedos) */}
            <section className={styles.trustBar}>
                <div className={styles.trustGrid}>
                    <div className={styles.trustItem}>
                        <FontAwesomeIcon icon={faCoins} className={styles.trustIcon} />
                        <h3 className={styles.trustTitle}>Cero Inversión</h3>
                        <p className={styles.trustDesc}>Tu cliente paga, vos pedís. No ponés dinero de tu bolsillo.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <FontAwesomeIcon icon={faShieldHeart} className={styles.trustIcon} />
                        <h3 className={styles.trustTitle}>Sin Riesgos</h3>
                        <p className={styles.trustDesc}>Sin stock obligatorio ni compras mínimas mensuales.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <FontAwesomeIcon icon={faTruckFast} className={styles.trustIcon} />
                        <h3 className={styles.trustTitle}>Logística Resuelta</h3>
                        <p className={styles.trustDesc}>Essen se encarga de los envíos a todo el país.</p>
                    </div>
                </div>
            </section>

            {/* INCOME TIERS (Crecimiento) */}
            <section className={styles.incomeSection}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Un plan de carrera a tu medida</h2>
                    <p className={styles.sectionSubtitle}>
                        El techo lo ponés vos. Conocé cómo podés crecer mes a mes.
                    </p>
                </div>

                <div className={styles.tiersGrid}>
                    {/* Tier 1 */}
                    <div className={styles.tierCard}>
                        <div className={styles.tierHeader}>
                            <FontAwesomeIcon icon={faBagShopping} className={styles.tierIcon} />
                            <h3 className={styles.tierName}>Ventas Personales</h3>
                        </div>
                        <ul className={styles.tierList}>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Altas ganancias por ventas
                            </li>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Premios mensuales (Productos Essen)
                            </li>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Capacitación constante
                            </li>
                        </ul>
                    </div>

                    {/* Tier 2 */}
                    <div className={styles.tierCard}>
                        <div className={styles.tierHeader}>
                            <FontAwesomeIcon icon={faUsers} className={styles.tierIcon} />
                            <h3 className={styles.tierName}>Construcción de Equipo</h3>
                        </div>
                        <ul className={styles.tierList}>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Todo lo anterior
                            </li>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Comisiones por ventas de tu equipo
                            </li>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Bonos por liderazgo
                            </li>
                        </ul>
                    </div>

                    {/* Tier 3 */}
                    <div className={styles.tierCard}>
                        <div className={styles.tierHeader}>
                            <FontAwesomeIcon icon={faPlaneDeparture} className={styles.tierIcon} />
                            <h3 className={styles.tierName}>Empresaria Essen</h3>
                        </div>
                        <ul className={styles.tierList}>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Ingresos residuales ilimitados
                            </li>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Viajes internacionales (All Inclusive)
                            </li>
                            <li className={styles.tierItem}>
                                <span className={styles.checkIcon}>✓</span>
                                Reconocimientos exclusivos
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SUPPORT SECTION */}
            <section className={styles.supportSection}>
                <div className={styles.supportContainer}>
                    <div className={styles.supportContent}>
                        <h2 className={styles.sectionTitle}>No estás sola: te acompañamos</h2>
                        <div className={styles.featureList}>
                            <div className={styles.supportFeature}>
                                <div className={styles.featureIconWrapper}>
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </div>
                                <div className={styles.featureText}>
                                    <h3>Capacitación Gratuita</h3>
                                    <p>Aprendé todo sobre productos, ventas y redes sociales en nuestra academia online.</p>
                                </div>
                            </div>
                            <div className={styles.supportFeature}>
                                <div className={styles.featureIconWrapper}>
                                    <FontAwesomeIcon icon={faHandshake} />
                                </div>
                                <div className={styles.featureText}>
                                    <h3>Mentoría 1 a 1</h3>
                                    <p>Tendrás una guía (patrocinadora) que te ayudará paso a paso en tus inicios.</p>
                                </div>
                            </div>
                            <div className={styles.supportFeature}>
                                <div className={styles.featureIconWrapper}>
                                    <FontAwesomeIcon icon={faComments} />
                                </div>
                                <div className={styles.featureText}>
                                    <h3>Comunidad Activa</h3>
                                    <p>Sumate a grupos de WhatsApp donde compartimos estrategias y celebramos logros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.supportImage}>
                        <div className={styles.supportImgPlaceholder}>
                            <Image src="/images/join/support.jpg" alt="Comunidad activa" fill className={styles.imgCover} />
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className={styles.finalCta}>
                <div className={styles.finalCtaContent}>
                    <h2 className={styles.finalCtaTitle}>¿Estás lista para dar el salto?</h2>
                    <p className={styles.finalCtaText}>
                        El &quot;momento perfecto&quot; no existe, pero este puede ser el comienzo de algo increíble.
                        Animate a escuchar la propuesta completa.
                    </p>

                    <TrackedLink
                        href={`https://wa.me/${WHATSAPP__NUMBER}?text=Hola! Estoy lista para dar el salto y emprender.`}
                        target="_blank"
                    >
                        <button className={styles.finalCtaButton}>
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            Quiero agendar mi charla
                        </button>
                    </TrackedLink>

                    <div className={styles.finalBenefits}>
                        <span><FontAwesomeIcon icon={faClock} /> 15 minutos</span>
                        <span>•</span>
                        <span>Sin compromiso</span>
                        <span>•</span>
                        <span>100% Gratuito</span>
                    </div>
                </div>
            </section>
        </div>
    )
}
