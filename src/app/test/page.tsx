'use client';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import cn from '@/lib/utils';

const TestPage: NextPage = () => {
    const [activeTab, setActiveTab] = useState<string>('tab3');

    const tabs = [
        {
            id: 'tab1',
            label: 'Stack'
        },
        {
            id: 'tab2',
            label: 'Testing'
        },
        {
            id: 'tab3',
            label: 'Design'
        }
    ];

    // const handleChangeTab = (tabId: string) => {
    //     if (tabId === activeTab) {
    //         console.log('Same tab clicked, no update needed:', tabId);
    //         return; // Prevent updating state if the same tab is clicked
    //     } else {
    //         console.log('Setting activeTab to:', tabId);
    //         setActiveTab(tabId);
    //     }
    // };

    useEffect(() => {
        console.log('Current activeTab:', activeTab);
        console.log('Component re-rendered');

        return () => {
            activeTab;
        };
    }, [activeTab]);

    const handleChangeTab = (tabId: string) => {
        console.log('change to', tabId);
        setActiveTab(tabId);
    };

    return (
        <section className={cn('h-screen')}>
            {tabs.map((i, index) => (
                <button
                    className={cn(
                        activeTab === i.id ? 'font-bold' : 'font-normal',
                        'bg-accent ml-2.5 inline-flex border p-4'
                    )}
                    key={index}
                    onClick={() => handleChangeTab(i.id)}
                >
                    {i.label}
                </button>
            ))}

            <div className={''}>
                {activeTab === 'tab1' && <h1 className={'trim'}>Tech Stack</h1>}
                {activeTab === 'tab2' && <h1 className={'trim'}>Technical</h1>}
                {activeTab === 'tab3' && <h1 className={'trim'}>Design</h1>}
            </div>
        </section>
    );
};
export default TestPage;

{
    /* <div>{tabContent[activeTab]}</div> */
}

// const tabContent: any = {
//     tab1: <div>Content of tab 1</div>,
//     tab2: <div>Content of tab 2</div>,
//     tab3: <div>Content of tab 3</div>
// };
