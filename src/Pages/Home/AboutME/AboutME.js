import React from 'react';
import { FaInstagram,  FaGithub } from 'react-icons/fa';
import { GrLinkedin} from 'react-icons/gr';
import { ImFacebook2} from 'react-icons/im';
import pics from '../../../images/jacket.jfif'
const AboutME = () => {
    return (
        <div className='mt-16 mb-10'>
            <div data-aos='fade-right' className='flex justify-center mb-10'>
                <h1 className='text-4xl font-bold'>About <span className='text-green-400'>My-Self</span> </h1>
            </div>
            <div className='flex lg:justify-center'>
                <div data-aos='fade-up' className='rounded-2xl lg:w-4/5 p-20 lg:flex justify-between'  >
                    <div>
                        <div data-aos='fade-right' className="avatar ">
                            <div className="h-80 rounded-full ring ring-success shadow-2xl ring-offset-base-100 ring-offset-2 ">
                                <img src={pics} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className=' lg:pl-8 lg:text-center mt-10'>
                        <h1 className='text-3xl font-bold text-white'>Hi...</h1>
                        <p className='text-white'>
                            I live in Dhaka Bangladesh. I have been establishing myself in the web development sector for a year. I like to see, understand and learn new things. So I never get tired of learning. No matter what I do, I am dedicated to my work. I am active and hardworking. I enjoy learning new things and tackling new challenges. I am very simple and sociable
                        </p>
                        <div data-aos='fade-left' className='flex mt-9 ml-12 justify-center mr-4'>
                          
                            <span className='mr-4 text-2xl'><a href="https://www.linkedin.com/in/omar-faruk-b66513257/" target={'_blank'}><GrLinkedin></GrLinkedin></a> </span>
                            <span className='mr-4 text-2xl'><a href="https://www.facebook.com/profile.php?id=100064049902400" target={'_blank'}><ImFacebook2></ImFacebook2></a></span>
                            <span className='mr-4 text-2xl'><a href="https://github.com/omarfarukee" target={'_blank'}><FaGithub></FaGithub></a></span>
                            <span className='mr-4 text-2xl'><a  href="" target={'_blank'}><FaInstagram></FaInstagram></a></span>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutME;