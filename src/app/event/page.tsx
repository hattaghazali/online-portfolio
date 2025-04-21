import { Metadata, NextPage } from 'next';

import { SEvents } from '@/containers';
import { Breadcrumb } from '@/components';

export const metadata: Metadata = {
    title: 'Events'
};

const PageEvents: NextPage = () => {
    return (
        <main>
            <Breadcrumb show_p_detail={false} isEventPage={true} p_list_active={false} />
            <SEvents />
        </main>
    );
};
export default PageEvents;
