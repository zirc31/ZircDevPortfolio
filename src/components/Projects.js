import React from 'react';
import { Link } from "react-router-dom";
import aniflixProj from '../assets/aniflix.min.png';
import hayleyTravelProj from '../assets/a-travel-website-for_hayleytravel.min.png';
import aSimpleJavaScriptBrowserGame from '../assets/p2-js-game-zircdev_thumb.min.png';
import simpleHtmlCssPortfolio from '../assets/zirc_thumbnail.png';
import sendFormViaJsAjaxToGoogleAppsScript from '../assets/sendform-via-JS-Ajax-To-Google-AppsScript.min.png';
// import toDoListApp from '../assets/ToDoListApp.min.png';
import oralWellnessDentalClinicApp from '../assets/OralWellnessDentalClinic_ss.min.png';

const Projects = () => {
    return (
    <>
        <div className='w-full flex justify-center bg-slate-900'>
            <div id="projects" className='mb-5'></div>
            <div className='sm:w-full md:container my-20 sm:px-10 md:px-20 text-white'>
                <div>
                    <h1 className='text-2xl font-medium'>WHAT I DID</h1>
                    <h1 className='text-6xl font-bold'>MY PROJECTS</h1>
                    <div className='z-divider-w my-5'></div>
                </div>
                <div className='grid gap-7 sm:grid-cols-1 md:grid-cols-3 my-20'>
                    
                    <div className="w-full text-center">
                        <img src={ aniflixProj } alt="Aniflix." />
                        <div className="project-item-title">
                            Aniflix
                        </div>
                        <div className="project-item-desc">
                            A Streaming Anime Site with a Real-time Chat integration.
                        </div>
                        <div className="project-item-skills">
                            Skills : <span>Socket.IO</span> <span>ReactJS</span> <span>NodeJS</span> <span>ExpresJS</span> <span>MongoDB</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/aniflix" target="_blank">Git</Link> | <Link to="https://aniflix-web-app.netlify.app" target="_blank">View site</Link>
                        </div>
                    </div>

                    <div className="w-full text-center">
                        <img src={ hayleyTravelProj } alt="Hayley Travel website." />
                        <div className="project-item-title">
                            Hayley Travel (Full-stack MERN)
                        </div>
                        <div className="project-item-desc">
                            An online Travel Booking website for Hayley Travel.
                        </div>
                        <div className="project-item-skills">
                            Skills : <span>ReactJS</span> <span>NodeJS</span> <span>ExpresJS</span> <span>MongoDB</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/hayleytravel-frontend" target="_blank">Git</Link> | <Link to="#" target="_blank">View site</Link>
                        </div>
                    </div>


                    <div className="w-full text-center">
                        <img src={ aSimpleJavaScriptBrowserGame } alt="A Simple JavaScript Browser Game." />
                        <div className="project-item-title">
                        A Simple JavaScript Browser Game
                        </div>
                        <div className="project-item-desc">
                        A simple JavaScript browser game without using Canvas & Libraries.
                        </div>
                        <div className="project-item-skills">
                        Skills : <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/ASimpleJavaScriptFightingGame" target="_blank">Git</Link> | <Link to="https://p2-js-game-zircdev.netlify.app/" target="_blank">View site</Link>
                        </div>
                    </div>

                    <div className="w-full text-center">
                        <img src={ oralWellnessDentalClinicApp } alt="Oral Wellness Dental Clinic App." />
                        <div className="project-item-title">
                            Oral Wellness Dental Clinic App
                        </div>
                        <div className="project-item-desc">
                            Dental Booking App, with Patient Record Database.
                        </div>
                        <div className="project-item-skills">
                            Skills : <span>Figma to HTML|CSS</span> <span>ReactJS</span> <span>NodeJS</span> <span>ExpresJS</span> <span>MongoDB</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/OralWellnessDentalClinic" target="_blank">Git</Link> | <Link to="https://drive.google.com/file/d/1rbQVbEuZQ62tQaqpuIXZFuO_jEULCK-c/view" target="_blank">Video Demo</Link>
                        </div>
                    </div>

                    <div className="w-full text-center">
                        <img src={ simpleHtmlCssPortfolio } alt="Simple HTML+CSS Portfolio." />
                        <div className="project-item-title">
                        Simple HTML+CSS Portfolio
                        </div>
                        <div className="project-item-desc">
                        A simple HTML & CSS portfolio built by using Float, Flexbox & Grid.
                        </div>
                        <div className="project-item-skills">
                        Skills : <span>HTML</span> <span>CSS</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/SimpleHtmlCssPortfolio" target="_blank">Git</Link> | <Link to="https://p1-htmlcss-zircdev.netlify.app/" target="_blank">View site</Link>
                        </div>
                    </div>


                    <div className="w-full text-center">
                        <img src={ sendFormViaJsAjaxToGoogleAppsScript } alt="Send Form via JS Ajax to Google Apps Script." />
                        <div className="project-item-title">
                        Send Form via JS Ajax to Google Apps Script.
                        </div>
                        <div className="project-item-desc">
                        Using a Google Apps Script as a back-end and to send e-mail.
                        </div>
                        <div className="project-item-skills">
                        Skills : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>AppsScript</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/SimpleHtmlCssPortfolio" target="_blank">Git</Link> | <Link to="https://p1-htmlcss-zircdev.netlify.app/#contact" target="_blank">View site</Link>
                        </div>
                    </div>


                    {/* <div className="w-full text-center">
                        <img src={ toDoListApp } alt="To-Do List App." />
                        <div className="project-item-title">
                        To-Do List App
                        </div>
                        <div className="project-item-desc">
                        This is a simple HTML To-Do List App and Styling with Bootstrap.
                        </div>
                        <div className="project-item-skills">
                        Skills : <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>Bootstrap</span>
                        </div>
                        <div className="project-item-links">
                            <Link to="https://github.com/zirc31/ToDoListApp" target="_blank">Git</Link> | <Link to="https://todolistapp-zircdev.netlify.app/" target="_blank">View site</Link>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </>
    )
}

export default Projects;
