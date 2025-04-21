import cn from '@/lib/utils';

interface ITiBolt {
    className: string;
}

const TiBolt = ({ className }: ITiBolt) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.25}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn('icon icon-tabler icons-tabler-outline icon-tabler-bolt', className)}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11' />
        </svg>
    );
};
export default TiBolt;
