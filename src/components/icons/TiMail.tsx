import cn from '@/lib/utils';

interface ITiMail {
    className: string;
}

const TiMail = ({ className }: ITiMail) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
            className={cn('icon icon-tabler icons-tabler-outline icon-tabler-mail', className)}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z' />
            <path d='M3 7l9 6l9 -6' />
        </svg>
    );
};
export default TiMail;
