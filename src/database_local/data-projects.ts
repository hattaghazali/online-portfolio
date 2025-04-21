import {
    ContributorId,
    ContributorName,
    ContributorRole,
    IDataProject
} from '@/data_types/projects';

const data_projects: IDataProject[] = [
    // Real Protocol - 13
    {
        p_id: 13,
        p_title: 'Real Protocol',
        p_link: 'https://waitlist.realprotocol.co/',
        p_role: [1],
        p_tag: [
            'WebDevelopment',
            'CorporateWebsite',
            'AdminDashboard',
            'UserDashboard',
            'Analytic'
        ],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-rp-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-rp-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-rp-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Natasha,
                name: ContributorName.Natasha,
                role: ContributorRole.ProjectManager
            },
            {
                id: ContributorId.Hazimah,
                name: ContributorName.Hazimah,
                role: ContributorRole.SoftwareTester
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Real Protocol, a Singapore-based initiative, is a pioneering web application designed to empower the Web3 ecosystem by connecting users with Web3 developer tools.\n\nThe project aimed to create an engaging platform where users can explore a curated list of Web3 developer tools and campaigns, earning points through various interactions to gamify their experience.'
            },
            {
                id: 2,
                bullet_point: [
                    'Real Protocol identified several challenges in creating a platform to bridge Web3 users and developer tools while ensuring an engaging and secure experience.',
                    'There was a need for a web app that could effectively display a dynamic list of Web3 developer tools and campaigns on the user side.',
                    'The platform needed to gamify user interactions by rewarding points for actions like visiting campaigns or playing a digit-guessing game, which demanded a robust point-tracking system integrated into the user dashboard.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We created a dynamic list of Web3 developer tools and campaigns, displayed on the user dashboard, allowing users to explore and interact with each campaign.',
                    'We integrated a secure sign-up and login system, supporting email authentication and social logins via Google, Discord, and Twitter, with a point-based reward system granting users additional points for choosing social login options to boost engagement.',
                    'We built a point-tracking system within the user dashboard, enabling users to earn points by clicking on campaigns or participating in a simple digit-guessing game.',
                    'On the admin side, we designed a dashboard where administrators could create, edit, and manage Web3 tools and campaigns.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Conducted functional testing on the user dashboard, confirming that the list of Web3 developer tools and campaigns displayed correctly.',
                    'Validated that clicking on campaigns accurately incremented user points.',
                    'Tested the digit-guessing game feature, ensuring the point allocation was consistent and the game logic functioned as expected under various scenarios.',
                    'Tested the CRUD operations for Web3 tools and campaigns on admin side.',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    // +Links
    {
        p_id: 11,
        p_title: 'PositiveLinks',
        p_link: 'https://www.thepositivelinks.com/',
        p_role: [1],
        p_tag: ['WebDevelopment', 'Analytic', 'CorporateWebsite', 'AdminDashboard'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-pl-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-pl-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-pl-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Iskandar,
                name: ContributorName.Iskandar,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Launched in 2023, the PositiveLinks project aimed to revitalize a stale digital presence into a dynamic, modern ecosystem stack like WordPress, Next.js and Express.js.\n\nInitially burdened by an outdated corporate website and a need for job pages that couldn’t dynamically showcase admin-created listings, PositiveLinks sought help to bridge these gaps.\n\nWe tackled this dual challenge by recreating their corporate site with fresh design and functionality, while building a job list and detail page to render postings seamlessly, delivering a cohesive platform that reflects today’s standards and empowers their community.'
            },
            {
                id: 2,
                bullet_point: [
                    'PositiveLinks required assistance to develop a job list page and a detailed job page capable of dynamically rendering jobs created through the admin site.',
                    'PositiveLinks previously maintained a corporate website that had become outdated, lacking modern design and functionality, requiring assistance to recreate a fresh, contemporary site.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We developed a job list page and a job detail page using a dynamic rendering system to display admin-created jobs efficiently on the Positive Links site.',
                    'We recreated the PositiveLinks corporate website with a modern design and updated features, delivering a fresh platform that aligns with contemporary web standards.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Responsible for ensuring that every job posting created in the admin dashboard renders accurately on the Positive Links jobs page, properly categorized by job specialization and employment type',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    // BandLab
    {
        p_id: 12,
        p_title: 'BandLab Technologies',
        p_link: 'https://bandlabtechnologies.com/brands/bandlab/',
        p_role: [1],
        p_tag: ['WebDevelopment', 'CorporateWebsite'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-bt-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-bt-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-bt-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Aqmal,
                name: ContributorName.Aqmal,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Bandlab Technologies needed assistance converting their code into modular pieces as much as possible without disrupting existing animations that bring its creative tools to life. \n\nWe delivered by implementing a structured approach, crafting as many components as possible to boost maintainability while preserving the dynamic experience musicians rely on.'
            },
            {
                id: 2,
                bullet_point: [
                    'BandLab Technologies faced challenges in transforming their code into reusable components while keeping animations intact.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We tackled the issue by converting the code into as many components as feasible while maintaining the integrity of the current animations.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Animation. To verify that animations on all pages trigger correctly and perform as intended without errors',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    // IQOS - 6
    {
        p_id: 6,
        p_title: 'IQOS Telegram Bots',
        p_link: 'https://t.me/IQOSMyAgeBot',
        p_role: [1],
        p_tag: ['WebDevelopment', 'AppDevelopment', 'Analytic', 'AdminDashboard'],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Afiq,
                name: ContributorName.Afiq,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Iskandar,
                name: ContributorName.Iskandar,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Aqmal,
                name: ContributorName.Aqmal,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Syamim,
                name: ContributorName.Syamim,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-iqos-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-iqos-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-iqos-3.webp'
            }
        ],
        p_content: [
            {
                id: 1,
                description: `This project involved the development of a suite of Telegram bots for PMI to strengthen their online presence. Key functionalities included automated age verification for users under 18 and an instant response system for frequently asked questions.\n\n This strategic initiative was undertaken to improve user experience, drive customer engagement, and facilitate PMI's digital expansion.`
            },
            {
                id: 2,
                bullet_point: [
                    'PMI had an unmet need for an age verification system for their private Telegram channel that would satisfy their policy requirements.',
                    'Their existing process lacked automation, leading to a time-consuming and resource-intensive manual review of every prospective member.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'A bot was built to handle new user interactions, automatically verifying their age and granting access to the private channel, ensuring policy compliance and a smoother onboarding process.',
                    'A dedicated bot was created to provide quick and accurate answers to common questions, improving the user experience.',
                    `An interactive bot was developed to engage channel members with games and contests, encouraging participation and contributing to the channel's success.`
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Ensure the reliability and functionality of the developed Telegram bots for PMI, which aim to strengthen their online presence.',
                    'Responsible for testing the age verification mechanism for users under 18 to ensure accurate and compliant implementation.',
                    'Ensure the FAQ bot accurately and efficiently provided information, resolving the problem of users needing quick answers.',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    //Sinowaja
    {
        p_id: 1,
        p_title: 'Sinowaja',
        p_link: 'https://swg-energy.com/',
        p_role: [1, 2],
        p_tag: ['WebDevelopment', 'CorporateWebsite'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-sw-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-sw-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-sw-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Pasha,
                name: ContributorName.Pasha,
                role: ContributorRole.ProjectManager
            },
            {
                id: ContributorId.Iskandar,
                name: ContributorName.Iskandar,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Kate,
                name: ContributorName.Kate,
                role: ContributorRole.SoftwareTester
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'The official Sinowaja website was established in 2023 and features a frontend built with Next.js and a backend powered by Express.js.\n\nIt was designed to elevate the company’s online presence and engage users with a fast and intuitive experience.'
            },
            {
                id: 2,
                bullet_point: [
                    'The current site’s outdated aesthetics and lack of responsiveness fail to meet today’s digital standards or represent the company effectively.',
                    'With lagging load speeds, the current website struggles to keep visitors engaged.',
                    'The existing corporate website is without a CMS, leaving the team struggling to update content efficiently.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We upgraded the site to a visually stunning, user-friendly platform that aligns with current trends and reflects the company’s values.',
                    'We transformed the slow site into a fast, visually striking platform that aligns with today’s digital standards.',
                    'We built a fast, modern website with an integrated CMS and streamlining content updates.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Frontend Development Support. To assist with the frontend developer, contributing to the creation and coding of specific pages.',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    //Saltycustoms
    {
        p_id: 2,
        p_title: 'Saltycustoms',
        p_link: 'https://www.saltycustoms.com/',
        p_role: [1],
        p_tag: ['WebDevelopment', 'CorporateWebsite', 'Analytic', 'AdminDashboard', 'AIChatBot'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-sc-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-sc-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-sc-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Natasha,
                name: ContributorName.Natasha,
                role: ContributorRole.ProjectManager
            },
            {
                id: ContributorId.Afiq,
                name: ContributorName.Afiq,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Rattana,
                name: ContributorName.Rattana,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Syamim,
                name: ContributorName.Syamim,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Irfan,
                name: ContributorName.Irfan,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Oscar,
                name: ContributorName.Oscar,
                role: ContributorRole.SoftwareTester
            },
            {
                id: ContributorId.Hazimah,
                name: ContributorName.Hazimah,
                role: ContributorRole.SoftwareTester
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'The official Saltycustoms website was established in 2024, featuring a frontend built with Next.js for rapid, SEO-friendly rendering and a backend powered by Express.js for scalable, efficient functionality.\n\nThe website reflects their mission to "blend sustainability with quality" and serve businesses, aligning with their focus on merchandise solutions.'
            },
            {
                id: 2,
                bullet_point: [
                    'The absence of a chatbot on their previous website prevents the tracking of potential customer engagement through chat.',
                    'The current site’s outdated aesthetics and lack of responsiveness fail to meet today’s digital standards or represent the company effectively.',
                    'With lagging load speeds, the current website struggles to keep visitors engaged.',
                    'The existing corporate website is without a CMS, leaving the team struggling to update content efficiently.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'Implement an online chatbot on the website. This will enable direct communication with potential customers and allow for the tracking of chatbot interactions, providing valuable data on customer engagement.',
                    'We upgraded the site to a visually stunning, user-friendly platform that aligns with current trends and reflects the company’s values.',
                    'We transformed the slow site into a fast, visually striking platform that aligns with today’s digital standards.',
                    'We built a fast, modern website with an integrated CMS and streamlining content updates.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'To validate the chatbot’s accurate responses, confirm customer inputs are saved in the database, and ensure they appear correctly in the admin dashboard.',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    //Avium
    {
        p_id: 3,
        p_title: 'Avium World',
        p_link: 'https://aviumworld.com/',
        p_role: [1],
        p_tag: ['WebDevelopment', 'CorporateWebsite'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-aw-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-aw-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-aw-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Afiq,
                name: ContributorName.Afiq,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'The official Avium World website, established in 2024, uses Next.js for its frontend and Motion Dev for polished animations, aiming to strengthen the company’s online presence and provide an intuitive user experience.'
            },
            {
                id: 2,
                bullet_point: [
                    'The current site’s outdated aesthetics and lack of responsiveness fail to meet today’s digital standards or represent the company effectively.',
                    'With lagging load speeds, the current website struggles to keep visitors engaged.',
                    'The existing corporate website is without a CMS, leaving the team struggling to update content efficiently.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We upgraded the site to a visually stunning, user-friendly platform that aligns with current trends and reflects the company’s values.',
                    'We transformed the slow site into a fast, visually striking platform that aligns with today’s digital standards.',
                    'We built a fast, modern website with an integrated CMS and streamlining content updates.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Animation. To verify that animations on all pages trigger correctly and perform as intended without errors',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    // DD - 4
    {
        p_id: 4,
        p_title: 'Double Dot Solutions',
        p_link: 'https://double.my/',
        p_role: [1],
        p_tag: ['WebDevelopment', 'CorporateWebsite', 'Analytic', 'AdminDashboard'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-dd-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-dd-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-dd-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Vern,
                name: ContributorName.Vern,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description: `The project aimed to transform the outdated website into a modern, content-rich platform that showcases some projects and expertise. Using a robust tech stack featuring Next.js and React, we delivered a fresh, user-friendly design to elevate Double Dot's online presence.`
            },
            {
                id: 2,
                bullet_point: [
                    `Outdated Design. The existing website had an old-fashioned look, failing to reflect Double Dot's innovative brand identity.`,
                    'Limited Content. The previous site lacked engaging content, such as project showcases and blog sections, limiting its ability to attract and inform visitors.',
                    'Technological Constraints. The legacy tech stack hindered performance, scalability, and the ability to implement modern features.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'Modern Tech Stack. Adopted Next.js and React to build a fast, scalable, and SEO-friendly website, improving performance and development flexibility.',
                    `Enhanced Content. Introduced dynamic sections for project listings and a blog to highlight Double Dot's expertise and engage visitors.`,
                    'Fresh Design. Implemented a sleek, modern UI/UX design with responsive layouts to ensure seamless navigation across devices.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    `Cross-Device Testing. Ensured the website's responsiveness and compatibility across various devices, browsers, and screen sizes.`,
                    'Functional Testing. Conducted thorough testing of UI components, navigation, and content display to verify seamless user interactions.',
                    'Performance Testing. Validated page load times and overall performance to meet modern web standards.',
                    `Bug Reporting and Collaboration. Identified, documented, and tracked bugs, working closely with developers to resolve issues and ensure a polished final product.`
                ]
            }
        ]
    },
    // MRZ - 5
    {
        p_id: 5,
        p_title: 'MoreRewardz',
        p_link: 'https://morerewardz.com/',
        p_role: [1],
        p_tag: [
            'WebDevelopment',
            'CorporateWebsite',
            'Analytic',
            'Saas',
            'AdminDashboard',
            'UserDashboard'
        ],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-mrz-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-mrz-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-mrz-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Pasha,
                name: ContributorName.Pasha,
                role: ContributorRole.ProjectManager
            },
            {
                id: ContributorId.Iskandar,
                name: ContributorName.Iskandar,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description: `The upgraded version of MoreRewardz website was released in 2023, featuring both a frontend and backend built with Feathers.js to deliver a fast, real-time platform. Enabling merchants to create custom online stores, design marketing campaigns, and offer promotions and coupons—all from one intuitive interface.\n\nThis upgrade bridges the gap between ambition and action: merchants build their digital identity, while customers create accounts, snag coupons, and engage with campaigns tied to exclusive offers, creating a seamless loop of interaction and reward.`
            },
            {
                id: 2,
                bullet_point: [
                    'MoreRewardz faced challenges in improving features to expand capabilities for both merchants and customers.',
                    'MoreRewardz faced difficulties in adding features like Google tracking to monitor merchant and customer engagement.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We introduced a modular development approach using Feathers.js to seamlessly integrate new features, such as campaign creation tools for merchants and coupon redemption options for customers.',
                    'We implemented Google Analytics tracking by embedding event tags across the platform, enabling MoreRewardz to monitor merchant sign-ups, customer registrations, and usage patterns in real-time.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'To test and ensure merchant-side features, including campaign setup and coupon generation, operate correctly.',
                    'To validate that customer-side features support viewing campaigns and allow coupon claiming without errors.',
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    //CooperVision
    {
        p_id: 7,
        p_title: 'CooperVision',
        p_link: 'https://coopervisionsg-rewards.com/',
        p_role: [1],
        p_tag: [
            'WebDevelopment',
            'CorporateWebsite',
            'Analytic',
            'AdminDashboard',
            'UserDashboard'
        ],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-cv-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-cv-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-cv-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Natasha,
                name: ContributorName.Natasha,
                role: ContributorRole.ProjectManager
            },
            {
                id: ContributorId.Vern,
                name: ContributorName.Vern,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Afiq,
                name: ContributorName.Afiq,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Aqmal,
                name: ContributorName.Aqmal,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Oscar,
                name: ContributorName.Oscar,
                role: ContributorRole.SoftwareTester
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Introduced in 2024, the CooperVision project was designed to enhance customer engagement for CooperVision by building a digital coupon system and campaign promotion platform, leveraging a modern web framework like React.js and Express.js.\n\nTasked with bridging the gap between physical store purchases and online rewards, the initiative created a seamless experience for two user groups: customers, who upload receipts to claim coupons, and admins, who manage approvals via a dashboard.\n\nThis system not only incentivized repeat visits but also streamlined campaign tracking for CooperVision, turning a traditional retail interaction into a dynamic, reward-driven ecosystem.'
            },
            {
                id: 2,
                bullet_point: [
                    'CooperVision lacked a digital system to offer coupons to customers, limiting their ability to reward purchases and encourage loyalty, requiring a solution to integrate a coupon mechanism tied to in-store activity.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We built a digital coupon system for CooperVision Rewards, enabling customers to earn and redeem coupons after in-store purchases, boosting loyalty and engagement through a streamlined reward process.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Tested the receipt upload feature to ensure users could submit proof of purchase easily, with proper file validation and upload success feedback.',
                    'Verified that users received an email notification after receipt approval, ensuring timely delivery and accurate coupon details.',
                    'Checked that approved receipts appeared in the user’s receipt collection, confirming accessibility and display accuracy.',
                    'Ensured users could redeem coupons successfully.',
                    'To ensure the correctness of client-provided copywriting on the site.'
                ]
            }
        ]
    },
    // Work Inspires
    {
        p_id: 8,
        p_title: 'Work Inspires',
        p_link: 'https://www.workinspires.com/',
        p_role: [1],
        p_tag: ['WebDevelopment', 'CorporateWebsite'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-wi-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-wi-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-wi-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Work Inspires was established in 2023, featuring a frontend built with WordPress.\n\nWork Inspires is a people development and engagement company dedicated to transforming workplaces by designing and customizing innovative learning and training programs that foster growth for both individuals and organizations.'
            },
            {
                id: 2,
                bullet_point: [
                    'Work Inspires lacked a digital footprint, limiting their visibility to potential clients seeking people development and engagement solutions, and required a website to establish an online identity.',
                    'Without a website, Work Inspires struggled to effectively showcase their customized training programs, leadership development, and engagement solutions, hindering their ability to attract new clients.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We designed and launched a modern website for Work Inspires, establishing their digital presence with a professional design that highlights their mission to empower people and organizations, making them visible to a global audience.',
                    'We built a responsive, SEO-optimized website for Work Inspires, incorporating their awards (e.g., Best Employee Engagement Consultancy) and client testimonials, positioning them as a leader in the people development space against competitors.'
                ]
            },
            {
                id: 4,
                bullet_point: [
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    // SMCV
    {
        p_id: 9,
        p_title: 'SMCV',
        p_link: 'https://www.sunwaymedicalvelocity.com.my/saveanumbersavealife/',
        p_role: [1, 3],
        p_tag: ['WebDevelopment', 'Analytic'],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-smcv-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-smcv-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-smcv-3.webp'
            }
        ],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Aqmal,
                name: ContributorName.Aqmal,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'The Save A Number Save A Life website was established in 2023, featuring a frontend built with React.js and a backend powered by Express.js for scalable, efficient functionality. It is about to empower patients and visitors with a simple yet critical tool: saving emergency contact numbers directly to their phones.\n\nInspired by the alarming statistic that 59 percent of emergency-related fatalities could be prevented with timely first aid, this initiative tackles the widespread lack of awareness about accessible hospital contacts beyond the familiar 999 hotline.'
            },
            {
                id: 2,
                bullet_point: [
                    'SMCV identified a lack of public awareness about the importance of saving hospital emergency numbers beyond 999, requiring a website to educate users and encourage proactive action.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    `To develope a dedicated website for SMCV’s 'Save a Number, Save a Life' campaign, featuring compelling stats—like 59% of emergency fatalities being preventable with timely aid—and clear calls-to-action to educate and motivate users to save emergency numbers.`
                ]
            },
            {
                id: 4,
                bullet_point: [
                    `As a UI Designer, I crafted an intuitive and visually appealing interface for the 'Save a Number, Save a Life' website, collaborating closely with developers to ensure the design was implemented accurately.`,
                    `As a Software Tester, I ensured that users and visitors could successfully save the emergency number from the website to their phones, verifying a smooth and reliable experience.`,
                    'Performance. To optimize site speed and ensure fast load times for an efficient user experience.',
                    'Responsiveness. To ensure the site adapts seamlessly across multiple devices and browsers.',
                    'Copy Writing. To ensure the correctness of client-provided copywriting on the site.',
                    'Bug Reduction. To identify, report, and minimize bugs for a stable and reliable website.'
                ]
            }
        ]
    },
    // Marlboro
    {
        p_id: 10,
        p_title: 'Marlboro',
        p_role: [1],
        p_tag: ['WebDevelopment', 'AdminDashboard', 'Analytic'],
        p_contributors: [
            {
                id: ContributorId.Liew,
                name: ContributorName.Liew,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Kevin,
                name: ContributorName.Kevin,
                role: ContributorRole.TechLead
            },
            {
                id: ContributorId.Natasha,
                name: ContributorName.Natasha,
                role: ContributorRole.ProjectManager
            },
            {
                id: ContributorId.Aqmal,
                name: ContributorName.Aqmal,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Afiq,
                name: ContributorName.Afiq,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Fahmi,
                name: ContributorName.Fahmi,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Rattana,
                name: ContributorName.Rattana,
                role: ContributorRole.FrontendDeveloper
            },
            {
                id: ContributorId.Jonathan,
                name: ContributorName.Jonathan,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Syamim,
                name: ContributorName.Syamim,
                role: ContributorRole.BackendDeveloper
            },
            {
                id: ContributorId.Daniel,
                name: ContributorName.Daniel,
                role: ContributorRole.DataAnalyst
            },
            {
                id: ContributorId.Oscar,
                name: ContributorName.Oscar,
                role: ContributorRole.SoftwareTester
            },
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.SoftwareTester
            }
        ],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-mb-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-mb-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-mb-3.webp'
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Philip Morris International(PMI), aims to deliver high-quality products to its customers. To improve their offerings by understanding preferences, we built a custom web app for PMI to capture and analyze public feedback efficiently.\n\nWe created a user-friendly app with a data analytics dashboard for monitoring insights, plus SMS and email features for verifications and alerts.'
            },
            {
                id: 2,
                bullet_point: [
                    'PMI faced difficulties in efficiently capturing and analyzing public feedback on their products.',
                    'They had limited communication channels with customers, which hindered their ability to address concerns and improve their offerings based on customer feedback.'
                ]
            },
            {
                id: 3,
                bullet_point: [
                    'We developed a custom web app that included a comprehensive data analytics dashboard for easy monitoring and analysis of customer feedback.',
                    'We also weaved in SMS and email communication channels for the relevant verifications.',
                    `Set up automated alerts to keep PMI's team informed of various scenarios, enabling them to act quickly and fine-tune their product offerings based on customer feedback.`
                ]
            },
            {
                id: 4,
                bullet_point: [
                    `Tested each campaign survey by completing multiple submissions, ensuring the survey process functioned smoothly and reliably for users.`,
                    `Verified the admin dashboard’s data analytics, ensuring the number of users taking surveys matched the database records and displayed accurately on the dashboard by products, flavours, days, weeks, months and etc.`,
                    `Ensured that users received an SMS Touch n Go reward immediately after completing a survey.`,
                    `Confirmed the accuracy of copywriting across three languages, ensuring all text was correct, consistent, and culturally appropriate.`
                ]
            }
        ]
    },
    // Personal Portfolio
    {
        p_id: 14,
        p_title: 'Personal Portfolio',
        p_role: [2],
        p_link: '/',
        p_tag: ['WebDevelopment'],
        p_contributors: [
            {
                id: ContributorId.Hatta,
                name: ContributorName.Hatta,
                role: ContributorRole.FrontendDeveloper
            }
        ],
        p_imgs: [
            {
                id: 1,
                link: '/imgs/project/img-p-pp-1.webp'
            },
            {
                id: 2,
                link: '/imgs/project/img-p-pp-2.webp'
            },
            {
                id: 3,
                link: '/imgs/project/img-p-pp-3.webp'
            }
        ],
        p_content: [
            {
                id: 1,
                description:
                    'Developed my personal portfolio website from scratch to showcase my projects, skills and more. Designed initially in Figma and built using Next.js and Tailwind CSS.'
            },
            {
                id: 2,
                bullet_point: [
                    `No Online Presence. I previously lacked a dedicated platform to display my projects and limiting my visibility in the tech industry.`,
                    `Project Showcase Needs. There was a need for a centralized, accessible space to present my projects with detailed descriptions and visuals.`
                ]
            },
            {
                id: 3,
                bullet_point: [
                    `Modern Tech Stack. Built the website with Next.js for a fast, scalable framework, paired with Tailwind CSS for responsive and efficient styling.`,
                    `Project Showcase. Developed dedicated sections to display projects with descriptions, visuals, and outcomes.`
                ]
            },
            {
                id: 4,
                bullet_point: [
                    `UI/UX Design. Created wireframes and high-fidelity designs in Figma, focusing on intuitive navigation, visual hierarchy, and a modern aesthetic.`,
                    `Frontend Development. Built the website using Next.js, implementing dynamic routing, server-side rendering, and static site generation for optimal performance.`
                ]
            }
        ]
    }
];

export { data_projects };
