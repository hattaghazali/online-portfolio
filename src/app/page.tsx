import { Metadata, NextPage } from 'next';
import { SHero, SSkill, SExp, SProject } from '@/containers';

export const metadata: Metadata = {
    title: 'Hatta Ghazali | Personal Portfolio',
    description: `A software tester currently diving into web development, transforming ideas into digital products.`,
    keywords: ['Hatta Ghazali', 'Hatta Ghazali Personal Portfolio']
};

const Home: NextPage = () => {
    return (
        <main>
            <SHero />
            <SSkill />
            <SExp />
            <SProject />
        </main>
    );
};
export default Home;
