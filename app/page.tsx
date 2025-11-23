import styles from './page.module.css'
import { getLines, getRandomProducts } from '@/utils'
import { List, Hero, Categories, WhyChooseEssen } from '@/components'

export default async function Home() {
    const lines = await getLines()

    const randomProducts = await getRandomProducts()

    return (
        <>
            <Hero />
            <Categories lines={lines} />
            <section className={styles.products}>
                <h2 className={styles.products__title}>Productos Destacados</h2>
                <ul className={styles.products__list}>
                    <List products={randomProducts} />
                </ul>
            </section>
            <WhyChooseEssen />
        </>
    )
}
