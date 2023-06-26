import React from 'react';
import aboutImg from '../assets/zirc.png';

const AboutFullContent = () => {
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
                    <p>I have been working as a web and software developer since 2009, and throughout my career, I have gained extensive experience in various programming languages. From the very beginning, I have been passionate about honing my hard coding skills, and I have actively pursued continuous learning and professional development opportunities.</p>
                    <br />
                    <p>Over the years, I have dedicated myself to expanding my knowledge base by engaging in online courses and completing a rigorous bootcamp recently. These experiences have allowed me to further enhance my skill set and stay up-to-date with the latest industry practices and technologies.</p>
                    <br />
                    <p>As a full-stack developer, I possess a comprehensive understanding of both front-end and back-end development. I have a knack for crafting intuitive user interfaces, ensuring seamless user experiences, and implementing robust and efficient backend solutions.</p>
                    <br />
                    <p>In addition to my technical expertise, I am also a strong collaborator and a creative problem-solver. I thrive in dynamic environments, leveraging my skills to develop innovative solutions and contribute to the success of projects.</p>
                    <br />
                    <p>Overall, my journey as a web and software developer has been a continuous learning process, and I am excited to apply my expertise and contribute to meaningful projects that make a positive impact.</p>
                    <br />
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
                </div>
            </div>
        </>
    )
}

export default AboutFullContent;