interface ISocialLinks {
    id: number;
    title: string;
    links: string;
}

const social_links: ISocialLinks[] = [
    {
        id: 1,
        title: 'LinkedIn',
        links: 'https://www.linkedin.com/in/hattaghazali'
    },
    {
        id: 2,
        title: 'GitHub',
        links: 'https://github.com/hattaghazali'
    },
    {
        id: 3,
        title: 'Figma',
        links: 'https://www.figma.com/@hattaghazali'
    },
    {
        id: 4,
        title: 'Instagram',
        links: 'https://www.instagram.com/hattacr7/'
    },
    {
        id: 5,
        title: 'zulhatta73@gmail.com',
        links: 'mailto:zulhatta73@gmail.com'
    }
];

export { social_links };
