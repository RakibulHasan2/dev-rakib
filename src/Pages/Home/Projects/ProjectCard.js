import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
const ProjectCard = ({ project }) => {
    const { name, tech, image, liveSite, clientSiteCode, serverSiteCode } = project;
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure><img className='h-56' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <div className="card-actions justify-end">
                    {
                        tech.map(techName =>
                            <p className='bg-slate-400 rounded-xl p-3'>{techName}</p>
                        )
                    }
                </div>
                <div class="flex justify-between mt-5">
                    <a href={liveSite} class="card-link flex"><AiOutlineEye className='mr-2 mt-1'></AiOutlineEye> Live Site</a>
                    <a href={clientSiteCode} class="card-link flex"><FaGithub className='mr-2 mt-1'></FaGithub> C-Code</a>
                    <a href={serverSiteCode} class="card-link flex"><FaGithub className='mr-2 mt-1'></FaGithub> S-Code</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;