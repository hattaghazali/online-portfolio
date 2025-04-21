import cn from '@/lib/utils';

interface IHeroCard {
    number: string;
    subtitle: string;
}

const HeroCard = ({ number, subtitle }: IHeroCard) => {
    return (
        <div>
            <h3 className={cn('text-center font-normal')}>{number}</h3>
            <p className={cn('mt-2 text-center text-sm sm:text-base')}>{subtitle}</p>
        </div>
    );
};
export default HeroCard;
