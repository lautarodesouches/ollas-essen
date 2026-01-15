import styles from './page.module.css'
import { NEXT_PUBLIC_BASE_URL } from '@/src/lib/constants'

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <h1>Términos y Condiciones - Recetas con Essen</h1>

            <p>
                <strong>Última actualización:</strong>{' '}
                {new Date().toLocaleDateString('es-AR')}
            </p>

            <h2>1. Aceptación de los Términos</h2>
            <p>
                Al acceder y utilizar el sitio web{' '}
                <strong>{NEXT_PUBLIC_BASE_URL}</strong> (en adelante, &quot;el
                Sitio&quot;), usted acepta cumplir con estos Términos y Condiciones y
                con todas las leyes y regulaciones aplicables en la República
                Argentina.
            </p>

            <h2>2. Propiedad Intelectual</h2>
            <p>
                Todo el contenido presente en el Sitio, incluyendo pero no
                limitado a texto, gráficos, logotipos, imágenes, recetas, y
                compilación de los mismos, es propiedad de{' '}
                <strong>Recetas con Essen</strong> o de sus respectivos
                proveedores y está protegido por las leyes de propiedad
                intelectual de Argentina.
            </p>

            <h2>3. Uso del Sitio</h2>
            <p>Usted se compromete a utilizar el Sitio de manera que:</p>
            <ul>
                <li>No infrinja ningún derecho de propiedad intelectual</li>
                <li>No sea fraudulenta, ilegal o tenga propósito ilegal</li>
                <li>No cause daño o perjuicio a otros usuarios o al Sitio</li>
                <li>No transmita virus o código malicioso</li>
            </ul>

            <h2>4. Recetas y Contenido</h2>
            <p>
                Las recetas y contenido culinario proporcionado en el Sitio son
                con fines informativos y educativos.
                <strong>Recetas con Essen</strong> no se hace responsable por:
            </p>
            <ul>
                <li>Resultados específicos al seguir las recetas</li>
                <li>
                    Reacciones alérgicas o problemas de salud derivados del
                    consumo de las preparaciones
                </li>
                <li>
                    Daños o perjuicios causados por el mal uso de utensilios de
                    cocina
                </li>
            </ul>

            <h2>5. Enlaces a Terceros</h2>
            <p>
                El Sitio contiene enlaces a sitios web de terceros, incluyendo
                WhatsApp para contacto. No tenemos control sobre el contenido,
                políticas de privacidad o prácticas de estos sitios y no
                aceptamos responsabilidad por ellos.
            </p>

            <h2>6. Productos y Servicios</h2>
            <p>
                La mención de productos Essen en el Sitio es con fines
                informativos. Cualquier transacción comercial se realizará
                exclusivamente a través de los canales oficiales de Essen
                Argentina o distribuidores autorizados.
            </p>

            <h2>7. Limitación de Responsabilidad</h2>
            <p>
                <strong>Recetas con Essen</strong> no será responsable por
                ningún daño directo, indirecto, incidental, consecuente o
                especial que surja del uso o la imposibilidad de uso del Sitio,
                incluso si se ha informado sobre la posibilidad de tales daños.
            </p>

            <h2>8. Exactitud de la Información</h2>
            <p>
                Nos esforzamos por asegurar que la información en el Sitio sea
                precisa y actualizada, pero no garantizamos la completitud,
                confiabilidad o exactitud de la misma.
            </p>

            <h2>9. Modificaciones de los Términos</h2>
            <p>
                Nos reservamos el derecho de modificar estos Términos y
                Condiciones en cualquier momento. Los cambios entrarán en vigor
                inmediatamente después de su publicación en el Sitio.
            </p>

            <h2>10. Contacto</h2>
            <p>
                Para consultas sobre estos Términos y Condiciones, puede
                contactarnos a través del enlace de WhatsApp proporcionado en el
                Sitio.
            </p>

            <div className={styles.disclaimer}>
                <p>
                    <strong>Nota:</strong> El uso continuado del Sitio después
                    de cualquier modificación de estos Términos y Condiciones
                    constituye la aceptación de dichos cambios.
                </p>
            </div>
        </div>
    )
}
