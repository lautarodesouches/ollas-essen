import { Suspense } from 'react'
import styles from './page.module.css'
import { getLines, getRandomProducts } from '@/src/features/products/utils'
import ProductList from '@/src/features/products/components/ProductList'
import Hero from '@/src/features/home/components/Hero'
import Categories from '@/src/features/home/components/Categories'
import WhyChooseEssen from '@/src/features/home/components/WhyChooseEssen'
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
                    <ProductList products={randomProducts} />
                </ul>
            </section>
            <WhyChooseEssen />
        </>
    )
}
