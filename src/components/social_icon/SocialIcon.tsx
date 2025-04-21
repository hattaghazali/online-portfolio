import Link from 'next/link';
import { social_links } from '@/database_local/home';

import cn from '@/lib/utils';
import { TiLinkedIn, TiGitHub, TiFigma, TiMail, TiInstagram } from '@/components';

interface ISocialIcon {
    className?: string;
}

const SocialIcon = ({ className }: ISocialIcon) => {
    return (
        <ul className={cn('', className)}>
            {social_links.map((i) => (
                <li key={i.id}>
                    <Link href={i.links} target='_blank'>
                        {i.id === 1 && (
                            <span>
                                <TiLinkedIn className='animate_1 stroke-light h-[20px] w-[20px] stroke-[1.25px] hover:-translate-y-0.5' />
                            </span>
                        )}
                        {i.id === 2 && (
                            <span>
                                <TiGitHub className='animate_1 stroke-light h-[20px] w-[20px] stroke-[1.25px] hover:-translate-y-0.5' />
                            </span>
                        )}
                        {i.id === 3 && (
                            <span>
                                <TiFigma className='animate_1 stroke-light h-[20px] w-[20px] stroke-[1.25px] hover:-translate-y-0.5' />
                            </span>
                        )}
                        {i.id === 4 && (
                            <span>
                                <TiInstagram className='animate_1 stroke-light h-[22px] w-[22px] stroke-[1.25px] hover:-translate-y-0.5' />
                            </span>
                        )}
                        {i.id === 5 && (
                            <span>
                                <TiMail className='animate_1 stroke-light h-[22px] w-[22px] stroke-[1.25px] hover:-translate-y-0.5' />
                            </span>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
export default SocialIcon;
