import React from 'react';

const Contact = () => {
    return (
        <>
        <div className='w-full flex justify-center bg-slate-200'>
            <div id="contact" className='mb-5'></div>
            <div className='sm:w-full md:container my-20 sm:px-10 md:px-20 z-cl-secondary'>
                <form className="w-full bg-white shadow-md rounded px-8 py-10 pb-8 mb-4 z-cl-primary">
                    <div>
                        <h1 className='text-2xl font-medium z-cl-secondary'>CONTACT ME</h1>
                        <h1 className='text-6xl font-bold z-cl-primary'>GET IN TOUCH</h1>
                        <div className='z-divider-r80 my-5'></div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="first-name" class="block mb-2 text-sm font-medium dark:text-white">First name <span className=' text-red-600'>*</span>:</label>
                            <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="first-name" type="text" placeholder="First name" required/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label for="last-name" class="block mb-2 text-sm font-medium dark:text-white">Last name <span className=' text-red-600'>*</span>:</label>
                            <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="last-name" type="text" placeholder="Last name" required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label for="email" class="block mb-2 text-sm font-medium dark:text-white">E-mail <span className=' text-red-600'>*</span>:</label>
                            <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="text" placeholder="your.email@mail.com" required/>
                            <p className="text-gray-600 text-xs italic">We'll never share your email with anyone else.</p>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label for="contact-number" class="block mb-2 text-sm font-medium dark:text-white">Contact number <span className=' text-red-600'>*</span>:</label>
                            <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="contact-number" type="text" placeholder="Contact number" required/>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label for="message" class="block mb-2 text-sm font-medium dark:text-white">Message <span className=' text-red-600'>*</span>:</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your inquiries here..."></textarea>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3 text-center">
                            <p className="text-red-500 text-xs italic">Error message here "Please fill out this field." </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <button
                                type="button"
                                className="w-full bg-red-800 text-white font-medium border-2 border-red-800 rounded-lg px-8 py-2">
                                Send inquiry
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact;
