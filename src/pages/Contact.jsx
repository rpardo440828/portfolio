import React, { useState, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_dbzgufd", "template_3akfq2t", form.current, {
                publicKey: "3zpgVUifXyLBSLZO4"
            })
            .then(() => {
                console.log("Form submitted!");
            },(error) => {
                console.log("Failed! ", error.text);
            },);
        setSubmitted(true);
    };

    return (
        <div className="flex flex-col h-screen w-screen justify-center items-center">
            <div className="contact-container">
            <h2>Contact Me</h2>
            {submitted ? (
                <p className="submitted-message">Form has been submitted!</p>
            ) : (
                <form ref={form} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    />
                </div>
                <a type="submit" href="mailTo:rpardo440828@gmail.com">
                    <button className="submit-btn">
                    {" "}
                    Submit
                    <FaCheck> </FaCheck>{" "}
                    </button>
                </a>
                </form>
            )}
            </div>
        </div>
    );
};

export default Contact;