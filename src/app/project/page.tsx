import { Metadata, NextPage } from 'next';

import { Breadcrumb } from '@/components';
import { SProjectsList } from '@/containers';

export const metadata: Metadata = {
    title: 'Projects'
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
