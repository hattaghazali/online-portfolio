import cn from '@/lib/utils';

interface ISmallLabel {
    title: string;
}

const SmallLabel = ({ title }: ISmallLabel) => {
    return (
        <div className={cn('flex items-center gap-x-1')}>
            <div className={cn('border-t-tertiary/20 h-[1px] w-4 border-t-[1px]')}></div>
            <span className={cn('text-light text-sm')}>{title}</span>
        </div>
    );
};
export default SmallLabel;
