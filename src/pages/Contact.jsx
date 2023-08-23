import React, { useState, Component, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import LinkedIn from '../Icons/Linkedin-logo3.png';
function Contact() {



    const [emailResponse, setEmailResponse] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm('service_portfolio_site', 'template_portfolio', form.current, 'user_g4oYOtObrTqkhRVkjkxKh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setEmailResponse("Email sent!");
        setTimeout(() => { setEmailResponse("") }, 4500);

        e.target.reset();
    }


    return (
        <div className="contact-page">
            <h1> Contact me</h1>

            <form ref={form} onSubmit={sendEmail} >
                <label>Name: </label>
                <input type="text" name="name" /> <br></br>
                <label>Email: </label>
                <input type="email" name="email" /> <br></br>
                <label>Message: </label>
                <textarea name="message" rows="2" cols="20" />  <br></br>
                <input type="submit" value="Send" /> <br></br>
            </form>
            <h3 className="email-response">{emailResponse}</h3>

            <h1> Connect</h1>
            <a href="https://www.linkedin.com/in/cory-holenstein" title="linkedin image">
                <button >

                    <img src={LinkedIn} width="100" height="50" alt="linkedin icon png background" />
                </button></a>



        </div>






    );

}

export default Contact;