import Image from 'next/image';
import Link from 'next/link';

import { Container, PiCaretRight } from '@/components';
import cn from '@/lib/utils';
import img_project from '@/../public/imgs/img_project.jpg';
import { IDataProject } from '@/data_types/projects';

interface IRandomThreeProjects {
    random_threem_projects: IDataProject[];
}

const SMoreProjects = ({ random_threem_projects }: IRandomThreeProjects) => {
    return (
        <section className={cn('mt-24')}>
            <Container className={cn('border-t-tertiary/20 border-t', 'pt-5')}>
                {/* Header */}
                <header className={cn('flex', 'sm:items-center sm:justify-between')}>
                    <h4 className={cn('')}>Other Projects</h4>

                    <Link className={cn('hidden sm:block')} href={'/project'}>
                        <button
                            type='button'
                            className={cn(
                                'group animate_1 hover:bg-[#e4c664]',
                                'border-tertiary/20 bg-accent flex items-center rounded-full border px-4 py-2'
                            )}
                        >
                            <span className={cn('')}>See All Projects</span>
                            <span>
                                <PiCaretRight
                                    className={cn(
                                        'stroke-tertiary animate_1 stroke-1 group-hover:translate-x-1.5'
                                    )}
                                />
                            </span>
                        </button>
                    </Link>
                </header>

                {/* Other project cards */}
                <div
                    className={cn(
                        'mt-6',
                        'grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]',
                        'gap-6'
                    )}
                >
                    {random_threem_projects.map((i) => (
                        <Link className={cn('group')} href={`/project/${i.p_id}`} key={i.p_id}>
                            <div
                                className={cn('relative aspect-[1/1] overflow-hidden rounded-2xl')}
                            >
                                <Image
                                    src={i.p_imgs[0].link}
                                    width={1840}
                                    height={1380}
                                    alt={`Project image of ${i.p_title} under more project`}
                                    priority
                                    className={cn(
                                        'h-full w-full object-cover',
                                        'animate_1 group-hover:scale-105'
                                    )}
                                />
                            </div>
                            <h6
                                className={cn(
                                    'mt-3 ml-1.5 min-h-fit text-lg group-hover:underline'
                                )}
                            >
                                {i.p_title}
                            </h6>
                        </Link>
                    ))}
                </div>
            </Container>
        </section>
    );
};
export default SMoreProjects;
