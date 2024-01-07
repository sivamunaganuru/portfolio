import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link,useNavigate } from 'react-router-dom';
import {FaBars, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import profilepic from '../assets/WIN_20210121_13_01_59_Pro.jpg';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
  `p-2 text-lg uppercase transition duration-300 font-semibold ${
    isActive ? 'text-white focus:text-white' : 'text-inactive hover:text-white hover:opacity-75'
  }`;


  return (
    <nav>
        <div className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-[17rem]
         justify-center items-center bg-custom-orange p-5 lg:p-10 gap-2 z-20">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : 'inactive-link'}>
                <img src={profilepic} alt="Profile" className="rounded-full w-40 h-40 border-8 border-orange-300 mb-5 "/>
            </NavLink>
            <NavLink to="/" className={linkStyle}>About</NavLink>
            <NavLink to="/experience" className={linkStyle}>Experience</NavLink>
            <NavLink to="/education" className={linkStyle}>Education</NavLink>
            <NavLink to="/skills" className={linkStyle}>Skills</NavLink>
            <NavLink to="/awards" className={linkStyle}>Awards</NavLink>
        </div>
      
        <div className="lg:hidden flex justify-between items-center bg-custom-orange p-5">
            <div to="/" className="text-2xl font-semibold text-white">Resume</div>
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
                <FaBars className="text-2xl text-white"/>
            </button>
        </div>
        {isNavOpen && (
            <div className="flex flex-col justify-center bg-custom-orange px-5">
                <NavLink to="/" className={linkStyle} onClick={() => setIsNavOpen(!isNavOpen)}>About</NavLink>
                <NavLink to="/experience" className={linkStyle} onClick={() => setIsNavOpen(!isNavOpen)}>Experience</NavLink>
                <NavLink to="/education" className={linkStyle} onClick={() => setIsNavOpen(!isNavOpen)}>Education</NavLink>
                <NavLink to="/skills" className={linkStyle} onClick={() => setIsNavOpen(!isNavOpen)}>Skills</NavLink>
                <NavLink to="/awards" className={linkStyle} onClick={() => setIsNavOpen(!isNavOpen)}>Awards</NavLink>
            </div>
        )}
    </nav>
  );
};

export default Navigation;
