'use client';
import Link from 'next/link';
import Image from 'next/image';
import { data_projects } from '@/database_local/data-projects';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Chip, Container, PiCaretRight } from '@/components';
import cn from '@/lib/utils';

const SProject = () => {
    return (
        <section id='project' className={cn('py-[clamp(2.75rem,1.848rem+5.15vw,7rem)]')}>
            {/* Header Project */}
            <Container
                className={cn(
                    'flex flex-col gap-y-7 sm:flex-row',
                    'sm:items-end sm:justify-between'
                )}
            >
                <div>
                    <Chip mini_title='PROJECT SECTION' />
                    <h3 className='-ml-1'>Highlighted Project</h3>
                </div>
                <Link href={'/project'}>
                    <button
                        type='button'
                        className={cn(
                            'bg-accent rounded-full font-medium',
                            'border-tertiary/10 border',
                            'animate_1',
                            'px-4 py-2'
                        )}
                    >
                        View All Projects
                    </button>
                </Link>
            </Container>

            {/* Swiper Project */}
            <Container className={cn('overflow-hidden', 'mt-12 sm:mt-16')}>
                <Swiper
                    className={cn('')}
                    navigation={{
                        nextEl: '.swiper-nextEl',
                        prevEl: '.swiper-prevEl',
                        disabledClass: 'swiper-button-disabled'
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 14
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 24
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24
                        }
                    }}
                >
                    {data_projects.slice(0, 4).map((i, index) => (
                        <SwiperSlide key={i.p_id} className={cn('group pb-1.5')}>
                            <Link href={`project/${i.p_id}`}>
                                <div
                                    className={cn(
                                        'relative h-[420px] w-full overflow-hidden rounded-2xl sm:h-[520px]'
                                    )}
                                >
                                    <Image
                                        alt={`Project ${i.p_title}`}
                                        src={i.p_imgs[0].link}
                                        width={1840}
                                        height={1340}
                                        quality={100}
                                        priority
                                        className={cn(
                                            'animate_1 absolute h-full w-full object-cover'
                                        )}
                                    />
                                </div>
                                <h6 className={cn('mt-4 text-lg group-hover:underline')}>
                                    {i.p_title}
                                </h6>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cn('mt-6 justify-self-center')}>
                    <button className='swiper-prevEl'>
                        <PiCaretRight className={cn('-scale-x-100 stroke-2')} />
                    </button>
                    <button className='swiper-nextEl ml-2'>
                        <PiCaretRight className={cn('stroke-2')} />
                    </button>
                </div>
            </Container>
        </section>
    );
};
export default SProject;
