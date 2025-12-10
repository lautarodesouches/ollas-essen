import { Suspense } from 'react'
import styles from './page.module.css'
import { getLines, getRandomProducts } from '@/utils'
import { List, Hero, Categories, WhyChooseEssen } from '@/components'
import CampaignTracker from './CampaignTracker'

// Forzar renderizado estático
export const dynamic = 'force-static'

// Regenerar página cada hora (ISR)
export const revalidate = 3600

export default async function Home() {
    const lines = await getLines()

    const randomProducts = await getRandomProducts()

    return (
        <>
            <Suspense fallback={null}>
                <CampaignTracker />
            </Suspense>
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
