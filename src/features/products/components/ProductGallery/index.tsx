'use client'

import { useState, useRef, MouseEvent, UIEvent } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

interface Props {
    images: string[]
    productName: string
}

export default function ProductGallery({ images, productName }: Props) {
    const [activeIndex, setActiveIndex] = useState(0)

    // Mobile Scroll State
    const [mobileIndex, setMobileIndex] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)

    // Desktop Zoom Helpers
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - left) / width) * 100
        const y = ((e.clientY - top) / height) * 100

        // Ensure CSS variables are updated efficiently
        e.currentTarget.style.setProperty('--x', `${x}%`)
        e.currentTarget.style.setProperty('--y', `${y}%`)
    }

    // Mobile Scroll Handler
    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        const { scrollLeft, clientWidth } = e.currentTarget
        const newIndex = Math.round(scrollLeft / clientWidth)
        if (newIndex !== mobileIndex) {
            setMobileIndex(newIndex)
        }
    }

    // Desktop Thumbnail Click
    const scrollToImage = (index: number) => {
        setActiveIndex(index)
    }

    return (
        <div className={styles.galleryWrapper}>

            {/* --- MOBILE VIEW: SNAP CAROUSEL --- */}
            <div
                className={styles.mobileCarousel}
                onScroll={handleScroll}
                ref={scrollRef}
            >
                {images.map((src, i) => (
                    <div key={`mob-${i}`} className={styles.snapItem}>
                        <Image
                            src={`/images/products/${src}`}
                            alt={`${productName} - Vista ${i + 1}`}
                            width={600}
                            height={600}
                            className={styles.mobileImage}
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                            {...(i === 0 ? { fetchPriority: "high" } : {})}
                            sizes="100vw"
                            quality={i === 0 ? 75 : 70}
                        />
                    </div>
                ))}
            </div>

            {/* Mobile Indicators */}
            <div className={styles.mobileIndicators}>
                {images.map((_, i) => (
                    <div
                        key={`dot-${i}`}
                        className={`${styles.dot} ${i === mobileIndex ? styles.dotActive : ''}`}
                    />
                ))}
            </div>


            {/* --- DESKTOP VIEW: STICKY GRID --- */}
            <div className={styles.desktopGallery}>
                {/* Main Stage with Zoom Lens */}
                <div
                    className={styles.mainStage}
                    onMouseMove={handleMouseMove}
                    style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
                >
                    <div className={styles.zoomContainer}>
                        <Image
                            src={`/images/products/${images[activeIndex]}`}
                            alt={`${productName} - Vista Principal`}
                            fill
                            className={styles.desktopImage}
                            priority
                            loading="eager"
                            fetchPriority="high"
                            sizes="600px"
                            quality={75}
                        />
                    </div>
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                    <div className={styles.thumbnailsGrid}>
                        {images.map((src, i) => (
                            <button
                                key={`thumb-${i}`}
                                className={`${styles.thumbButton} ${i === activeIndex ? styles.thumbActive : ''}`}
                                onClick={() => scrollToImage(i)}
                                aria-label={`Ver imagen ${i + 1}`}
                            >
                                <Image
                                    src={`/images/products/${src}`}
                                    alt={`${productName} - Miniatura ${i + 1}`}
                                    fill
                                    className={styles.thumbImg}
                                    sizes="150px"
                                    quality={70}
                                />
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
