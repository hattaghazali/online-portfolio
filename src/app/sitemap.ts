import type { MetadataRoute } from 'next';
import { data_projects } from '@/database_local/data-projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://hatta.vercel.app';

    const projectPageSlug = data_projects.map((i) => {
        return {
            url: `${baseUrl}/project/${i.p_id}`,
            lastModified: new Date()
        };
    });

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/project`,
            lastModified: new Date()
        },
        {
            url: `${baseUrl}/event`,
            lastModified: new Date()
        },
        ...projectPageSlug
    ];
}
