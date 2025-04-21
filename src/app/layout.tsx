import { Metadata } from 'next';
import { dmsans, gsans } from '@/lib/fonts';
import { NavTop, Footer, ScrollTop, NavBottom } from '@/components';
import '@/styles/globals.css';
import cn from '@/lib/utils';

export const metadata: Metadata = {
    title: {
        default: 'Hatta Ghazali',
        template: '%s | Hatta Ghazali'
    },
    description: 'test description',
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
            <body className={cn(`${dmsans.variable} ${gsans.variable}`)}>
                <ScrollTop />
                <NavTop />
                {children}
                <NavBottom />
                <Footer />
            </body>
        </html>
    );
};
export default LayoutGlobal;
