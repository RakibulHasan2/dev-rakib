import React from 'react';
import project from '../../../Data/projectsData.json'
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
const Projects = () => {
    const projectsData = project;
    // console.log(projectsData.slice(0,3))
    return (
        <div className='text-white mb-10 p-7'>
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="3500" className='text-4xl text-center font-bold  mb-8'>Some Of My Projects</h1>
            <div className='lg:grid grid-cols-3 mt-10 lg:ml-10'>
                {
                    projectsData.slice(0, 3).map(project => <ProjectCard
                        key={project.name}
                        project={project}
                    ></ProjectCard>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/projects' className='btn mt-4 bg-sky-900 border-none text-white'>See All</Link>
            </div>
        </div>
    );
};

export default Projects;