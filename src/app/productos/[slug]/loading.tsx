import styles from './loading.module.css'

export default function Loading() {
    return (
        <div className={styles.skeleton}>
            {/* Breadcrumb Skeleton */}
            <div className={`${styles.pulse} ${styles.breadcrumb}`} />

            <div className={styles.grid}>
                {/* Left Column: Gallery */}
                <div className={styles.galleryCol}>
                    <div className={`${styles.pulse} ${styles.gallery}`} />
                    <div className={styles.thumbnails}>
                        <div className={`${styles.pulse} ${styles.thumb}`} />
                        <div className={`${styles.pulse} ${styles.thumb}`} />
                        <div className={`${styles.pulse} ${styles.thumb}`} />
                        <div className={`${styles.pulse} ${styles.thumb}`} />
                    </div>
                </div>

                {/* Right Column: Info */}
                <div className={styles.info}>
                    <div className={`${styles.pulse} ${styles.technicalName}`} /> {/* Linea Tag */}
                    <div className={`${styles.pulse} ${styles.salesTitle}`} /> {/* H1 */}
                    <div className={`${styles.pulse} ${styles.sku}`} /> {/* SKU */}

                    {/* Specs Pills */}
                    <div className={styles.specs}>
                        <div className={`${styles.pulse} ${styles.specItem}`} />
                        <div className={`${styles.pulse} ${styles.specItem}`} />
                        <div className={`${styles.pulse} ${styles.specItem}`} />
                    </div>

                    {/* Price Block (Special Style) */}
                    <div className={styles.priceBlock} />

                    {/* Buttons */}
                    <div className={styles.actions}>
                        <div className={`${styles.pulse} ${styles.button} ${styles.btnPrimary}`} />
                        <div className={`${styles.pulse} ${styles.button} ${styles.btnSecondary}`} />
                    </div>

                    {/* Description Intro */}
                    <div className={styles.description}>
                        <div className={`${styles.pulse} ${styles.textLine}`} />
                        <div className={`${styles.pulse} ${styles.textLine}`} />
                        <div className={`${styles.pulse} ${styles.textLine}`} />
                        <div className={`${styles.pulse} ${styles.textLine}`} style={{ width: '80%' }} />
                    </div>
                </div>
            </div>

            {/* Minimal hint of separators / next section, but keeping it light as requested */}
            <div className={styles.separator} />
        </div>
    )
}
