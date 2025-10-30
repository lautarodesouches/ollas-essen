'use client'
import { WHATSAPP__NUMBER } from '@/constants'
import styles from './page.module.css'

export default function ContactPage() {
    const whatsappMessage = encodeURIComponent(
        '¡Hola! Estoy interesado/a en los productos Essen 😊'
    )
    const whatsappLink = `https://wa.me/${WHATSAPP__NUMBER}?text=${whatsappMessage}`

    return (
        <main className={styles.container}>
            <section className={styles.card}>
                <h1 className={styles.title}>
                    Emprendedor Independiente Essen
                </h1>
                <p className={styles.code}>
                    Código de Emprendedor: <strong>382895</strong>
                </p>

                <p className={styles.text}>
                    ¡Gracias por visitar mi espacio! Soy{' '}
                    <strong>Emprendedor Independiente Essen</strong> y te ayudo
                    a descubrir cómo cocinar más rico, saludable y práctico con
                    los productos Essen.
                </p>

                <p className={styles.text}>
                    Si querés conocer el catálogo, hacer un pedido o sumarte al
                    equipo, podés escribirme directamente por WhatsApp. ¡Te voy
                    a responder personalmente!
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                >
                    💬 Contactar por WhatsApp
                </a>
            </section>
        </main>
    )
}
