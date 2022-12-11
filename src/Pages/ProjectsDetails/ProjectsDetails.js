import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiOutlineEye } from 'react-icons/ai';
import { FaGithub, FaEye } from 'react-icons/fa';
import './ProjectsDetails.css'
const ProjectsDetails = () => {
    const projectsDetails = useLoaderData()
    console.log(projectsDetails)
    const { id, name, tech, Details, points, image1, image2, image3, liveSite, clientSiteCode, serverSiteCode } = projectsDetails
    return (
        <div>
            <div className='p-5'>
                <div className='flex justify-center mt-5 mb-5 text-3xl font-bold text-green-500'>
                    <h1 className='text-3xl font-bold text-center'>{name}</h1>
                </div>

                <div className='bg-slate-700 rounded-xl p-6'>
                    <div className='grid grid-cols-3 p-10 lg:ml-3'>
                        <img className='w-96 rounded-lg' src={image1} alt="" />
                        <img className='w-96 rounded-lg' src={image2} alt="" />
                        <img className='w-96 rounded-lg' src={image3} alt="" />
                    </div>
                    <div className='flex justify-center mb-6'>
                        <span className='flex items-center p-2 rounded-3xl font-bold btn btn-success'><FaEye></FaEye><button className='ml-1'><a href={liveSite} target={'_blank'}>Live Site</a></button></span>
                        <span className='flex ml-3 items-center p-2 rounded-3xl  font-bold  btn btn-success'><FaGithub></FaGithub> <button className='ml-1'><a href={clientSiteCode} target={'_blank'}>Client repo</a></button></span>
                        <span className='flex ml-3 items-center p-2 rounded-3xl font-bold  btn btn-success'><FaGithub></FaGithub> <button className='ml-1'><a href={serverSiteCode} target={'_blank'}>Server repo</a></button></span>
                    </div>
                    <div className='flex justify-center  font-bold mb-4'>
                        <h1 className='text-3xl text-white'>{Details}</h1>
                        <div className='mb-10 w-1/2'>
                            <div>
                                {
                                    points.map((point) => <h1>{point}</h1>)
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold text-white text-center mb-6'>Technology Used :</h1>
                        <div className='card-actions justify-center mb-10'>
                            {
                                tech.map(techName =>
                                    <p className='bg-slate-400 rounded-xl p-3 text-white'>{techName}</p>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProjectsDetails;