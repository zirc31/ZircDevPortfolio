import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import coverImg from '../assets/cover.jpg';

const FrontPage = () => {

    // const navigate = useNavigate();

    const links = [
        { name: 'CV', href: 'https://drive.google.com/drive/folders/1V-nIJEQhsYCkqr7XEFuqO8XqQS5UrFy3?usp=share_link' },
        { name: 'Linkedin', href: 'https://www.linkedin.com/in/cx31-uiuxdev/' },
        { name: 'Facebook', href: 'https://www.facebook.com/zircitsolutions' },
        { name: 'Github', href: 'https://github.com/zirc31' },
    ];

    const stats = [
        { name: 'Projects worldwide', value: '12' },
        { name: 'Clients worked with', value: '10+' },
        { name: 'Hours per week', value: '40' },
        { name: 'Rate', value: '$ ? / hr' },
    ];

    return (
        <>
        <Navigation />
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                src={ coverImg }
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div className="bg-red-950 -z-10 absolute top-0 left-0 w-full h-full opacity-70"> &nbsp;
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">
                    <h2 className="text-2xl font-extrabold text-white sm:text-4xl">Hi!, I'm Zirc Albon</h2>
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        UI / UX Designer &<br />
                        Full-stack Developer
                    </h2>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <HashLink to="/#contact">
                        <span
                            // type="button"
                            className="bg-red-800 text-white font-medium border-2 border-red-800 px-8 py-2 ">
                            Got a project? Let's talk.
                        </span>
                    </HashLink>
                    <HashLink to="/#contact">
                        <span
                            // type="button"
                            className="bg-white text-red-800 font-medium border-2 border-red-800 px-8 py-2 ">
                            Hire Me
                        </span>
                    </HashLink>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {
                            links.map((link) => (
                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))
                        }
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                        <div key={stat.name} className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <div className="footer-spacing">&nbsp;</div>
        <Footer />
        </>
    )
}

export default FrontPage;
