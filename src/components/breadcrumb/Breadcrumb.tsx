import Link from 'next/link';

import { Container, PiCaretRight } from '@/components';
import cn from '@/lib/utils';

interface IBreadcrumb {
    p_id?: number;
    p_list_active?: boolean;
    show_p_detail: boolean;
    p_title?: string;
    isEventPage?: boolean;
}

const Breadcrumb = ({ p_id, p_list_active, show_p_detail, p_title, isEventPage }: IBreadcrumb) => {
    return (
        <Container className='mt-4 mb-20'>
            <nav className={cn('inline-flex rounded-full')}>
                <ul className={cn('flex items-center gap-x-1')}>
                    <li>
                        <Link href='/' className='text-light hover:underline'>
                            Main
                        </Link>
                    </li>
                    <li>
                        <PiCaretRight className='stroke-light' />
                    </li>
                    <li>
                        {isEventPage ? (
                            <Link
                                href='/event'
                                className={cn(
                                    isEventPage ? 'text-tertiary font-medium' : 'text-light',
                                    'hover:underline'
                                )}
                            >
                                Events
                            </Link>
                        ) : (
                            <Link
                                href='/project'
                                className={cn(
                                    p_list_active ? 'text-tertiary font-medium' : 'text-light',
                                    'hover:underline'
                                )}
                            >
                                Project List
                            </Link>
                        )}
                    </li>
                    {show_p_detail ? (
                        <>
                            <li>
                                <PiCaretRight className='stroke-light' />
                            </li>
                            <li>
                                <p className='font-medium'>{p_title}</p>
                            </li>
                        </>
                    ) : null}
                </ul>
            </nav>
        </Container>
    );
};
export default Breadcrumb;
