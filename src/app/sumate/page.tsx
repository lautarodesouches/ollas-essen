import Link from 'next/link'
import styles from './page.module.css'
import { ROUTES } from '@/src/config/routes'
import TrackedLink from '@/src/features/tracking/components/TrackedLink'

export default function Emprender() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.hero__content}>
                    <h1 className={styles.hero__title}>
                        Transformá tu vida con el emprendimiento perfecto
                    </h1>
                    <p className={styles.hero__subtitle}>
                        Hace dos años dimos el paso que cambió todo. Hoy te
                        invitamos a que des el tuyo.
                    </p>
                    <div className={styles.hero__benefits}>
                        <div className={styles.hero__benefitItem}>
                            <span className={styles.hero__checkIcon}>✓</span>
                            <span>Sin inversión inicial</span>
                        </div>
                        <div className={styles.hero__benefitItem}>
                            <span className={styles.hero__checkIcon}>✓</span>
                            <span>Ingresos desde el primer día</span>
                        </div>
                        <div className={styles.hero__benefitItem}>
                            <span className={styles.hero__checkIcon}>✓</span>
                            <span>Trabajá desde donde quieras</span>
                        </div>
                    </div>
                    <TrackedLink href={ROUTES.WHATSAPP}>
                        <button className={styles.hero__cta}>
                            Quiero comenzar ahora
                        </button>
                    </TrackedLink>
                    <p className={styles.hero__note}>
                        Charla informativa sin compromiso
                    </p>
                </div>
                <div className={styles.hero__image}>
                    {/* Imagen: Persona feliz trabajando desde casa con laptop */}
                </div>
            </section>

            {/* Why Section */}
            <section className={styles.why}>
                <div className={styles.why__content}>
                    <h2 className={styles.why__title}>
                        ¿Por qué miles eligen Essen para emprender?
                    </h2>
                    <p className={styles.why__intro}>
                        Descubrí el negocio que combina{' '}
                        <strong>libertad financiera</strong> con{' '}
                        <strong>calidad premium</strong>
                    </p>

                    <div className={styles.why__featureGrid}>
                        <div className={styles.why__featureCard}>
                            <div className={styles.why__featureIcon}>🛡️</div>
                            <h3 className={styles.why__featureTitle}>
                                Cero Riesgo
                            </h3>
                            <p className={styles.why__featureDescription}>
                                Tu cliente paga primero, vos comprás después.
                                Sin stock ni pérdidas.
                            </p>
                        </div>

                        <div className={styles.why__featureCard}>
                            <div className={styles.why__featureIcon}>💸</div>
                            <h3 className={styles.why__featureTitle}>
                                Cero Inversión
                            </h3>
                            <p className={styles.why__featureDescription}>
                                No necesitás poner dinero para empezar. Solo tus
                                ganas de crecer.
                            </p>
                        </div>

                        <div className={styles.why__featureCard}>
                            <div className={styles.why__featureIcon}>⏰</div>
                            <h3 className={styles.why__featureTitle}>
                                Horarios Flexibles
                            </h3>
                            <p className={styles.why__featureDescription}>
                                Trabajá desde tu casa, en tus tiempos. Sos tu
                                propio jefe.
                            </p>
                        </div>

                        <div className={styles.why__featureCard}>
                            <div className={styles.why__featureIcon}>📈</div>
                            <h3 className={styles.why__featureTitle}>
                                Ganancias Reales
                            </h3>
                            <p className={styles.why__featureDescription}>
                                Hasta 24% de comisión por venta + premios +
                                bonos extras.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.why__image}>
                    {/* Imagen: Productos Essen elegantes y familia feliz cocinando */}
                </div>
            </section>

            {/* Income Section */}
            <section className={styles.income}>
                <div className={styles.income__header}>
                    <h2 className={styles.income__title}>
                        Tu potencial de ingresos con Essen
                    </h2>
                </div>

                <div className={styles.income__grid}>
                    <div className={styles.income__tier}>
                        <div className={styles.income__tierHeader}>
                            <h3 className={styles.income__tierName}>
                                Emprendedor Base
                            </h3>
                        </div>
                        <ul className={styles.income__benefits}>
                            <li className={styles.income__benefitItem}>
                                4-6 ventas mensuales
                            </li>
                            <li className={styles.income__benefitItem}>
                                Comisión del 24%
                            </li>
                            <li className={styles.income__benefitItem}>
                                Capacitación inicial
                            </li>
                        </ul>
                    </div>

                    <div className={styles.income__tier}>
                        <div className={styles.income__tierHeader}>
                            <h3 className={styles.income__tierName}>
                                Emprendedor Activo
                            </h3>
                        </div>
                        <ul className={styles.income__benefits}>
                            <li className={styles.income__benefitItem}>
                                8-12 ventas mensuales
                            </li>
                            <li className={styles.income__benefitItem}>
                                Premios en productos
                            </li>
                            <li className={styles.income__benefitItem}>
                                Bonos por performance
                            </li>
                        </ul>
                    </div>

                    <div className={styles.income__tier}>
                        <div className={styles.income__tierHeader}>
                            <h3 className={styles.income__tierName}>
                                Líder de Equipo
                            </h3>
                        </div>
                        <ul className={styles.income__benefits}>
                            <li className={styles.income__benefitItem}>
                                Ventas + comisiones de equipo
                            </li>
                            <li className={styles.income__benefitItem}>
                                Viajes y reconocimientos
                            </li>
                            <li className={styles.income__benefitItem}>
                                Ingresos residuales
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className={styles.support}>
                <div className={styles.support__content}>
                    <h2 className={styles.support__title}>
                        No emprendas solo: te acompañamos en cada paso
                    </h2>

                    <div className={styles.support__features}>
                        <div className={styles.support__feature}>
                            <div className={styles.support__icon}>🎓</div>
                            <div className={styles.support__content}>
                                <h3 className={styles.support__featureTitle}>
                                    Capacitación 360°
                                </h3>
                                <p
                                    className={
                                        styles.support__featureDescription
                                    }
                                >
                                    Aprendé técnicas de venta, manejo de redes y
                                    fidelización de clientes
                                </p>
                            </div>
                        </div>

                        <div className={styles.support__feature}>
                            <div className={styles.support__icon}>🤝</div>
                            <div className={styles.support__content}>
                                <h3 className={styles.support__featureTitle}>
                                    Mentoría personal
                                </h3>
                                <p
                                    className={
                                        styles.support__featureDescription
                                    }
                                >
                                    Tu líder te guía semana a semana para
                                    alcanzar tus objetivos
                                </p>
                            </div>
                        </div>

                        <div className={styles.support__feature}>
                            <div className={styles.support__icon}>💬</div>
                            <div className={styles.support__content}>
                                <h3 className={styles.support__featureTitle}>
                                    Comunidad activa
                                </h3>
                                <p
                                    className={
                                        styles.support__featureDescription
                                    }
                                >
                                    Grupo privado donde compartimos éxitos y
                                    resolvemos dudas
                                </p>
                            </div>
                        </div>

                        <div className={styles.support__feature}>
                            <div className={styles.support__icon}>🎁</div>
                            <div className={styles.support__content}>
                                <h3 className={styles.support__featureTitle}>
                                    Reconocimientos
                                </h3>
                                <p
                                    className={
                                        styles.support__featureDescription
                                    }
                                >
                                    Celebramos tus logros con premios, viajes y
                                    eventos exclusivos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.support__image}>
                    {/* Imagen: Grupo de emprendedores sonrientes en capacitación o evento */}
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.faq}>
                <h2 className={styles.faq__title}>¿Todavía tenés dudas?</h2>

                <div className={styles.faq__grid}>
                    <div className={styles.faq__item}>
                        <h3 className={styles.faq__question}>
                            ¿Realmente no necesito invertir?
                        </h3>
                        <p className={styles.faq__answer}>
                            Exacto. Comenzás sin poner un peso. Solo necesitás
                            tu celular y conexión a internet.
                        </p>
                    </div>

                    <div className={styles.faq__item}>
                        <h3 className={styles.faq__question}>
                            ¿Y si no tengo experiencia en ventas?
                        </h3>
                        <p className={styles.faq__answer}>
                            El 80% de nuestros emprendedores empezó sin
                            experiencia. Te capacitamos en todo.
                        </p>
                    </div>

                    <div className={styles.faq__item}>
                        <h3 className={styles.faq__question}>
                            ¿Cuánto tiempo necesito dedicar?
                        </h3>
                        <p className={styles.faq__answer}>
                            Desde 1 hora por día. Vos manejás tus tiempos y
                            crecés a tu ritmo.
                        </p>
                    </div>

                    <div className={styles.faq__item}>
                        <h3 className={styles.faq__question}>
                            ¿Qué pasa con el monotributo?
                        </h3>
                        <p className={styles.faq__answer}>
                            Te asesoramos gratis con un contador. Es un trámite
                            simple que hacés online.
                        </p>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className={styles.finalCta}>
                <div className={styles.finalCta__content}>
                    <h2 className={styles.finalCta__title}>
                        Tu momento es ahora
                    </h2>
                    <p className={styles.finalCta__text}>
                        El universo está esperando que des ese paso que te
                        falta. ¿Qué estás esperando para cambiar tu vida?
                    </p>
                    <p className={styles.finalCta__challenge}>
                        <strong>
                            Animate a escuchar la propuesta completa.
                        </strong>
                        Sin compromiso, sin presión. Solo una conversación que
                        puede cambiar todo.
                    </p>
                    <TrackedLink href={ROUTES.WHATSAPP}>
                        <button className={styles.finalCta__button}>
                            Quiero mi charla informativa
                        </button>
                    </TrackedLink>
                    <div className={styles.finalCta__benefits}>
                        <span>15 minutos de tu tiempo</span>
                        <span>•</span>
                        <span>Sin compromiso</span>
                        <span>•</span>
                        <span>100% gratuito</span>
                    </div>
                </div>
                <div className={styles.finalCta__image}>
                    {/* Imagen: Persona alcanzando meta o símbolo de éxito */}
                </div>
            </section>
        </div>
    )
}
