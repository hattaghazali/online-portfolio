import cn from '@/lib/utils';

interface IContainer {
    className?: string;
    children?: React.ReactNode;
}

const Container = ({ className, children }: IContainer) => {
    return (
        <div className={cn('mx-6 max-w-[1400px] xl:mx-auto xl:px-6', className)}>{children}</div>
    );
};
export default Container;
