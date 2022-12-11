import React from 'react';
import img from '../../../images/269847743_1314759208937930_5561342125142073302_n.jpg'
import { TypeAnimation } from 'react-type-animation';
import { BiDownload } from 'react-icons/bi';
import resume from '../../../resume/RakibulHasanResume.pdf'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import './Header.css'
const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div className='lg:flex justify-evenly p-14  mb-10 text-white'>
            <div data-aos='fade-right' data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="header-text mt-10 p-7 ">
                <h1 className='text-2xl'>Hello,</h1>
                <TypeAnimation
                    sequence={[
                        'I am Rakibul Hasan, a Designer',
                        1500,
                        'I am Rakibul Hasan, a Developer',
                        1000
                    ]}
                    speed={10} // Custom Speed from 1-99 - Default Speed: 40
                    style={{ fontSize: '2.2em' }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
                <p className='mt-5'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript and other programming languages. Seeking a Web Developer position in a company where I can use my skills and develop my skills .
                </p>
                <a
                    className="btn mt-10 bg-sky-800 text-white mr-5"
                    href={resume}
                    download="RakibulHasanResume.pdf"
                >
                    <BiDownload className='mr-2'></BiDownload> Download Resume
                </a>
                <a href='#contact' className='btn mt-5 border-white text-sky-200 hover:bg-sky-800 hover:text-white hover:border-white '>Get In Touch</a>
            </div>
            <div data-aos='fade-left' data-aos-offset="300"
                data-aos-easing="ease-in-sine" className='mt-8'>
                <img className='h-72 mx-6 rounded-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;