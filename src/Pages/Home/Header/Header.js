import React from 'react';
import img from '../../../images/Rakib.jpg'
import { TypeAnimation } from 'react-type-animation';
import resume from '../../../resume/RakibulHasanResume.pdf'
const Header = () => {
    return (
        <div className='lg:flex justify-evenly mb-10 text-white'>
            <div className="w-2/5 mt-5">
                <h1 className='text-xl'>Hello</h1>
                <TypeAnimation
                    sequence={[
                        'I am Rakibul Hasan, a Designer',
                        1500,
                        'I am Rakibul Hasan, a Developer',
                        1000
                    ]}
                    speed={10} // Custom Speed from 1-99 - Default Speed: 40
                    style={{ fontSize: '2em' }}
                    wrapper="span" // Animation will be rendered as a <span>
                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                />
                <p className='mt-5'>A self-motivated and enthusiastic web developer with a deep interest in JavaScript and other programming languages. Seeking a Web Developer position in a company where I can use my skills and develop my skills .
                </p>
                {/* <button className='btn mt-5 bg-sky-800 text-white mr-5'>Download My Resume</button> */}
                <a
                    className="btn mt-5 bg-sky-800 text-white mr-5"
                    href={resume}
                    download="RakibulHasanResume.pdf"
                >
                    Download Resume
                </a>
                <button className='btn mt-5 border-white text-sky-200 hover:bg-sky-800 hover:text-white hover:border-white '>Get In Touch</button>
            </div>
            <div className=''>
                <img className='h-72 rounded-full' src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;