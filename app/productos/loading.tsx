import ProductSkeleton from '@/components/Product/Skeleton'
import FiltersSkeleton from '@/components/Product/Filter/skeleton'
import styles from './page.module.css'

export default function Loading() {
    return (
        <div className={styles.container}>
            <FiltersSkeleton />
            <ProductSkeleton count={10} />
        </div>
    )
}
