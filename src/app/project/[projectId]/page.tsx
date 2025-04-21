import type { Metadata, ResolvingMetadata } from 'next';
import { data_projects } from '@/database_local/data-projects';
import { SProjectDetail, SMoreProjects } from '@/containers';
import { Breadcrumb, Container } from '@/components';
import { IDataProject } from '@/data_types/projects';

interface IProjectDetails {
    params: Promise<{ projectId: string }>;
}

export const generateMetadata = async (
    { params }: IProjectDetails,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const { projectId } = await params;

    const currentProject = data_projects.find(
        (project) => project.p_id === Number.parseInt(projectId)
    );

    const project = currentProject || data_projects[0];

    return {
        title: project.p_title || 'Default Project Title',
        description: `Project details of ${project.p_title}`
        // openGraph: {
        //     title: project.p_title || 'Default Project Title',
        //     description: `Details for project: ${project.p_title}`,
        //     url: project.p_link || `https://myapp.com/projects/${project.id}`,
        //     images: [
        //         {
        //             url: 'https://myapp.com/default-image.jpg',
        //             width: 1200,
        //             height: 630,
        //             alt: `${project.p_title} Image`
        //         }
        //     ]
        // }
    };
};

const ProjectDetail = async ({ params }: IProjectDetails) => {
    const pId = (await params).projectId;

    const currentProject = data_projects.find((project) => project.p_id === Number.parseInt(pId));

    // For Section 1 Project Detail: Fallback to first project if no match is found
    const data = currentProject;

    // FOR Section 2 Other Projects: Function to get random 2
    const getRandomElements = (array: IDataProject[]) => {
        // Create a copy of the array to avoid modifying the original
        const arr = [...array];

        // Shuffle array
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        // Return first 2 elements
        return arr.slice(0, 3);
    };

    const random_threem_projects = getRandomElements(data_projects);

    return (
        <>
            {data ? (
                <>
                    <Breadcrumb p_title={data.p_title} show_p_detail />
                    <SProjectDetail
                        p_id={data.p_id}
                        p_title={data.p_title}
                        p_link={data.p_link}
                        p_content={data.p_content}
                        p_role={data.p_role}
                        p_imgs={data.p_imgs}
                        p_contributors={data.p_contributors}
                        p_tag={data.p_tag}
                    />
                    <SMoreProjects random_threem_projects={random_threem_projects} />
                </>
            ) : (
                <Container className='flex h-[50vh] items-center justify-center text-center'>
                    <h1>No data found or project id: {pId} does not exist</h1>
                </Container>
            )}
        </>
    );
};
export default ProjectDetail;

// export async function generateMetadata(
//     { params }: Props,
//     parent: ResolvingMetadata
// ): Promise<Metadata> {
//     // Resolve the params promise to get the id
//     const { caseId } = await params;
//     console.log(`case id:` + caseId);

//     // Find the project in the local data
//     const currentProject = data_projects.find((project) => project.id === Number.parseInt(caseId));
//     console.log(`current project` + currentProject);

//     // Fallback to the first project if no match is found
//     const project = currentProject || data_projects[0];

//     // Return metadata based on the project
//     return {
//         title: project.p_title || 'Default Project Title',
//         description: `Details for project: ${project.p_title}`,
//         openGraph: {
//             title: project.p_title || 'Default Project Title',
//             description: `Details for project: ${project.p_title}`,
//             url: project.p_link || `https://myapp.com/projects/${project.id}`,
//             images: [
//                 {
//                     url: 'https://myapp.com/default-image.jpg', // Replace with actual image if available
//                     width: 1200,
//                     height: 630,
//                     alt: `${project.p_title} Image`
//                 }
//             ]
//         }
//     };
// }
