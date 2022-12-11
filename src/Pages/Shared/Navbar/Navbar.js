import React from 'react';
import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { GiSkills } from 'react-icons/gi'
import { FcAbout } from 'react-icons/fc'
import { TiContacts } from 'react-icons/ti'
import resume from '../../../resume/RakibulHasanResume.pdf'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><a href=' '>About</a></li>
                        <li><a href='#contact'>Contact</a></li>
                        <li><a href='#contact'>Blog</a></li>
                    </ul>
                </div>
                <a href=' ' className="btn btn-ghost text-white font-bold normal-case text-3xl">MERN STACK</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'><AiOutlineHome></AiOutlineHome> Home</Link></li>
                    <li><Link to='/projects'><AiOutlineProject></AiOutlineProject> Projects</Link></li>
                    <li><a href='/'><FcAbout></FcAbout> About</a></li>
                    <li><a href='#contact'><TiContacts></TiContacts> Contact</a></li>
                    <li><a href='#contact'><TiContacts></TiContacts> Blog</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href={resume}
                    download="RakibulHasanResume.pdf"
                    className="btn border-white  text-sky-200  hover:bg-sky-800 hover:text-white hover:border-white">
                    Resume
                </a>
            </div>
        </div>
    );
};

export default Navbar;