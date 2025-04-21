import Image from 'next/image';
import Link from 'next/link';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { IDataProject } from '@/data_types/projects';
import { Container, TiLink, TiUser } from '@/components';

import img_project from '@/../public/imgs/img_project.jpg';
import cn from '@/lib/utils';

const SProjectDetail = ({
    p_id,
    p_title,
    p_link,
    p_content,
    p_role,
    p_tag,
    p_imgs,
    p_contributors
}: IDataProject) => {
    return (
        <section className={cn('')}>
            {/* TITLE */}
            <Container className={cn('flex justify-between')}>
                <div>
                    <div className={cn('flex gap-x-1 text-sm')}>
                        <span>CASE STUDY</span>
                        <span>•</span>
                        <span>2 MIN READ</span>
                        <span>•</span>
                        <span>2025</span>
                    </div>
                    <h3 className={cn('mt-6')}>Case study of {p_title}</h3>
                    <p className={cn('text-tertiary mt-4 max-w-[800px] text-base')}>
                        This case study of {p_title} will cover the project's background, problem
                        statement, proposed solution, and my responsibilities.
                    </p>
                </div>
                <div className={cn('hidden lg:block')}>
                    <button
                        type='button'
                        className={cn(
                            'bg-accent text-tertiary rounded-full border border-black/5 px-6 py-2.5 font-medium'
                        )}
                    >
                        <Link href={'#project-content'}>Start Reading</Link>
                    </button>
                </div>
            </Container>

            {/* 3 IMAGES */}
            <div className={cn('bg-secondary mt-7')}>
                <Container
                    className={cn(
                        'py-10',
                        'grid gap-4',
                        'lg:grid-cols-[5fr_2fr]',
                        'grid-rows-[repeat(3,_420px)] lg:grid-rows-[362px_362px]'
                    )}
                >
                    <div
                        className={cn(
                            'bg-secondary-dark relative overflow-hidden rounded-2xl',
                            'lg:row-span-2'
                        )}
                    >
                        <Zoom>
                            <Image
                                alt='Project detail image'
                                src={p_imgs?.[0]?.link ? `${p_imgs[0].link}` : img_project}
                                width={1840}
                                height={1340}
                                quality={100}
                                priority
                                className={cn(
                                    'animate_1 absolute h-full w-full object-cover',
                                    p_id !== 6
                                        ? 'brightness-90 hover:brightness-105'
                                        : 'brightness-100'
                                )}
                            />
                        </Zoom>
                    </div>

                    <div className={cn('bg-secondary-dark relative overflow-hidden rounded-2xl')}>
                        <Zoom>
                            <Image
                                alt='Project detail image'
                                src={p_imgs?.[1]?.link ? `${p_imgs[1].link}` : img_project}
                                width={1840}
                                height={1340}
                                quality={100}
                                priority
                                className={cn(
                                    'animate_1 absolute h-full w-full object-cover',
                                    p_id !== 6
                                        ? 'brightness-90 hover:brightness-105'
                                        : 'brightness-100'
                                )}
                            />
                        </Zoom>
                    </div>

                    <div className={cn('bg-secondary-dark relative overflow-hidden rounded-2xl')}>
                        <Zoom>
                            <Image
                                alt='Project detail image'
                                src={p_imgs?.[2]?.link ? `${p_imgs[2].link}` : img_project}
                                width={1840}
                                height={1340}
                                quality={100}
                                priority
                                className={cn(
                                    'bg-secondary-dark animate_1 absolute h-full w-full object-cover',
                                    p_id !== 6
                                        ? 'brightness-90 hover:brightness-105'
                                        : 'brightness-100'
                                )}
                            />
                        </Zoom>
                    </div>
                </Container>
            </div>

            {/* CONTENT */}
            <Container className={cn('pt-14', 'grid gap-5', 'grid-cols-1 lg:grid-cols-[5fr_2fr]')}>
                {/* LEFT CONTENT */}
                <div id='project-content' className={cn('lg:pr-80')}>
                    {p_content &&
                        p_content.map((i) => (
                            <div key={i.id} className={cn(i.id !== 1 && 'mt-14')}>
                                <div className={cn('mb-7 inline-flex items-center gap-x-2')}>
                                    <h5 className={cn('')}>
                                        {i.id === 1
                                            ? `About ${p_title}`
                                            : i.id === 2
                                              ? 'Problem Statement'
                                              : i.id === 3
                                                ? 'Proposed Solution'
                                                : i.id === 4
                                                  ? 'My Responsibility'
                                                  : null}
                                    </h5>
                                    <span className={cn('text-xl')}>
                                        {i.id === 1
                                            ? '🚀'
                                            : i.id === 2
                                              ? '❓'
                                              : i.id === 3
                                                ? '💡'
                                                : i.id === 4
                                                  ? '🎯'
                                                  : null}
                                    </span>
                                </div>

                                {i.id !== 2 && i.id !== 3 && i.id !== 4 ? (
                                    <p
                                        className={cn(
                                            'text-tertiary whitespace-pre-line',
                                            'text-base sm:text-base'
                                        )}
                                    >
                                        {i.description}
                                    </p>
                                ) : null}

                                {/* SUBTITLE BEFORE RENDER BULLET POINTS */}
                                {i.id !== 1 && (
                                    <h6 className={cn('text-base')}>
                                        {i.id === 2
                                            ? 'Following is a list of the obstacles'
                                            : i.id === 3
                                              ? ' Following is a list of the solutions'
                                              : i.id === 4
                                                ? `Following is a list of my responsibilities`
                                                : null}
                                    </h6>
                                )}
                                {/* BULLET POINTS */}
                                {i.bullet_point ? (
                                    <ul
                                        className={cn(
                                            'mt-5 ml-5 flex list-outside list-disc flex-col gap-y-4'
                                        )}
                                    >
                                        {i.bullet_point?.map((i, index) => (
                                            <li
                                                key={index}
                                                className={cn(
                                                    'text-tertiary',
                                                    'text-base sm:text-base'
                                                )}
                                            >
                                                {i}
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className={cn('')}>
                    <div className={cn('inline-flex items-center gap-x-2')}>
                        <h5 className={cn('')}>Highlights</h5>
                        <span className={cn('text-xl')}>📌</span>
                    </div>

                    <div className={cn('mt-7 flex flex-col gap-y-6')}>
                        {/* PROJECT LINK */}
                        <div className={cn('')}>
                            <h6 className={cn('mb-5 text-base')}>App Link</h6>
                            <div className={cn('flex items-baseline gap-x-2')}>
                                <p className={cn('')}>Visit live app:</p>
                                {p_link ? (
                                    <Link
                                        href={`${p_link}`}
                                        target='_blank'
                                        className={cn(
                                            'bg-accent hover:bg-accent-light inline-flex rounded-xl border border-black/10 px-2 py-1'
                                        )}
                                    >
                                        <TiLink className={cn('stroke-tertiary h-4 w-4')} />
                                    </Link>
                                ) : (
                                    <p className={cn('text-red-500')}>
                                        Sorry! Link is unavailable.
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className={cn('h-[1px] w-full bg-black/10')}></div>

                        {/* MY ROLE */}
                        <div className={cn('')}>
                            <h6 className={cn('mb-5 text-base')}>My Role</h6>
                            <ul className={cn('flex flex-wrap gap-3')}>
                                {p_role?.map((i) => (
                                    <li
                                        key={i}
                                        className={cn(
                                            'inline-flex rounded-full border border-black/10 px-3 py-1'
                                        )}
                                    >
                                        {i === 1 && 'Software Tester'}{' '}
                                        {i === 2 && 'Frontend Developer'} {i === 3 && 'UI Designer'}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn('h-[1px] w-full bg-black/10')}></div>

                        {/* TAGS */}
                        <div className={cn('')}>
                            <h6 className={cn('mb-5 text-base')}>Tags</h6>
                            <ul className={cn('flex flex-wrap gap-x-4 gap-y-1')}>
                                {p_tag?.map((i, index) => (
                                    <li key={index} className={cn('')}>
                                        #{i}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={cn('h-[1px] w-full bg-black/10')}></div>

                        {/* CONTRIBUTORS */}
                        <div className={cn('')}>
                            <h6 className={cn('mb-5 text-base')}>Contributors</h6>
                            <ul className={cn('grid grid-cols-1 gap-4')}>
                                {p_contributors.map((i, index) => (
                                    <li key={i.id} className={cn('flex items-center gap-x-3')}>
                                        <span
                                            className={cn(
                                                'bg-secondary center-xy h-10 w-10 rounded-full border border-black/5'
                                            )}
                                        >
                                            <TiUser className='stroke-tertiary' />
                                        </span>
                                        <div className={cn('')}>
                                            <p className={cn('text-tertiary text-sm font-medium')}>
                                                {i.name}
                                            </p>
                                            <p className={cn('text-sm')}>{i.role}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
export default SProjectDetail;
