import React from 'react';
import { useState, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import zircLogo from '../assets/zirc_logo.png';

const Navigation = () => {

    const toggleMenuRef = useRef();

    const [ toggleMenu, setToggleMenu  ] = useState(false);

    const handleShowMenu = () => {
        if ( toggleMenu === false ) {
            setToggleMenu(true);
            toggleMenuRef.current.classList.remove('sm:hidden')
        } else {
            setToggleMenu(false);
            toggleMenuRef.current.classList.add('sm:hidden')
        }
    };

    return (
        <>
            <div id="home"></div>
            <nav className="z-50 flex items-center justify-between flex-wrap bg-slate-50 bg-opacity-80 sticky top-0 p-6">
                <div className="flex items-center flex-shrink-0 text-gray-900 mr-6">
                    <img className="logo mr-2" src={ zircLogo } alt='Zirc Logo' />
                    <span className="font-semibold text-xl tracking-tight">&nbsp;</span>
                </div>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-50 hover:text-white hover:border-white"
                        onClick={ () => handleShowMenu() }
                        >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div ref={ toggleMenuRef } className="w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:hidden">
                    <div className="text-base lg:flex-grow">
                        <a href="/#home" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-red-900 mr-5 font-semibold">
                        Home
                        </a>
                        <a href="/#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-red-900 mr-5 font-semibold">
                        About
                        </a>
                        <a href="/#skills" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-red-900 mr-5 font-semibold">
                        Skills
                        </a>
                        <a href="/#projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-red-900 mr-5 font-semibold">
                        Projects
                        </a>
                        <a href="/#contact" className="block mt-4 lg:inline-block lg:mt-0 text-gray-900 hover:text-red-900 font-semibold">
                        Contact
                        </a>
                    </div>
                    <div>
                        <HashLink to="/#contact">
                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded bg-red-800 text-white border-red-800 hover:border-red-800 hover:text-red-900 hover:bg-white mt-4 lg:mt-0">I'm online send me a message</button>
                        </HashLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
