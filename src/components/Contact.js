import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const endPointUrl = process.env.REACT_APP_ENDPOINT_URL;
const endPointToken = process.env.REACT_APP_zAppToken;

const Contact = () => {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ contactNumber, setContactNumber ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ errMessage, setErrMessage ] = useState('');
    const [ successMessage, setSuccessMessage ] = useState(false);

    const requestBody = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNumber: contactNumber,
        message: message
    };

    const showSuccess = () => {
        setSuccessMessage(true);
        setTimeout(() => {
            setSuccessMessage(false);
        }, 5000);
    };

    const submitForm = () => {
        axios.post( `${endPointUrl}/app/endpoint/${endPointToken}`, requestBody ).then( response => {
            // console.log( response );
            // console.log( response.headers );
            if (response.status === 200 || response.status === 201 ){
                showSuccess();
            } else {
                let err = 'Error code 101: Please contact support!';
                console.error({ error: err });
                setErrMessage(err);
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    const handleSendForm = (e) => {

        e.preventDefault();

        // email validation
        if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ) {
            setErrMessage('');
        } else {
            setErrMessage('Invalid email format.');
        }

        if( errMessage > '' ) {
        } else {
            setFirstName('');
            setLastName('');
            setEmail('');
            setContactNumber('');
            setMessage('');
            submitForm();
        }

    };

    return (
        <>
        <div className='w-full flex justify-center bg-slate-200'>
            <div id="contact" className='mb-5'></div>
            <div className='sm:w-full md:container my-20 sm:px-10 md:px-20 z-cl-secondary'>
                <form className="w-full bg-white shadow-md rounded px-8 py-10 pb-8 mb-4 z-cl-primary"
                    onSubmit={ handleSendForm }>
                    <div>
                        <h1 className='text-2xl font-medium z-cl-secondary'>CONTACT ME</h1>
                        <h1 className='text-6xl font-bold z-cl-primary'>GET IN TOUCH</h1>
                        <div className='z-divider-r80 my-5'></div>
                    </div>
                    {
                        !successMessage ?
                        <>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label for="first-name" class="block mb-2 text-sm font-medium dark:text-white">First name:</label>
                                    <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="first-name" type="text" placeholder="First name"
                                        value={ firstName }
                                        onChange={ e => setFirstName(e.target.value) }
                                        required/>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label for="last-name" class="block mb-2 text-sm font-medium dark:text-white">Last name:</label>
                                    <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="last-name" type="text" placeholder="Last name"
                                        value={ lastName }
                                        onChange={ e => setLastName(e.target.value) }
                                        required/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label for="email" class="block mb-2 text-sm font-medium dark:text-white">E-mail:</label>
                                    <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="email" type="email" placeholder="your.email@mail.com"
                                        value={ email }
                                        onChange={ e => setEmail(e.target.value) }
                                        required/>
                                    <p className="text-gray-600 text-xs italic">We'll never share your email with anyone else.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label for="contact-number" class="block mb-2 text-sm font-medium dark:text-white">Contact number:</label>
                                    <input className="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="contact-number" type="text" placeholder="Contact number"
                                        value={ contactNumber }
                                        onChange={ e => setContactNumber(e.target.value) }
                                        required/>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label for="message" class="block mb-2 text-sm font-medium dark:text-white">Message:</label>
                                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm z-cl-form bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your inquiries here..."
                                        value={ message }
                                        onChange={ e => setMessage(e.target.value) }
                                        required></textarea>
                                </div>
                            </div>
                            {
                                errMessage &&
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3 text-center">
                                        <p className="text-red-500 text-xs italic">{ errMessage }</p>
                                    </div>
                                </div>
                            }                    
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <button
                                        type="submit"
                                        className="w-full bg-red-800 text-white font-medium border-2 border-red-800 rounded-lg px-8 py-2">
                                        Send inquiry
                                    </button>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="flex flex-wrap -mx-3 mb-6 p-20 sm:p-10">
                                <h2 className="w-full text-center font-sans text-3xl font-bold text-gray-900 sm:text-4xl md:mx-auto">
                                    Message successfully submitted!
                                </h2>
                                <p className="w-full text-center text-gray-700 md:text-lg">
                                    We have received your message and would like to thank you for writing to us. If your inquiry is urgent, you may contact us via <Link to="https://www.facebook.com/zircitsolutions" target="_blank" className='z-cl-spn'>Facebook</Link> or <Link to="https://www.linkedin.com/in/cx31-uiuxdev/" target="_blank" className='z-cl-spn'>Linkedin</Link>.
                                </p>
                            </div>
                        </>
                    }
                </form>
            </div>
        </div>
        </>
    )
}

export default Contact;
