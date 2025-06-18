import Image from 'next/image';
import { ISkill } from '@/data_types/type-data-tech-icons';

import cn from '@/lib/utils';

const SkillCard = ({ id, label, link, desc }: ISkill) => {
    return (
        <div
            key={id}
            className={cn(
                'px-5',
                'flex flex-col items-center justify-center',
                'group bg-secondary-dark aspect-[1/1] gap-y-5 rounded-[32px] text-center',
                'border-tertiary/0 hover:border-tertiary/10 border'
            )}
        >
            <Image
                alt={label}
                src={link}
                height={68}
                width={68}
                className={cn('animate_1 mb-0.5 drop-shadow-lg group-hover:-translate-y-1')}
            />

            <div className={cn('')}>
                <span className={cn('text-tertiary text-lg font-medium')}>{label}</span>
                <p className={cn('mt-1')}>{desc}</p>
            </div>
        </div>
    );
};
export default SkillCard;
