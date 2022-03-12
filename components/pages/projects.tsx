import { FC } from 'react';

import ProjectCard from '../project-card';

interface ProjectsProps { }

const Projects: FC<ProjectsProps> = (props) => {
    return <div className='bg-myblue p-8 md:p-20 lg:p-28' id='projects'>
        <h2 className='text-center text-4xl text-white mb-10 font-extrabold'>Projects</h2>

        <div className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
            <ProjectCard title="ROaufgaben.de"
                description='ROaufgaben is a web application that helps you to manage your tasks. You can upload your tasks from the school and everyone in your class can see it.'
                image='/roaufgaben.jpeg'
                link='https://roaufgaben.de'
                githubUrl='https://github.com/luckybulgur/roaufgaben-next'
                imageHeight={865}
                imageWidth={1788}
            ></ProjectCard>

            <ProjectCard title="FiveM-Dashboard"
                description='FiveM-Dashbaord is a web application that displays your ingame informations. You can transfer your cars to any player on the server.'
                image='https://raw.githubusercontent.com/LuckyBulgur/fivem-dashboard/master/images/index.png'
                githubUrl='https://github.com/luckybulgur/fivem-dashboard'
                imageHeight={925}
                imageWidth={1916}
            ></ProjectCard>

            <ProjectCard title="Lucky-Tanke"
                description='Lucky-Tanke is a FiveM gas station for your server. You are welcome to use it for your server.'
                image='https://raw.githubusercontent.com/LuckyBulgur/lucky_tanke/master/screenshot.png'
                githubUrl='https://github.com/luckybulgur/lucky_tanke'
                imageHeight={1080}
                imageWidth={1920}
            ></ProjectCard>
        </div>
    </div>
}

export default Projects