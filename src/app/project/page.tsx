import { Metadata, NextPage } from 'next';

import { Breadcrumb } from '@/components';
import { SProjectsList } from '@/containers';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Explore a collection of my projects in software testing and web development.'
};

const Projects: NextPage = () => {
    return (
        <>
            <Breadcrumb show_p_detail={false} p_list_active />
            <SProjectsList />
        </>
    );
};
export default Projects;
