import styles from './page.module.css'

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <h1>Política de Privacidad</h1>
            <p>
                Respetamos tu privacidad y nos comprometemos a proteger tus
                datos personales. Esta política explica cómo recopilamos, usamos
                y protegemos tu información.
            </p>

            <h2>1. Información que recopilamos</h2>
            <p>
                Podemos recopilar información personal como nombre, correo
                electrónico y otros datos relevantes para el uso de nuestros
                servicios.
            </p>
            <h2>2. Uso de la información</h2>
            <p>
                Utilizamos tu información para mejorar nuestros servicios,
                enviar comunicaciones relevantes y cumplir con nuestras
                obligaciones legales.
            </p>
            <h2>3. Protección de datos</h2>
            <p>
                Implementamos medidas de seguridad para proteger tu información
                contra accesos no autorizados, alteraciones o destrucción.
            </p>
        </div>
    )
}
