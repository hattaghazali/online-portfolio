import cn from '@/lib/utils';

interface ITiBurger {
    className?: string;
}
const TiBurger = ({ className }: ITiBurger) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={22}
            height={22}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn('icon icon-tabler icons-tabler-outline icon-tabler-category', className)}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M4 4h6v6h-6z' />
            <path d='M14 4h6v6h-6z' />
            <path d='M4 14h6v6h-6z' />
            <path d='M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
        </svg>
    );
};
export default TiBurger;
