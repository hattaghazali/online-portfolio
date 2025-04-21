import localFont from 'next/font/local';

const gsans = localFont({
    src: [
        {
            path: '../../public/fonts/generalsans/GeneralSans-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/generalsans/GeneralSans-Medium.woff2',
            weight: '500',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-gsans',
    preload: false,
    fallback: ['Arial', 'Helvetica', 'sans-serif']
});

const dmsans = localFont({
    src: [
        {
            path: '../../public/fonts/dmsans/dmsans_light.ttf',
            weight: '300',
            style: 'normal'
        },
        {
            path: '../../public/fonts/dmsans/dmsans_regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/dmsans/dmsans_medium.ttf',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/fonts/dmsans/dmsans_semibold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: '../../public/fonts/dmsans/dmsans_bold.ttf',
            weight: '700',
            style: 'normal'
        }
    ],
    display: 'swap',
    variable: '--font-dmsans',
    preload: false,
    fallback: ['Arial', 'Helvetica', 'sans-serif']
});

export { dmsans, gsans };
