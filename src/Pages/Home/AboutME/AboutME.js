import React from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { GrLinkedin } from 'react-icons/gr';
import { ImFacebook2 } from 'react-icons/im';
import pics from '../../../images/jacket.jfif'
import './AboutME.css'
const AboutME = () => {
    return (
        <div id='about' className='mt-16 mb-10'>
            <div data-aos='fade-right' className='flex justify-center mb-10'>
                <h1 className='text-4xl font-bold'>About <span className='text-green-400'>My-Self</span> </h1>
            </div>
            <div className='lg:flex lg:justify-evenly'>
                <div data-aos='fade-right' className="avatar flex flex-col">
                    <div className="h-96 w-96 rounded-full ring ring-success shadow-2xl ring-offset-base-100 ring-offset-2">
                        <img src={pics} alt='' />
                    </div>
                    <h1 className='text-3xl font-bold text-white mt-8 lg:text-left text-center '>Hi...</h1>
                    <p className='text-white lg:w-96 mb-10 lg:text-left text-center lg:p-0 p-4'>
                        I live in Dhaka Bangladesh. I have been establishing myself in the web development sector for a year. I like to see, understand and learn new things. So I never get tired of learning.
                    </p>
                </div>
                <div className=' lg:pl-8 lg:text-center'>
                    <div data-aos='fade-left' className='flex mt-4 ml-12 justify-center mr-4 mb-6'>
                        <span className='mr-4 text-2xl'><a href="https://www.linkedin.com/in/rakibul-hasan-0261a8236/" target='_blank'><GrLinkedin></GrLinkedin></a> </span>
                        <span className='mr-4 text-2xl'><a href="https://www.facebook.com/profile.php?id=100012115905344" target='_blank'><ImFacebook2></ImFacebook2></a></span>
                        <span className='mr-4 text-2xl'><a href="https://github.com/RakibulHasan2" target='_blank'><FaGithub></FaGithub></a></span>
                        <span className='mr-4 text-2xl'><a href="" target='_blank'><FaInstagram></FaInstagram></a></span>
                    </div>
                    <div className=''>
                        <h1 className='text-2xl  font-bold text-white text-center'>Programming Knowledge and skills</h1>
                        <div data-aos='fade-left' className='text-white lg:text-left text-center'>
                            <h1 className='text-xl font-bold text-white mb-2 lg:mt-0 mt-5'>Expertise:</h1>
                            <div className='lg:p-0 p-10 grid grid-cols-3 lg:grid-cols-5 gap-3'>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>JavaScript</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>ES6</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>ReactJS</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>React Bootstrap</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>React Router</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Bootstrap</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>HTML5</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>CSS3</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Material-UI</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Tailwind</p>
                            </div>
                        </div>
                        <div data-aos='fade-right' className='text-white lg:text-left text-center'>
                            <h1 className='text-xl font-bold text-white mb-2 mt-5'>Comfortable:</h1>
                            <div className='lg:p-0 p-10 grid grid-cols-3 lg:grid-cols-5 gap-3'>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Node.js</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Express.js</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'> Rest API</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>MongoDB</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Context API</p>
                                <p className='bg-teal-700 h-10 w-28 h-14 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Firebase authentication</p>
                            </div>
                        </div>
                        <div data-aos='fade-up' className='text-white lg:text-left text-center'>
                            <h1 className='text-xl font-bold text-white mb-2 mt-5'>Tools:</h1>
                            <div className='lg:p-0 p-10 grid grid-cols-3 lg:grid-cols-5 gap-1'>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Git</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>VS Code</p>
                                <p className='bg-teal-700 h-14 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'> Chrome Dev Tools</p>
                                <p className='bg-teal-700 h-10 w-24 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>GitHub</p>
                                <p className='bg-teal-700 h-10 w-32 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Netlify</p>
                                <p className='bg-teal-700 w-28 h-10 text-sm rounded-xl p-2 text-center hover:bg-slate-500'>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default AboutME;

