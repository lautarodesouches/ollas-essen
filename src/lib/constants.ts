export const WHATSAPP__NUMBER = process.env.WHATSAPP__NUMBER!
export const INSTAGRAM__PAGE = process.env.INSTAGRAM__PAGE!
export const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!
export const NEXT_PUBLIC_GA_ADS_ID = process.env.NEXT_PUBLIC_GA_ADS_ID!
export const NEXT_PUBLIC_CONVERSION_LABEL = process.env.NEXT_PUBLIC_CONVERSION_LABEL!

const isProd = process.env.NODE_ENV === 'production';
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? '/ollas-essen' : '');

/**
 * Prepends the BASE_PATH to relative asset paths in production.
 */
export function getAssetPath(path: string): string {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
        return path;
    }
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return `${BASE_PATH}${cleanPath}`;
}

