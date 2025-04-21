import { Metadata, NextPage } from 'next';
import { SHero, SSkill, SExp, SProject } from '@/containers';

export const metadata: Metadata = {
    title: 'Hatta Ghazali'
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
