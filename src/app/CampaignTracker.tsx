'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function CampaignTracker() {
    const searchParams = useSearchParams()

    useEffect(() => {
        // Capturar parámetros de tracking
        const gclid = searchParams.get('gclid')
        const utmSource = searchParams.get('utm_source')
        const utmMedium = searchParams.get('utm_medium')
        const utmCampaign = searchParams.get('utm_campaign')

        // Guardar en localStorage para uso posterior
        if (gclid) {
            localStorage.setItem('gclid', gclid)
        }

        const campaignData = {
            gclid,
            utm_source: utmSource,
            utm_medium: utmMedium,
            utm_campaign: utmCampaign,
            timestamp: new Date().toISOString()
        }

        // Guardar datos de campaña
        if (gclid || utmSource) {
            localStorage.setItem('campaignData', JSON.stringify(campaignData))
        }

        // Opcional: enviar a analytics
        if (typeof window !== 'undefined' && (window as any).gtag) {
            ; (window as any).gtag('event', 'page_view', {
                gclid,
                utm_source: utmSource,
                utm_medium: utmMedium,
                utm_campaign: utmCampaign
            })
        }
    }, [searchParams])

    // Componente invisible, solo para tracking
    return null
}
