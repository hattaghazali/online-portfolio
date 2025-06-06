import cn from '@/lib/utils';

interface ITiArrowUp {
    className?: string;
}

const TiArrowUp = ({ className }: ITiArrowUp) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn('icon icon-tabler icons-tabler-outline icon-tabler-arrow-up', className)}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M12 5l0 14' />
            <path d='M18 11l-6 -6' />
            <path d='M6 11l6 -6' />
        </svg>
    );
};
export default TiArrowUp;
