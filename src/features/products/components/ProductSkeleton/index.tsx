import styles from './styles.module.css'

interface SkeletonCardProps {
    count?: number
}

export default function ProductSkeleton({ count = 10 }: SkeletonCardProps) {
    return (
        <div className={styles.skeletonGrid}>
            {Array.from({ length: count }).map((_, index) => (
                <div key={index} className={styles.skeletonCard}>
                    <div className={`${styles.skeleton} ${styles.skeletonImage}`} />
                    <div className={`${styles.skeleton} ${styles.skeletonTitle}`} />
                    <div className={`${styles.skeleton} ${styles.skeletonButton}`} />
                </div>
            ))}
        </div>
    )
}
