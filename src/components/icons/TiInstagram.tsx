import cn from '@/lib/utils';

interface ITiInstagram {
    className: string;
}

const TiInstagram = ({ className }: ITiInstagram) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={1}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn(
                'icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram',
                className
            )}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
            <path d='M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />
            <path d='M16.5 7.5v.01' />
        </svg>
    );
};
export default TiInstagram;
