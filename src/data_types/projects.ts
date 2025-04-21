export type TTags =
    | 'WebDevelopment'
    | 'CorporateWebsite'
    | 'Analytic'
    | 'AIChatBot'
    | 'Saas'
    | 'AppDevelopment'
    | 'UserDashboard'
    | 'AdminDashboard';

export enum ContributorRole {
    SoftwareTester = 'Software Tester',
    BackendDeveloper = 'Backend Developer',
    FrontendDeveloper = 'Frontend Developer',
    UIDesigner = 'UI Designer',
    ProjectManager = 'Project Manager',
    TechLead = 'Tech Lead',
    DataAnalyst = 'Data Analyst'
}

export enum ContributorId {
    Natasha = 1,
    Pasha = 2,
    Aqmal = 3,
    Iskandar = 4,
    Afiq = 5,
    Vern = 6,
    Syamim = 7,
    Jonathan = 8,
    Irfan = 9,
    Hatta = 10,
    Oscar = 11,
    Kevin = 12,
    Liew = 13,
    Kate = 14,
    Hazimah = 15,
    Rattana = 16,
    Daniel = 17,
    Fahmi = 18
}

export enum ContributorName {
    Natasha = 'Natasha Kamarudin',
    Pasha = 'Pasha Fazil',
    Aqmal = 'Aqmal Mansor',
    Iskandar = 'Raja Iskandar',
    Afiq = 'Afiq Akmal',
    Vern = 'Vern Haou Liew',
    Syamim = 'Syamim Musa',
    Jonathan = 'Jonathan Lee',
    Irfan = 'Irfan Murad',
    Hatta = 'Hatta Ghazali',
    Oscar = 'Oscar Tan',
    Kevin = 'Kevin Lee',
    Liew = 'Liew Soon Hen',
    Kate = 'Kate',
    Hazimah = 'Nur Hazimah',
    Rattana = 'Rattana',
    Daniel = 'Daniel Looi',
    Fahmi = 'Fahmi'
}

export interface IDataProject {
    p_id: number;
    p_title: string;
    p_link?: string;
    p_content?: {
        id?: number;
        description?: string;
        bullet_point?: string[];
    }[];
    p_role: (1 | 2 | 3)[];
    p_tag?: TTags[];
    p_imgs: {
        id: number;
        link: string;
    }[];
    p_contributors: {
        id: ContributorId | number;
        name: ContributorName | string;
        role: ContributorRole | string;
    }[];
}
