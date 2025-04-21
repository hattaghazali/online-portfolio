'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

import cn from '@/lib/utils';

const NavBottom = () => {
    const pathname = usePathname();

    const data_navbtm = [
        {
            id: 1,
            label: 'MAIN',
            link: '/'
        },
        {
            id: 2,
            label: 'PROJECTS',
            link: '/project'
        },
        {
            id: 3,
            label: 'EVENTS',
            link: '/event'
        }
    ];

    return (
        <nav className={cn('fixed bottom-8 left-1/2 z-50', '-translate-x-1/2 md:bottom-12')}>
            <ul className={cn('bg-tertiary rounded-full', 'flex gap-x-0.5 p-2')}>
                {data_navbtm.map((i) => {
                    const isActive =
                        i.link === '/' ? pathname === i.link : pathname.startsWith(i.link);

                    return (
                        <li
                            key={i.id}
                            className={cn(
                                'relative rounded-full p-0.5',
                                'border-[0.25px]',
                                isActive ? 'border-accent' : 'border-transparent'
                            )}
                        >
                            <Link
                                className={cn(
                                    'flex h-10 items-center rounded-full px-4 text-sm',
                                    isActive
                                        ? 'text-tertiary bg-accent font-medium'
                                        : 'text-primary hover:bg-white/10'
                                )}
                                href={i.link}
                            >
                                {i.label}
                            </Link>
                            <div
                                className={cn(
                                    'bg-tertiary absolute right-1/2 bottom-1.5 h-[5px] w-[5px] rounded-full',
                                    isActive ? 'block' : 'hidden'
                                )}
                            ></div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default NavBottom;
