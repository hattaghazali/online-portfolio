export interface ISkill {
    id?: number;
    label: string;
    desc: string;
    link: string;
}

export interface IDataTechIcons {
    data_stack: ISkill[];
    data_software_testing: ISkill[];
    data_tool: ISkill[];
    data_design: ISkill[];
}
