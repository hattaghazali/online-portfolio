import { Metadata } from 'next';

import { dmsans, gsans } from '@/lib/fonts';
import { NavTop, Footer, ScrollTop, NavBottom } from '@/components';
import '@/styles/globals.css';
import cn from '@/lib/utils';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
    title: {
        default: 'Hatta Ghazali',
        template: '%s | Hatta Ghazali'
    },
    description: `Hatta Ghazali Personal Portfolio`,
    keywords: ['Hatta Ghazali', 'Hatta Ghazali Personal Portfolio'],
    icons: {
        icon: '/favicons/favicon.ico', // Standard favicon
        shortcut: '/favicons/favicon.ico', // Optional: Shortcut icon
        apple: '/favicons/apple-touch-icon.png' // Apple touch icon
        // other: [
        //     {
        //         rel: 'icon',
        //         url: '/favicons/icon-192x192.png' // Additional icon (e.g., for modern browsers)
        //     }
        // ]
    }
};

interface ILayoutGlobal {
    children: React.ReactNode;
}

const LayoutGlobal = ({ children }: ILayoutGlobal) => {
    return (
        <html className='scroll-smooth'>
            <head>
                <meta
                    name='google-site-verification'
                    content='CtCiHzCuR_qm0eeBv3HVEeqkCdjbA0qYBgb_ueJ0_l8'
                />
            </head>
            <body className={cn(`${dmsans.variable} ${gsans.variable}`)}>
                <ScrollTop />
                <NavTop />
                {children}
                <NavBottom />
                <Footer />
                <Analytics />
            </body>
        </html>
    );
};
export default LayoutGlobal;
