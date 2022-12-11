import React from 'react';
import project from '../../Data/projectsData.json'
import ProjectCard from '../Home/Projects/ProjectCard';
const AllProjects = () => {
    const projectsData = project;
    // console.log(projectsData)
    return (
        <div className='text-white mb-10 p-7'>
        <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3500" className='text-4xl text-center font-bold  mb-8'>All Projects</h1>
        <div className='lg:grid grid-cols-3 gap-8 mt-10 lg:ml-8'>
            {
                projectsData.map(project => <ProjectCard
                    key={project.name}
                    project={project}
                ></ProjectCard>)
            }
        </div>
    </div>
    );
};

export default AllProjects;