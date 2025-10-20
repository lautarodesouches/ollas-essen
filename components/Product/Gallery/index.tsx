'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './page.module.css'

interface ProductGalleryProps {
    images: string[]
}

export default function Gallery({ images }: ProductGalleryProps) {
    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <div className={styles.gallery}>
            {/* Imagen principal */}
            <div className={styles.mainImage}>
                <Image
                    src={`/images/products/${selectedImage}`}
                    alt="Product image"
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                />
            </div>

            {/* Miniaturas */}
            <div className={styles.thumbnails}>
                {images.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => setSelectedImage(img)}
                        className={`${styles.thumb} ${
                            img === selectedImage ? styles.active : ''
                        }`}
                    >
                        <Image
                            src={`/images/products/${img}`}
                            alt={`Thumbnail ${i + 1}`}
                            fill
                            className={styles.thumbImage}
                            sizes="80px"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}
