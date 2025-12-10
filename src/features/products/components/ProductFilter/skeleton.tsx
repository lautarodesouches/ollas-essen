import styles from './skeleton.module.css'

export default function FiltersSkeleton() {
    return (
        <div className={styles.filtersSkeleton}>
            {/* Línea */}
            <div className={styles.fieldSkeleton}>
                <div className={styles.labelSkeleton} />
                <div className={styles.inputSkeleton} />
            </div>

            {/* Comensales */}
            <div className={styles.fieldSkeleton}>
                <div className={styles.labelSkeleton} />
                <div className={styles.inputSkeleton} />
            </div>

            {/* Medida */}
            <div className={styles.fieldSkeleton}>
                <div className={styles.labelSkeleton} />
                <div className={styles.inputSkeleton} />
            </div>

            {/* Nombre */}
            <div className={styles.fieldSkeleton}>
                <div className={styles.labelSkeleton} />
                <div className={styles.inputSkeleton} />
            </div>
        </div>
    )
}
