import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://hatta.vercel.app';
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/project', '/project/*'],
            disallow: ['/event']
        },
        sitemap: `${baseUrl}/sitemap.xml`
    };
}
