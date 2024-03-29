import React from 'react';
import aboutImg from '../assets/zirc.png';
// import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const About = () => {
    return (
        <>
            <div id="about" className='mb-5'>&nbsp;</div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 my-20 sm:px-10 md:px-20 z-cl-secondary">
                <div className="about-left w-full px-4 sm:mb-10">
                    <div className="bg-indigo-300">
                        <img className="object-cover w-full shadow-2xl" alt='Zirc Albon.' src={ aboutImg } />
                    </div>
                </div>
                <div className="about-right w-auto col-span-2 px-4">
                    <h1 className='text-2xl font-medium'>WHO AM I</h1>
                    <h1 className='text-6xl font-bold z-cl-primary'>ZIRC ALBON</h1>
                    <div className='z-divider-r80 my-5'></div>
                    <p className='font-bold'>I specialize in providing comprehensive web development services that encompass all aspects of the development process:</p>
                    <h1 className='text-2xl font-bold mt-2 z-cl-primary'>UI/UX Design</h1>
                    <p>
                        I understand the importance of creating user-centric designs that are visually appealing, intuitive, and easy to navigate. I work closely with clients to create designs that align with their brand values and meet the needs of their target audience.
                    </p>
                    <h1 className='text-2xl font-bold mt-2 z-cl-primary'>Front-end Development</h1>
                    <p>
                        I specialize in creating responsive and interactive user interfaces using HTML, CSS, and JavaScript, and ensure that the website looks great on all devices and that users can interact with the website seamlessly.
                    </p>
                    <h1 className='text-2xl font-bold mt-2 z-cl-primary'>Back-end Development</h1>
                    <p>
                        I have experienced in creating robust and scalable web applications using various frameworks, libraries, and programming languages such as PHP, Python, and Node.js, and ensure that the website is secure, fast, and reliable.
                    </p>
                    <HashLink to="/about#about">
                        <button className="inline-block text-sm px-4 py-2 leading-none border rounded bg-red-800 text-white border-red-800 hover:border-red-800 hover:text-red-900 hover:bg-white mt-4 lg:mt-5">View more . . .</button>
                    </HashLink>
                </div>
            </div>
        </>
    )
}

export default About;
