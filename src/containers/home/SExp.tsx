import Image from 'next/image';
import { data_client_logos } from '@/database_local/data-clients-logo';

import { Chip, Container } from '@/components';
import { img_project } from '@/lib/assets';
import cn from '@/lib/utils';

const SExp = () => {
    return (
        <section id='experience' className={cn('py-[clamp(2.75rem,1.848rem+5.15vw,7rem)]')}>
            <Container>
                <header className={cn('flex flex-col items-center justify-center gap-y-3', '')}>
                    <Chip mini_title='EXPERIENCE SECTION' />
                    <h2 className={cn('trim')}>Working Experience</h2>
                </header>
            </Container>

            <Container
                className={cn(
                    'mt-16',
                    'grid gap-4',
                    'grid-cols-1 lg:grid-cols-[5fr_3fr]',
                    'grid-rows-[280px_280px_auto_auto] lg:grid-rows-[420px_auto_auto]'
                )}
            >
                {/* IMAGE 1 */}
                <div
                    className={cn(
                        'bg-secondary relative overflow-hidden rounded-3xl',
                        'lg:row-span-2'
                    )}
                >
                    <Image
                        alt='z'
                        width={1600}
                        height={1080}
                        src={'/imgs/img-exp/img-dd-1.webp'}
                        className={cn('absolute h-full w-full object-cover')}
                    />
                </div>

                {/* IMAGE 2 */}
                <div className={cn('bg-secondary relative overflow-hidden rounded-3xl')}>
                    <Image
                        alt='z'
                        width={1600}
                        height={1080}
                        src={'/imgs/img-exp/img-dd-3.webp'}
                        className={cn('absolute h-full w-full object-cover')}
                    />
                </div>

                {/* COMPANY NAME */}
                <div
                    className={cn(
                        'bg-secondary flex rounded-3xl',
                        'p-6',
                        'flex-col gap-y-3 sm:gap-y-0',
                        'sm:flex-row',
                        'sm:items-center sm:justify-evenly',
                        'lg:col-start-2'
                    )}
                >
                    <div>
                        <p className={cn('text-light text-sm font-medium')}>COMPANY</p>
                        <p className={cn('text-tertiary mt-1')}>Double Dot Solutions </p>
                    </div>
                    <div className={cn('h-[1px] w-full bg-black/15 sm:h-[80%] sm:w-[1px]')}></div>
                    <div>
                        <p className={cn('text-light text-sm font-medium')}>MY ROLE</p>
                        <p className={cn('text-tertiary mt-1')}>Software Tester (Manual)</p>
                    </div>
                </div>

                {/* LIST OF CLIENTS */}
                <div
                    className={cn(
                        'bg-secondary rounded-4xl',
                        'col-span-full',
                        'place-content-center',
                        'px-3 py-12'
                    )}
                >
                    <p
                        className={cn(
                            'mb-5',
                            'text-center text-sm font-medium tracking-wide uppercase'
                        )}
                    >
                        Clients I Have Worked With
                    </p>

                    <div className={cn('grid gap-y-8 xl:gap-y-14', 'grid-cols-2 lg:grid-cols-6')}>
                        {data_client_logos && data_client_logos.length > 0
                            ? data_client_logos.map((i) => (
                                  <div key={i.id} className={cn('place-items-center')}>
                                      <Image
                                          alt={i.alt}
                                          src={i.link}
                                          height={i.h}
                                          width={i.w}
                                          className={cn('aspect-[3/2] w-[50%] object-contain')}
                                      />
                                      <p className={cn('mt-2 text-center text-sm')}>{i.name}</p>
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default SExp;
