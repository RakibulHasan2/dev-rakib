import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { RiArrowRightSLine } from 'react-icons/ri';
const AllProjectsCard = ({ project }) => {
    const {id, name, tech, image1, liveSite, clientSiteCode, serverSiteCode } = project;
    return (
        <div data-aos='fade-right' className="card w-96 bg-base-100 shadow-2xl">
        <figure><img className='h-56' src={image1} alt="Shoes" /></figure>
        <div className="card-body">
            <div className='flex justify-between mb-4'>
                <h2 className="card-title text-2xl">
                    {name}
                </h2>
                <Link to={`${id}`} className='bg-gray-900 btn text-white'>See Details <RiArrowRightSLine></RiArrowRightSLine></Link>
            </div>
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

export default AllProjectsCard;