import React from 'react';

const Contact = () => {
    return (
        <>
        <div id="skills" className='mb-5'>&nbsp;</div>
        <div className='w-full flex justify-center bg-slate-200'>
            <div className='sm:w-full md:container my-20 sm:px-10 md:px-20 z-cl-secondary'>
            <div className="contact-content">
                    <div className="contact-container-right">
                        <div className="right-content">
                <form id="getInTouch" name="getInTouch" className="contact-form">
                    <div className="contact-content-item">
                        <label className="contact-label">Fullname</label>
                        <input
                            className="contact-field"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Input fullname"
                            required
                        />
                    </div>
                    <div className="contact-content-item">
                        <label className="contact-label">E-mail</label>
                        <input
                            className="contact-field"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Input e-mail"
                            required
                        />
                    </div>
                    <div className="contact-content-item">
                        <label className="contact-label">Contact Number</label>
                        <input
                            className="contact-field"
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Input contact number"
                            required
                        />
                    </div>
                    <div className="contact-content-item">
                        <label className="contact-label">Message</label>
                        <textarea
                            className="contact-field"
                            cols="30"
                            rows="5"
                            id="message"
                            name="message"
                            placeholder="Input message"
                            required
                        ></textarea>
                    </div>
                    <div className="git-form-msg-err">
                    </div>
                    <div className="contact-content-item">
                        <button
                            className="contact-btn"
                            type="submit"
                        >Send message</button>
                    </div>
                </form>
                <div id="getInTouch-mail-to" className="flex-centered">
                    <br /><br /><br />
                    <p>or send me an email to: <a href="mailto:zirc.developer@gmail.com" target="_blank">zirc.developer [at] gmail [dot] com</a>.</p>
                </div>
            </div></div></div>
            </div>
        </div>
        </>
    )
}

export default Contact;
