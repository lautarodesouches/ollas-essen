import styles from './page.module.css'
import { NEXT_PUBLIC_BASE_URL } from '@/src/lib/constants'

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <h1 className="text-3xl font-bold mb-6">
                Política de Privacidad - Recetas con Essen
            </h1>

            <div className="space-y-6">
                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        1. Identidad del Responsable
                    </h2>
                    <p>
                        El sitio web{' '}
                        <strong>{NEXT_PUBLIC_BASE_URL}</strong> (en
                        adelante, &quot;el Sitio&quot;) es operado por{' '}
                        <strong>Recetas con Essen</strong>.
                    </p>
                    <p className="mt-2">
                        Para contactarnos sobre temas relacionados con esta
                        política de privacidad, puede hacerlo iniciando una
                        conversación por WhatsApp desde el link provisto en el
                        Sitio.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        2. Información que Recopilamos
                    </h2>
                    <p>
                        En nuestro Sitio,{' '}
                        <strong>no recopilamos de forma directa</strong> ni
                        almacenamos datos personales como nombre, correo
                        electrónico o teléfono. La interacción con los usuarios
                        que tienen interés en nuestros productos se realiza
                        exclusivamente a través de WhatsApp, plataforma de
                        terceros.
                    </p>
                    <p className="mt-2">
                        Sin embargo, utilizamos servicios de terceros que pueden
                        recopilar información de forma automática y no personal:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>
                            <strong>Google Analytics:</strong> Esta herramienta
                            recopila información anónima sobre el comportamiento
                            de los usuarios en el Sitio, como las páginas
                            visitadas, el tiempo de permanencia, el tipo de
                            navegador y el sistema operativo, la dirección IP
                            (que puede ser anonimizada), y la ubicación general
                            (a nivel de ciudad o región, no dirección
                            específica).
                        </li>
                        <li>
                            <strong>Hotjar:</strong> Esta herramienta nos ayuda
                            a comprender cómo los usuarios interactúan con
                            nuestro Sitio a través de mapas de calor y
                            grabaciones de sesiones anónimas. Toda la
                            información recopilada es anónima y agregada.
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        3. Cookies y Tecnologías Similares
                    </h2>
                    <p>
                        Utilizamos cookies y tecnologías similares a través de
                        nuestros proveedores de analytics (Google Analytics y
                        Hotjar) para:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Analizar el tráfico y uso del Sitio</li>
                        <li>Mejorar la experiencia del usuario</li>
                        <li>
                            Comprender cómo los visitantes interactúan con
                            nuestro contenido
                        </li>
                    </ul>
                    <p className="mt-2">
                        Al utilizar nuestro Sitio, usted acepta el uso de
                        cookies de acuerdo con esta política. Puede gestionar
                        sus preferencias de cookies a través de la configuración
                        de su navegador.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        4. Finalidad del Tratamiento
                    </h2>
                    <p>
                        La información recopilada por las herramientas de
                        analytics se utiliza para:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Analizar y mejorar el rendimiento del Sitio</li>
                        <li>
                            Comprender las preferencias de nuestros visitantes
                        </li>
                        <li>Optimizar la experiencia de usuario</li>
                        <li>Medir la efectividad de nuestro contenido</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        5. Transferencias a Terceros
                    </h2>
                    <p>
                        Cuando usted hace clic en el enlace de WhatsApp
                        proporcionado en nuestro Sitio, será dirigido a la
                        plataforma de WhatsApp, propiedad de Meta Platforms,
                        Inc. Esta transferencia está sujeta a la Política de
                        Privacidad de WhatsApp.
                    </p>
                    <p className="mt-2">
                        Los datos recopilados por Google Analytics y Hotjar
                        están sujetos a las políticas de privacidad de estas
                        empresas.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        6. Sus Derechos
                    </h2>
                    <p>
                        De acuerdo con la Ley de Protección de Datos Personales
                        Argentina (Ley 25.326), usted tiene derecho a:
                    </p>
                    <ul className="list-disc ml-6 mt-2 space-y-2">
                        <li>Acceder a sus datos personales</li>
                        <li>
                            Solicitar la rectificación o actualización de sus
                            datos
                        </li>
                        <li>Solicitar la supresión de sus datos</li>
                        <li>Revocar el consentimiento otorgado</li>
                    </ul>
                    <p className="mt-2">
                        Para ejercer estos derechos, puede contactarnos a través
                        de WhatsApp.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">7. Seguridad</h2>
                    <p>
                        Implementamos medidas de seguridad técnicas y
                        organizativas para proteger la información recopilada a
                        través de nuestro Sitio, aunque recordamos que ninguna
                        transmisión por internet es 100% segura.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">
                        8. Cambios en esta Política
                    </h2>
                    <p>
                        Nos reservamos el derecho de modificar esta Política de
                        Privacidad en cualquier momento. Cualquier cambio será
                        publicado en esta página con la fecha de actualización
                        correspondiente.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-3">9. Contacto</h2>
                    <p>
                        Si tiene alguna pregunta sobre esta Política de
                        Privacidad, puede contactarnos a través del enlace de
                        WhatsApp disponible en nuestro Sitio.
                    </p>
                </section>

                <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                    <p className="text-sm text-gray-600">
                        <strong>Nota:</strong> Esta política fue actualizada el{' '}
                        {new Date().toLocaleDateString('es-AR')}y se aplica
                        exclusivamente al territorio de la República Argentina.
                    </p>
                </div>
            </div>
        </div>
    )
}
