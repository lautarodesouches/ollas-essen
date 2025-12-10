'use client'

import { useState } from 'react'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

interface Faq {
    question: string
    answer: string
}

const faqs: Faq[] = [
    {
        question: '¿Cómo debo limpiar mi olla o cacerola Essen?',
        answer: 'Para el lavado tanto exterior como interior de la pieza, utilizar agua tibia o caliente, esponja Essen lado amarillo y Limpiador Desengrasante Naranja Essen (o detergente o jabón en pan blanco). Para realizar una limpieza profunda (en caso de suciedad intensa), dejar enfriar la pieza y utilizar agua caliente y Limpiador Desengrasante con un cepillo de plástico blando. No utilizar esponja abrasiva o de acero.',
    },
    {
        question:
            '¿Cómo puedo limpiar el caramelo de mi olla o cacerola Essen?',
        answer: 'No te preocupes, es bastante simple. Solo hay que agregar un poco de agua sobre el caramelo y luego llevar nuevamente la pieza al fuego mínimo, hasta que se disuelva completamente el azúcar. Retirar y limpiar con esponja Essen lado amarillo y desengrasante Naranja Essen (o detergente o jabón en pan blanco).',
    },
    {
        question:
            '¿Cómo hago para sacar la tapa de mi cacerola si se quedó pegada?',
        answer: 'Una de las principales características de las piezas Essen es el perfecto cierre entre la tapa y el cuerpo. Esto permite realizar una cocción de los alimentos en sus propios jugos. Si la tapa queda adherida al cuerpo, es por la formación de vacío que se genera en el interior de la pieza. Para poder retirar la tapa del cuerpo calentar nuevamente la pieza durante unos 30 segundos, o bien girar la perilla para que ingrese aire y se anule el vacío.',
    },
    {
        question: '¿Por qué mi producto de aluminio se puso negro?',
        answer: 'Como cualquier artículo realizado en aluminio, al hervir algunos alimentos, se puede oscurecer. Recomendamos utilizar lana de acero y limpiador abrillantador Essen o jabón blanco. También se puede hervir agua con un limón partido al medio para mantener el aluminio claro y brillante. Si las manchas son importantes, usar esponja abrasiva y limpiador en crema.',
    },
    {
        question:
            '¿Es posible renovar el antiadherente de mi olla o cacerola Essen?',
        answer: 'El antiadherente tiene una vida útil que depende del uso y los cuidados. Desde Essen no realizamos su reposición, ya que podría afectar la calidad. Si tu producto se desgastó, podés aprovechar el Plan Canje entregando tu pieza para obtener crédito a favor.',
    },
    {
        question:
            '¿Cómo funciona el plan canje de un producto Essen de aluminio?',
        answer: 'Entregando tu pieza de aluminio, tenés crédito a favor para tu próxima compra.',
    },
    {
        question: '¿Mi producto Essen es apto para el horno?',
        answer: 'Los productos Essen no son aptos para horno. Al introducirlos se dañaría el recubrimiento externo y el antiadherente interno.',
    },
    {
        question: '¿Puedo utilizar mi producto en una cocina a inducción?',
        answer: 'Las piezas Essen son aptas para cocinar en cocinas a gas y eléctricas, excepto las de inducción.',
    },
]

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Preguntas frecuentes</h2>

            <div className={styles.list}>
                {faqs.map((faq, index) => (
                    <article key={index} className={styles.item}>
                        <button
                            className={styles.question}
                            onClick={() => toggleFaq(index)}
                        >
                            <span>{faq.question}</span>
                            <span
                                className={`${styles.icon} ${
                                    openIndex === index ? styles.rotate : ''
                                }`}
                            >
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                        </button>

                        <div
                            className={`${styles.answer} ${
                                openIndex === index ? styles.open : ''
                            }`}
                        >
                            <p>{faq.answer}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
