'use client';
import { useState } from 'react';

import { Chip, Container, SkillCard } from '@/components';
import cn from '@/lib/utils';
import { data_stack_icons } from '@/database_local/data-tech-icons';

const SSkill = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');

    const tabs = [
        {
            id: 'tab1',
            emoji: '🚀',
            label: 'Tech Stack'
        },
        {
            id: 'tab2',
            emoji: '🛠️',
            label: 'Tech Tool'
        },
        {
            id: 'tab3',
            emoji: '🕹️',
            label: 'Software Testing'
        },
        {
            id: 'tab4',
            emoji: '🎨',
            label: 'Digital Design'
        }
    ];

    const handleChangeTab = (tabId: string) => {
        console.log('change to', tabId);
        setActiveTab(tabId);
    };

    return (
        <section id='skill' className={cn('bg-secondary py-[clamp(2.75rem,1.848rem+5.15vw,7rem)]')}>
            <Container className={cn('')}>
                {/* SKILL: Top Header */}
                <header className={cn('flex flex-col gap-y-3', 'items-center text-center')}>
                    <Chip mini_title='SKILL SECTION' />
                    <h2 className={cn('trim')}>Digital Skillset</h2>

                    <p className={cn('trim text-light mt-3', 'text-base sm:text-lg')}>
                        The following are some of my familiar skills that relevant to the tech
                        industry
                    </p>
                </header>

                {/* LIST OF BUTTONS */}
                <div
                    className={cn(
                        'walao',
                        'mt-20 mb-8',
                        'flex flex-nowrap',
                        'sm:justify-center',
                        'gap-3 overflow-x-auto'
                    )}
                >
                    {/* <div
                    className={cn(
                        'mt-20 mb-8',
                        'flex flex-wrap',
                        'sm:justify-center',
                        'gap-3 overflow-x-auto'
                    )}
                > */}
                    {tabs.map((i, index) => (
                        <button
                            key={index}
                            type='button'
                            className={cn(
                                'min-w-fit',
                                'flex items-center',
                                'px-4 py-2',
                                'animate_1 rounded-full border border-black/10',
                                activeTab === i.id ? 'bg-accent' : 'bg-accent/0',
                                activeTab !== i.id ? 'hover:bg-secondary-dark' : ''
                            )}
                            onClick={() => handleChangeTab(i.id)}
                        >
                            <span className='mr-1 text-sm'>{i.emoji}</span>
                            <span className={cn('text-tertiary')}>{i.label}</span>
                        </button>
                        // <button
                        //     key={index}
                        //     type='button'
                        //     className={cn(
                        //         'flex items-center',
                        //         'px-4 py-2',
                        //         'animate_1 rounded-full border border-black/10',
                        //         activeTab === i.id ? 'bg-accent' : 'bg-accent/0',
                        //         activeTab !== i.id ? 'hover:bg-secondary-dark' : ''
                        //     )}
                        //     onClick={() => handleChangeTab(i.id)}
                        // >
                        //     <span className='mr-1 text-sm'>{i.emoji}</span>
                        //     <span className={cn('text-sm sm:text-base')}>{i.label}</span>
                        // </button>
                    ))}
                </div>

                {activeTab === 'tab1' && (
                    <>
                        {data_stack_icons && data_stack_icons['data_stack'].length > 0 ? (
                            <div
                                className={cn(
                                    'grid gap-4',
                                    'grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]'
                                )}
                            >
                                {data_stack_icons['data_stack'].map((i) => (
                                    // CARD SKILL
                                    <SkillCard
                                        key={i.id}
                                        desc={i.desc}
                                        label={i.label}
                                        link={i.link}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No data</p>
                        )}
                    </>
                )}

                {activeTab === 'tab2' && (
                    <>
                        {data_stack_icons && data_stack_icons['data_tool'].length > 0 ? (
                            <div
                                className={cn(
                                    'grid gap-4',
                                    'grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]'
                                )}
                            >
                                {data_stack_icons['data_tool'].map((i) => (
                                    // CARD SKILL
                                    <SkillCard
                                        key={i.id}
                                        desc={i.desc}
                                        label={i.label}
                                        link={i.link}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No data</p>
                        )}
                    </>
                )}
                {activeTab === 'tab3' && (
                    <>
                        {data_stack_icons &&
                        data_stack_icons['data_software_testing'].length > 0 ? (
                            <div
                                className={cn(
                                    'grid gap-4',
                                    'grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]'
                                )}
                            >
                                {data_stack_icons['data_software_testing'].map((i) => (
                                    // CARD SKILL
                                    <SkillCard
                                        key={i.id}
                                        desc={i.desc}
                                        label={i.label}
                                        link={i.link}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No data</p>
                        )}
                    </>
                )}
                {activeTab === 'tab4' && (
                    <>
                        {data_stack_icons && data_stack_icons['data_design'].length > 0 ? (
                            <div
                                className={cn(
                                    'grid gap-4',
                                    'grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]'
                                )}
                            >
                                {data_stack_icons['data_design'].map((i) => (
                                    // CARD SKILL
                                    <SkillCard
                                        key={i.id}
                                        desc={i.desc}
                                        label={i.label}
                                        link={i.link}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p>No data</p>
                        )}
                    </>
                )}
            </Container>
        </section>
    );
};
export default SSkill;
