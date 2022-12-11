import React, { useEffect, useState } from 'react';
import ProjectCard from '../Home/Projects/ProjectCard';
import AllProjectsCard from './AllProjectsCard';
const AllProjects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect(() =>{
        fetch('https://dev-rakib-servrer.vercel.app/projects')
        .then(res => res.json())
        .then(data => setProjectsData(data))
    } ,[])
    // const projectsData = project;
    console.log(projectsData)    
    return (
        <div className='text-white mb-10 p-7'>
        <h1 data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="3500" className='text-4xl text-center font-bold  mb-8'>All Projects</h1>
        <div className='lg:grid grid-cols-3 gap-8 mt-10 lg:ml-8'>
            {
                projectsData.map(project => <AllProjectsCard
                    key={project.name}
                    project={project}
                ></AllProjectsCard>)
            }
        </div>
    </div>
    );
};

export default AllProjects;