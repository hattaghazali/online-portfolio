import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import cn from '@/lib/utils';

const chipVariants = cva(['inline-flex', 'items-start', 'gap-x-1', 'mb-5'], {
    variants: {
        variantBorder: {
            without: '',
            with: 'border border-tertiary/20 rounded-full'
        },
        variantSize: {
            none: '',
            sm: 'py-1 px-3',
            base: 'p-2.5'
        }
    }
    // defaultVariants: {
    //     border: 'with',
    //     size: 'base'
    // }
});

interface IChip extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
    emoji?: string;
    mini_title: string;
    className?: string;
}

const Chip = ({ emoji, mini_title, variantBorder, variantSize, className }: IChip) => {
    return (
        <span className={cn(chipVariants({ variantBorder, variantSize }), className)}>
            {emoji && <span className={cn('trim text-xs')}>{emoji}</span>}
            <p
                className={cn(
                    'text-light trim font-medium tracking-wide uppercase',
                    'text-xs sm:text-sm'
                )}
            >
                {mini_title}
            </p>
        </span>
    );
};
export default Chip;

// return (
//     <div
//         className={cn(
//             'bg-tertiary inline-flex items-center gap-x-2 rounded-full py-1 pr-2 pl-1 text-xs tracking-widest'
//         )}
//     >
//         <span
//             className={cn(
//                 'bg-taupe-800 inline-flex h-5 w-5 items-center justify-center rounded-full'
//             )}
//         >
//             {emoji}
//         </span>
//         <p className={cn('text-primary')}>{mini_title}</p>
//     </div>
// );
