import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/src/layouts/Header'
import Footer from '@/src/layouts/Footer'
import Whatsapp from '@/src/layouts/Whatsapp'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { NEXT_PUBLIC_GA_ADS_ID } from '../lib/constants'

const poppins = Poppins({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Recetas con Essen',
    description:
        'Descubrí recetas deliciosas, prácticas y caseras preparadas con productos Essen. Inspirate a cocinar con más sabor, estilo y facilidad en tu cocina de todos los días.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es">
            <head>
                <link rel="icon" href="/images/favicon.ico" sizes="any" />
            </head>
            <body className={`${poppins.className}`}>
                <Header />
                <main>{children}</main>
                <Footer />
                <Whatsapp />
            </body>
            <GoogleTagManager gtmId="GTM-N444Q5QS" />
            <GoogleAnalytics gaId={NEXT_PUBLIC_GA_ADS_ID} />
        </html>
    )
}
