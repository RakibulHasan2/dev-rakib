import React from 'react';
import './ContactMe.css'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiMessageFill } from 'react-icons/ri'
import { MdLocationOn } from 'react-icons/md'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiInstagram} from 'react-icons/fi'
import { ImTwitter} from 'react-icons/im'
const ContactMe = () => {
    return (
        <div className='text-white'>
            <h1 className='font-bold text-center mt-10 mb-8 text-white text-3xl'>Contact Me</h1>
            <div className='lg:flex justify-evenly mb-10'>
                <div className='rounded-lg p-8 bg-gray-900 shadow-2xl'>
                    <h1 className='text-3xl font-bold mb-6'>Get a Quote</h1>
                    <h1 className='text-3xl font-bold mb-14'>Fill Up the form and I will get back <br /> to you within 24 Hours</h1>
                    <a href=' ' className='flex text-xl font-bold mb-8'><BsFillTelephoneFill className='mt-1 mr-5'></BsFillTelephoneFill> +880122323232</a>
                    <a href=' ' className='flex text-xl font-bold mb-8'><RiMessageFill className='mt-1 mr-5 text-2xl'></RiMessageFill> rakibulhasan99445@gmail.com</a>
                    <h1 className='flex text-xl font-bold'><MdLocationOn className='mr-5 text-3xl'></MdLocationOn   > Gazipura, Tongi</h1>
                    <div className='flex justify-center mt-8 p-4'>
                        <FaFacebookSquare className='mr-5 text-3xl'></FaFacebookSquare>
                        <FiInstagram className='mr-5 text-3xl'></FiInstagram>
                        <ImTwitter className='text-3xl'></ImTwitter>
                    </div>
                </div>
                <div className='rounded-lg p-8 bg-gray-900 shadow-2xl'>
                    <h1 className='title text-center text-3xl font-bold mb-8'>Login</h1>
                    <form>
                        <div className='login-form '>
                            <label htmlFor="name" className='text-2xl'>Name : </label>
                            <input type="text" className='p-2 w-80 bg-white text-black rounded-xl' name='name' id='' placeholder='Your Name' />
                        </div>
                        <br />
                        <div className='login-form  flex justify-evenly'>
                            <label htmlFor="email" className='text-2xl'>Email : </label>
                            <input type="email" className='p-2 w-80 bg-white text-black rounded-xl' name='email' id='' placeholder='Your email address' />
                        </div>
                        <br />
                        <textarea name='details' className="textarea textarea-success w-96 h-60 mb-5 ml-3" placeholder="Send Your Message" required></textarea> <br />
                        <button className='btn btn-accent ml-3'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;