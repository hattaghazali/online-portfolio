import Link from 'next/link';
import Image from 'next/image';

import { data_projects } from '@/database_local/data-projects';

import { Container, PiArrowUpRight } from '@/components';
import cn from '@/lib/utils';

const SProjectsList = () => {
    return (
        <section className={cn('')}>
            {/* PAGE: Project List - Header */}
            <Container
                className={cn(
                    'mt-10 flex flex-col gap-4',
                    'lg:flex-row lg:items-end lg:justify-between'
                )}
            >
                <h2 className={cn('')}>All Projects</h2>
                <p className={cn('trim max-w-[480px] text-base lg:text-lg')}>
                    Below is a list of projects I have worked on, mostly as a software tester and
                    occasionally as a web designer.
                </p>
            </Container>

            {/* PAGE: Project List - Project Cards */}
            <Container className={cn('my-20')}>
                {data_projects.map((i, index) => (
                    //Main card
                    <Link className={cn('group/test')} key={i.p_id} href={`/project/${i.p_id}`}>
                        <div
                            className={cn(
                                index === 0 && 'border-tertiary/20 border-t',
                                index !== data_projects.length - 1 && 'border-tertiary/20 border-t',
                                index === data_projects.length - 1 &&
                                    'border-tertiary/20 border-t border-b',
                                'py-6',
                                'grid gap-x-4 sm:grid-cols-[3fr_6fr_1fr]',
                                'grid-rows-[460px_auto] sm:grid-rows-[320px] lg:grid-rows-[520px]'
                            )}
                        >
                            {/* Card image */}
                            <div className={cn('overflow-hidden rounded-4xl sm:col-auto')}>
                                <Image
                                    alt={`Image for Project ${i.p_title}`}
                                    src={i.p_imgs[0].link}
                                    width={1840}
                                    height={1340}
                                    quality={100}
                                    priority
                                    className={cn(
                                        'h-full w-full object-cover',
                                        'animate_1 group-hover/test:scale-105'
                                    )}
                                />
                            </div>

                            <div
                                className={cn(
                                    'flex flex-col',
                                    'mt-3 sm:mt-0',
                                    'gap-y-2 sm:gap-y-0',
                                    'sm:col-auto sm:justify-between'
                                )}
                            >
                                <h3 className={cn('order-2')}>{i.p_title}</h3>

                                <p className={cn('order-1 text-sm', 'sm:order-2')}>
                                    ({index <= 8 ? '0' : ''}
                                    {index + 1}-{data_projects.length})
                                </p>
                            </div>
                            <div
                                className={cn(
                                    'hidden sm:block',
                                    'sm:col-auto sm:self-auto sm:justify-self-end'
                                )}
                            >
                                <span
                                    className={cn(
                                        'bg-primary/0 border-tertiary/20 center-xy inline-flex h-16 w-16 rounded-full border',
                                        'animate_1 group-hover/test:bg-accent'
                                    )}
                                >
                                    <PiArrowUpRight className='animate_1 group-hover/test:rotate-45' />
                                    {/* <PiArrowUpRight className='animate_1 group-hover:translate-x-1 group-hover:-translate-y-1' /> */}
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </Container>
        </section>
    );
};
export default SProjectsList;

{
    /* <ul>
{data_projects.map((i, index) => (
    <li key={i.id}>
        <span className='text-[#756F6A]'>
            ({index <= 8 ? '0' : ''}
            {index + 1}-{data_projects.length})
        </span>
        <Link href={`/projects/${i.id}`}>{i.p_title}</Link>
    </li>
))}
</ul> */
}
