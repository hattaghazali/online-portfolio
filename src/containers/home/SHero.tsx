import Image from 'next/image';

import { Chip, Container, HeroCard } from '@/components';
import { img_project } from '@/lib/assets';
import cn from '@/lib/utils';
import Link from 'next/link';

const SHero = () => {
    return (
        <>
            <section className={cn('')}>
                {/* CONTENT: Hero Title */}
                {/* <Container className={cn('py-28 text-center')}> */}
                <Container
                    // 44px to 112px - viewport: 280px to 1600px
                    className={cn('text-center', 'py-[clamp(2.75rem,1.848rem+5.15vw,7rem)]')}
                >
                    <Chip mini_title='MAIN SECTION' variantBorder='without' variantSize='none' />
                    <div className={cn('')}>
                        <h1 className={cn('trim')}>
                            Hello! My name is <br /> Hatta Ghazali
                        </h1>

                        <p
                            className={cn(
                                'text-light mt-6 max-w-[580px] justify-self-center',
                                'text-base sm:text-lg'
                            )}
                        >
                            A software tester currently diving into design and development,
                            transforming ideas into digital products
                        </p>

                        <Link href={'/#skill'}>
                            <button
                                type='button'
                                className={cn(
                                    'text-tertiary mt-6 inline-flex rounded-full font-medium shadow-lg',
                                    'border-accent-dark bg-accent border-2',
                                    'animate_1 hover:scale-105',
                                    'px-4 py-2 sm:px-5 sm:py-3.5'
                                )}
                            >
                                <span>Discover More</span>
                            </button>
                        </Link>
                    </div>
                </Container>

                {/* CONTENT: Image & Quick Stats */}
                <Container
                    className={cn('overflow-hidden', 'pb-[clamp(2.75rem,1.848rem+5.15vw,7rem)]')}
                >
                    {/* CONTENT: Hero Image */}
                    <div
                        className={cn(
                            'group relative overflow-hidden rounded-2xl drop-shadow-md',
                            'h-[clamp(17.5rem,10.871rem+37.88vw,48.75rem)] w-full'
                        )}
                    >
                        <Image
                            alt='Cat sleeping on a cozy desk'
                            src={img_project}
                            width={1920}
                            height={1080}
                            quality={100}
                            priority
                            className={cn('absolute h-full w-full object-cover')}
                        />
                        <div
                            className={cn(
                                'animate_1 absolute inset-0 bg-black/50',
                                'opacity-20 group-hover:opacity-100'
                            )}
                        >
                            <div className={cn('flex h-full items-end justify-end p-12')}>
                                <p
                                    className={cn(
                                        'text-sm text-white',
                                        'opacity-0 group-hover:opacity-100'
                                    )}
                                >
                                    <Link
                                        className={cn('underline')}
                                        target='_blank'
                                        href={
                                            'https://unsplash.com/photos/man-standing-in-front-of-group-of-men-rxpThOwuVgE'
                                        }
                                    >
                                        Image
                                    </Link>{' '}
                                    used is for illustration only.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT: Hero Quick Stats */}
                    <div
                        className={cn(
                            'mt-8',
                            '*:text-light flex',
                            'sm:items-center sm:justify-center',
                            'gap-x-4 sm:gap-x-16',
                            'overflow-x-auto'
                        )}
                    >
                        <HeroCard number='2' subtitle='Years of Experience' />
                        <div
                            className={cn('h-[56px] w-[1px] bg-black/15', 'hidden sm:block')}
                        ></div>
                        <HeroCard number='10+' subtitle='Projects Completed' />
                        <div
                            className={cn('h-[56px] w-[1px] bg-black/15', 'hidden sm:block')}
                        ></div>
                        <HeroCard number='10+' subtitle='Clients worked' />
                    </div>
                </Container>
            </section>
        </>
    );
};
export default SHero;
