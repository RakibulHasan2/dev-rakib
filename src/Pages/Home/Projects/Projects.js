import React from 'react';
import project from '../../../Data/projectsData.json'
import ProjectCard from './ProjectCard';
const Projects = () => {
    const projectsData = project;
    // console.log(projectsData)
    return (
        <div className='text-white mb-10'>
            <h1 className='text-4xl text-center font-bold mt-20 mb-8'>Some Of My Projects</h1>
            <div className='lg:grid grid-cols-3 ml-10'>
                {
                    projectsData.map(project => <ProjectCard
                    key={project.name}
                    project = {project}
                    ></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;