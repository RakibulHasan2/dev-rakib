import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiMessageFill } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { FaFacebookSquare } from 'react-icons/fa'
import { GrLinkedin} from 'react-icons/gr'
import { ImTwitter} from 'react-icons/im'
const ContactMe = () => {
    return (
        <div className='lg:p-16 p-4'>
            <h1 className='font-bold text-center mt-5 mb-8 text-white text-3xl'>Contact Me</h1>
            <div className='lg:flex justify-evenly p-14 mb-10 bg-gray-900'>
                <div className='rounded-lg lg:p-8'>
                    <h1 className='text-3xl font-bold mb-6'>Get a Quote</h1>
                    <h1 className='text-3xl font-bold mb-14'>Fill Up the form and I will get back <br /> to you within 24 Hours</h1>
                    <a href=' ' className='flex text-xl font-bold mb-8'><BsFillTelephoneFill className='mt-1 mr-5'></BsFillTelephoneFill> +880122323232</a>
                    <a href=' ' className='flex text-xl font-bold mb-8'><RiMessageFill className='mt-1 mr-5 text-2xl'></RiMessageFill> rakibulhasan99445@gmail.com</a>
                    <h1 className='flex text-xl font-bold'><MdLocationOn className='mr-5 text-3xl'></MdLocationOn   > Gazipura, Tongi</h1>
                    <div className='flex justify-center mt-16 lg:p-4'>
                        <FaFacebookSquare className='mr-5 text-3xl'></FaFacebookSquare>
                        <GrLinkedin className='mr-5 text-3xl'></GrLinkedin>
                        <ImTwitter className='text-3xl'></ImTwitter>
                    </div>
                </div>
                <div className='rounded-lg lg:mt-0 mt-8 lg:p-8 bg-white shadow-2xl'>
                    <h1 className='title text-center text-3xl font-bold mb-8'>Login</h1>
                    <form>
                        <div className='login-form flex justify-evenly'>
                            <label htmlFor="name" className='text-xl  text-black font-bold'>Name : </label>
                            <input type="text" className='p-2 lg:w-80 bg-gray-300 text-black rounded-xl' name='name' id='' placeholder='Your Name' />
                        </div>
                        <br />
                        <div className='login-form  flex justify-evenly'>
                            <label htmlFor="email" className='text-xl  text-black  font-bold'>Email : </label>
                            <input type="email" className='p-2 lg:w-80 bg-gray-300  text-black rounded-xl' name='email' id='' placeholder='Your email address' />
                        </div>
                        <br />
                        <textarea name='details' className="textarea textarea-success lg:w-96 w-72 h-60 mb-5 ml-3" placeholder="Send Your Message" required></textarea> <br />
                        <button className='btn btn-accent ml-3 mb-5'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;