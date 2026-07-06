import { INSTAGRAM__PAGE } from '@/src/lib/constants';

export const dynamic = 'force-static';

export default function InstagramRedirect() {
    return (
        <html>
            <head>
                <meta httpEquiv="refresh" content={`0; url=${INSTAGRAM__PAGE}`} />
            </head>
            <body>
                <p>Redirecting to Instagram...</p>
            </body>
        </html>
    );
}
