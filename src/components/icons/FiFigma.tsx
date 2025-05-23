import cn from '@/lib/utils';

interface IFiFigma {
    className: string;
}

const FiFigma = ({ className }: IFiFigma) => {
    return (
        <svg
            className={cn('', className)}
            stroke='currentColor'
            fill='none'
            strokeWidth='2'
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z'></path>
            <path d='M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z'></path>
            <path d='M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z'></path>
            <path d='M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z'></path>
            <path d='M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z'></path>
        </svg>
    );
};
export default FiFigma;
