import React from 'react'
import './Contact.css';

function Contact() {
    return (
        <div>
            {/* <section className="apparel__banner py-5">
                <div className="container">
                    <div className="row px-4 px-lg-5 py-lg-4 align-items-center">
                        <div className="col-lg-6">
                            <h1 className="h2 text-uppercase text-light mb-0 mt-1">Contact Details</h1>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="contactDetails__section">
                <div className="container container__details">
                    <div className=" contact__info">
                        <h2>Contact Details</h2>
                        <ul className="info">
                            <li>
                                <span></span>
                                <span>slacksfit@gmail.com</span>
                            </li>

                            <li>
                                <span></span>
                                <span>090078601</span>
                            </li>

                            <li>
                                <span></span>
                                <span>+923452209873</span>
                            </li>

                        </ul>
                    </div>

                    <div className="contactForm">
                        <h2>Stay in touch with us!</h2>
                    <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>

                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>Last Name</span>
                        </div>

                        <div className="inputBox w50">
                            <input type="text" name="" required />
                            <span>Email Address</span>
                        </div>

                        <div className="inputBox w100">
                            <textarea name='' required></textarea>
                            <span>Your Message/Comments</span>
                        </div>

                        <div className="inputBox w100">
                            <button>Submit</button>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Contact
