import { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
    title: {
        default: '',
        template: '%s | Case Study'
    }
};

interface ILayoutProject {
    children: React.ReactNode;
}

const LayoutProject = ({ children }: ILayoutProject) => {
    return <>{children}</>;
};
export default LayoutProject;
