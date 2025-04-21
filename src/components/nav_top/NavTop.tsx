'use client';
import { useState } from 'react';
import Link from 'next/link';
import cn from '@/lib/utils';

import { SocialIcon, Logo, TiMail, TiBurger, TiLinkedIn, TiGitHub, TiFigma } from '@/components';
import { social_links } from '@/database_local/home';

const NavTop = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const handleShowContent = () => {
        setIsShow((prevState) => !prevState);
    };

    return (
        <nav
            className={cn(
                'border-b-tertiary/10 relative border-b',
                'h-14 max-w-[1920px] px-6 lg:mx-auto',
                'flex items-center justify-between'
            )}
        >
            <Logo />
            <div className={cn('flex items-center gap-x-3')}>
                <h6 className={cn('hidden text-lg tracking-[-1px] lg:block')}>Let's Connect</h6>
                <span className='bg-tertiary/20 hidden h-6 w-[1.5px] lg:block'></span>
                <SocialIcon className={cn('hidden lg:flex lg:items-center lg:gap-x-2')} />
                <span
                    className={cn(
                        'h-10 w-10 rounded-full',
                        'inline-flex items-center justify-center',
                        'lg:hidden',
                        isShow ? 'bg-tertiary' : 'bg-secondary hover:bg-secondary-dark'
                    )}
                    onClick={handleShowContent}
                >
                    <TiBurger className={cn(isShow ? 'stroke-primary' : 'stroke-tertiary')} />
                </span>
            </div>

            {/* MODAL */}
            <div
                className={cn(
                    'bg-secondary absolute right-5 -bottom-12 z-10 translate-y-[168px] rounded-lg p-1.5',
                    // isShow ? '-translate-y-[118px] opacity-100' : 'translate-y-[118px] opacity-50'
                    isShow ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                )}
            >
                <ul className={cn('flex flex-col gap-y-2')}>
                    {social_links.map((i, index) => (
                        <li key={i.id}>
                            <Link
                                href={i.links}
                                target='_blank'
                                onClick={handleShowContent}
                                className={cn(
                                    'hover:bg-secondary-dark text-light flex items-center gap-x-2 rounded-sm px-2 py-1',
                                    i.id === 4 && 'bg-secondary-dark'
                                )}
                            >
                                {i.id === 1 && (
                                    <span>
                                        <TiLinkedIn className='' />
                                    </span>
                                )}
                                {i.id === 2 && (
                                    <span>
                                        <TiGitHub className='' />
                                    </span>
                                )}
                                {i.id === 3 && (
                                    <span>
                                        <TiFigma className='' />
                                    </span>
                                )}
                                {i.id === 4 && (
                                    <span>
                                        <TiMail className='' />
                                    </span>
                                )}
                                <span>{i.title}</span>
                            </Link>
                            {i.id === 3 && (
                                <div className={cn('bg-tertiary/20 mt-2 h-[1px] w-full')}></div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
export default NavTop;

{
    /* <li
className={cn(
    'hover:bg-secondary-dark text-light flex items-center gap-x-2 rounded-sm px-2 py-1'
)}
>
<span>
    <TiLinkedIn className='' />
</span>
<span className={cn('trim')}>LinkedIn</span>
</li>
<li
className={cn(
    'hover:bg-secondary-dark text-light flex items-center gap-x-2 rounded-sm px-2 py-1'
)}
>
<span>
    <TiFigma className='' />
</span>
<span className={cn('trim')}>Figma</span>
</li>
<li
className={cn(
    'hover:bg-secondary-dark text-light flex items-center gap-x-2 rounded-sm px-2 py-1'
)}
>
<span>
    <TiGitHub className='' />
</span>
<span className={cn('trim')}>GitHub</span>
</li>
<li className={cn('bg-tertiary/20 h-[1px] w-full')}></li>
<li
className={cn(
    'bg-secondary-dark text-light flex items-center gap-x-2 rounded-sm px-2 py-1'
)}
>
<span>
    <TiMail className='' />
</span>
<span className={cn('trim')}>zulhatta73@gmail.com</span>
</li> */
}

{
    /* <nav className='border-b-tertiary/10 mx-auto flex max-w-[1800px] items-center justify-between border-b py-3'>
<Logo />
<ul className='flex items-center gap-x-3'>
    {social_links.map((item) => (
        <li key={item.id}>
            <SocialIcon social_link={item.links}>
                {item.id === 1 && (
                    <PiLinkedInz className='fill-tertiary/85 animate_1 h-5 w-5 group-hover:-translate-y-0.5' />
                )}
                {item.id === 2 && (
                    <PiGitHub className='fill-tertiary/85 animate_1 h-5 w-5 group-hover:-translate-y-0.5' />
                )}
                {item.id === 3 && (
                    <PiFigma className='fill-tertiary animate_1 h-5 w-5 group-hover:-translate-y-0.5' />
                )}
                {item.id === 4 && (
                    <TiMail className='stroke-tertiary animate_1 h-5 w-5 group-hover:-translate-y-0.5' />
                )}
            </SocialIcon>
        </li>
    ))}
</ul>
</nav> */
}
