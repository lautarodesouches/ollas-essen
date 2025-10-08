import styles from './page.module.css'

export default function TermsAndConditions() {
    return (
        <div className={styles.container}>
            <h1>Términos y Condiciones</h1>
            <p>
                Al usar nuestro sitio web, aceptas los siguientes términos y
                condiciones.
            </p>

            <h2>1. Uso del sitio</h2>
            <p>
                El contenido de este sitio es solo para información general y
                puede cambiar sin previo aviso.
            </p>

            <h2>2. Propiedad intelectual</h2>
            <p>
                Todo el contenido de este sitio web es propiedad de [Tu Empresa]
                y no puede ser reproducido sin permiso.
            </p>

            <h2>3. Limitación de responsabilidad</h2>
            <p>
                [Tu Empresa] no se hace responsable por daños derivados del uso
                del sitio o de la información contenida en él.
            </p>
        </div>
    )
}
