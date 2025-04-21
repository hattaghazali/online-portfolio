import cn from '@/lib/utils';

interface IPiCaretRight {
    className?: string;
}

const PiCaretRight = ({ className }: IPiCaretRight) => {
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
            className={cn(
                'icon icon-tabler icons-tabler-outline icon-tabler-chevron-right',
                className
            )}
        >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M9 6l6 6l-6 6' />
        </svg>
    );
};
export default PiCaretRight;

// <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width={width ? width : 24}
//     height={height ? height : 24}
//     viewBox='0 0 24 24'
//     fill='none'
//     stroke={stroke ? stroke : 'currentColor'}
//     strokeWidth={strokeWidth ? strokeWidth : 1}
//     strokeLinecap='round'
//     strokeLinejoin='round'
//     className={cn('icon icon-tabler icons-tabler-outline icon-tabler-chevron-right')}
// >
//     <path stroke='none' d='M0 0h24v24H0z' fill='none' />
//     <path d='M9 6l6 6l-6 6' />
// </svg>
