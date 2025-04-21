import Image from 'next/image';

import { data_events } from '@/database_local/data-events';

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import { Container } from '@/components';
import cn from '@/lib/utils';

const SEvents = () => {
    return (
        <section className={cn('')}>
            <Container>
                <h2>Events</h2>
            </Container>

            <div className={cn('relative', 'mt-10', 'py-52')}>
                <Container
                    className={cn(
                        'relative z-50 grid gap-2',
                        'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
                        'auto-rows-[320px] xl:grid-rows-[repeat(3,380px)]'
                    )}
                >
                    {data_events.map((i, index) => (
                        <div
                            key={i.id}
                            className={cn(
                                'bg-secondary relative overflow-hidden rounded-xl',
                                i.id === 1 && 'xl:col-span-2 xl:row-span-2'
                            )}
                        >
                            <Zoom>
                                <Image
                                    alt={`Event's image number ${i}`}
                                    src={i.link}
                                    width={1920}
                                    height={1080}
                                    className={cn('absolute h-full w-full object-cover')}
                                />
                            </Zoom>
                        </div>
                    ))}
                </Container>
                <div
                    className={cn(
                        'absolute inset-0 z-10 h-full max-w-full',
                        `bg-[url('/imgs/img_project.jpg')] bg-cover bg-no-repeat`
                    )}
                ></div>
                <div className={cn('absolute inset-0 z-20 h-full max-w-full bg-black/80')}></div>
            </div>
        </section>
    );
};
export default SEvents;
