import Image from 'next/image'
import styles from './page.module.css'

interface Props {
    descripcion: string
    comensales: number
    videos?: string[]
    images?: string[]
}

export default function ProductEmotional({ descripcion, comensales, videos = [], images = [] }: Props) {

    // Logic: First video OR Last Image
    const hasVideo = videos && videos.length > 0;
    let mediaUrl = hasVideo ? videos[0] : (images.length > 0 ? `/images/products/${images[images.length - 1]}` : null);

    // Check if it's a local video file
    const isLocalVideo = hasVideo && mediaUrl && (mediaUrl.endsWith('.mp4') || mediaUrl.endsWith('.webm'));

    // Prepend path for local videos if needed
    if (isLocalVideo && mediaUrl && !mediaUrl.startsWith('/') && !mediaUrl.startsWith('http')) {
        mediaUrl = `/videos/${mediaUrl}`;
    }

    return (
        <section className={styles.emotional}>
            <div className={styles.textSide}>
                <h3 className={styles.title}>
                    ¿Por qué es <span className={styles.highlight}>perfecta para vos</span>?
                </h3>
                <div className={styles.description}>
                    <p>{descripcion}</p>
                </div>
            </div>

            <div className={styles.imageSide}>
                {hasVideo && mediaUrl ? (
                    isLocalVideo ? (
                        <video
                            src={mediaUrl}
                            controls
                            playsInline
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', minHeight: '300px', backgroundColor: '#000' }}
                        />
                    ) : (
                        <iframe
                            width="100%"
                            height="100%"
                            src={mediaUrl}
                            title="Video del producto"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            style={{ borderRadius: '12px', minHeight: '300px' }}
                        ></iframe>
                    )
                ) : (
                    mediaUrl ? (
                        <Image
                            src={mediaUrl}
                            alt="Essen Lifestyle"
                            width={500}
                            height={500}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                    ) : (
                        // Fallback
                        <div style={{
                            width: '100%', height: '100%', background: '#eee', borderRadius: '12px', minHeight: '300px'
                        }} />
                    )
                )}
            </div>
        </section>
    )
}
