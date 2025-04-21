import Link from 'next/link';

import { data_footer } from '@/database_local/footer';

import { Container, Logo, RiQuill, SocialIcon, TiBolt } from '@/components';
import cn from '@/lib/utils';

const Footer = () => {
    return (
        <footer
            className={cn(
                'bg-secondary',
                'mt-[clamp(2.75rem,1.848rem+5.15vw,7rem)]',
                'rounded-t-[38px]'
            )}
        >
            <Container
                className={cn(
                    'py-28',
                    'grid',
                    'sm:grid-cols-2',
                    'gap-y-6',
                    'lg:grid-cols-[40%_1fr_1fr_1fr] xl:gap-10'
                )}
            >
                {/* GRID: Col 1 */}
                <div className={cn('flex flex-col sm:col-span-2 lg:col-auto')}>
                    <div>
                        <Logo />
                        <p className={cn('text-light my-3')}>
                            Have some coffee and keep grinding <br />
                            until you reach your ultimate goals
                        </p>
                    </div>
                    <SocialIcon className={cn('flex items-center gap-x-2')} />
                </div>

                {/* GRID: Col 2,3,4 */}
                {data_footer.map((i) => (
                    <div key={i.id} className={cn('', i.id === 4 && 'lg:col-start-2')}>
                        <h6 className='font-dmsans text-lg'>{i.title}</h6>
                        <ul
                            className={cn(
                                'border-l-tertiary/20 *:text-light mt-4 flex flex-col gap-y-2 border-l pl-6'
                            )}
                        >
                            {i.links.map((i) => (
                                <li key={i.id}>
                                    <Link
                                        href={i.link}
                                        target={i.link.startsWith('/') ? '_self' : '_blank'}
                                        className='hover:underline'
                                    >
                                        {i.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Container>

            {/* FOOTNOTE */}
            <Container
                className={cn(
                    'pt-4 pb-16',
                    'flex justify-between text-sm',
                    'border-t-tertiary/20 border-t'
                )}
            >
                <p>
                    Built with{' '}
                    <Link href={'https://nextjs.org/'} target='_blank'>
                        Next.js
                    </Link>
                </p>
                <p>© 2025 All rights reserved</p>
            </Container>

            <div
                className={cn(
                    'bg-tertiary flex flex-row items-center justify-center gap-x-0.5 p-1.5'
                )}
            >
                <RiQuill className='fill-accent h-3.5 w-3.5' />
                <p className={cn('text-primary/90 text-xs')}>Hatta Ghazali</p>
            </div>
        </footer>
    );
};
export default Footer;
