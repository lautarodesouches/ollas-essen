import { WHATSAPP__NUMBER } from '@/src/lib/constants';

export const dynamic = 'force-static';

export default function WhatsappRedirect() {
    const whatsappUrl = `https://wa.me/${WHATSAPP__NUMBER}`;
    return (
        <html>
            <head>
                <meta httpEquiv="refresh" content={`0; url=${whatsappUrl}`} />
            </head>
            <body>
                <p>Redirecting to WhatsApp...</p>
            </body>
        </html>
    );
}
