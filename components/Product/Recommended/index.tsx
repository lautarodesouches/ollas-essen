import { List } from '@/components'
import styles from './page.module.css'
import { getProducts } from '@/utils'

interface Props {
    codigo: number
}

export default async function Recommendded({ codigo }: Props) {
    const products = await getProducts()

    const product = products.find(p => p.codigo === codigo)

    if (!product) {
        return <div>Producto no encontrado</div>
    }

    const sameNameAndSize = products.filter(
        p =>
            p.codigo !== product.codigo &&
            p.nombre === product.nombre &&
            p.medida === product.medida
    )

    const sameLine = products.filter(
        p =>
            p.codigo !== product.codigo &&
            p.linea === product.linea &&
            !sameNameAndSize.some(x => x.codigo === p.codigo)
    )

    const recommended = [...sameNameAndSize, ...sameLine].slice(0, 4)

    return (
        <section className={styles.section}>
            <h2 className={styles.section__title}>Te puede gustar:</h2>
            <List products={recommended} />
        </section>
    )
}
