'use client';

import { useEffect, useState } from 'react';
import { TiArrowUp } from '@/components';
import cn from '@/lib/utils';

const ScrollTop = () => {
    const [showGoTop, setShowGoTop] = useState<Boolean>(false);

    const handleVisibleButton = () => {
        setShowGoTop(window.pageYOffset > 900);
    };

    const handleScrollUp = () => {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleButton);
        return () => window.removeEventListener('scroll', handleVisibleButton);
    }, []);

    return (
        <div className={cn('hidden sm:block')}>
            <button
                type='button'
                onClick={handleScrollUp}
                className={cn(
                    'group bg-tertiary cursor-def animate_1 fixed right-7 z-50 h-[52px] w-[52px] rounded-full hover:bg-[hsl(26,16%,25%)]',
                    'inline-flex items-center justify-center',
                    'bottom-8 sm:bottom-12',
                    showGoTop ? 'opacity-100' : 'opacity-0'
                )}
            >
                <TiArrowUp className='stroke-secondary animate_1 group-hover:-translate-y-0.5' />
            </button>
        </div>
    );
};
export default ScrollTop;
