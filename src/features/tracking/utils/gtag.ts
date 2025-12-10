import { NEXT_PUBLIC_GA_ADS_ID as GA_ID, NEXT_PUBLIC_CONVERSION_LABEL as CONV_LABEL } from '@/src/lib/constants'

export const GA_ADS_ID = GA_ID
export const CONVERSION_LABEL = CONV_LABEL

type GTagEvent = {
    action: string
    category: string
    label: string
    value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        })
    }
}

export const reportConversion = (url: string) => {
    const callback = () => {
        if (typeof window !== 'undefined') {
            window.location.href = url
        }
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('event', 'conversion', {
            send_to: `${GA_ADS_ID}/${CONVERSION_LABEL}`,
            event_callback: callback,
        })
    } else {
        callback()
    }
    return false
}

export const trackConversion = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
        ; (window as any).gtag('event', 'conversion', {
            send_to: `${GA_ADS_ID}/${CONVERSION_LABEL}`,
        })
    }
}
