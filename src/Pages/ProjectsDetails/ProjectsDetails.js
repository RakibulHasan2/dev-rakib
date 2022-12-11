import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectsDetails = () => {
    const projectsDetails = useLoaderData()
    console.log(projectsDetails)
    return (
        <div>
            
        </div>
    );
};

export default ProjectsDetails;