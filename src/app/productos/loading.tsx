import ProductSkeleton from '@/src/features/products/components/ProductSkeleton'
import FiltersSkeleton from '@/src/features/products/components/ProductFilter/skeleton'
import styles from './page.module.css'

export default function Loading() {
    return (
        <div className={styles.container}>
            <FiltersSkeleton />
            <ProductSkeleton count={10} />
        </div>
    )
}
