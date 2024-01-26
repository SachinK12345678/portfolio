import React, { useRef } from 'react'
import"./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";

import facebookIcon from "../../assets/facebook-icon.png";
import Twitter from "../../assets/twitter.png";
import Youtube from "../../assets/youtube.png";
import Instagram from "../../assets/instagram.png";

import emailjs from "@emailjs/browser";
const Contact = () => {
    const form =useRef();
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm('service_eghnkuh','template_pujyrzb', form.current, 'QXX-_RJaEHWXz9E1_')
            .then((result)=>{
                console.log(result.text);
                e.target.reset();
                alert('Email sent !');
            },(error)=>{
                console.log(error.text);
                alert("failed");
            });
    };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My clients</h1>
            <p className="clientDesc">
                I have had the opporchunity to with a diverse groups of companies.
                some of the notable companies I have worked with includi
            </p>
            <div className="clentImgs">
                <img src={Walmart} alt="clients" className="clientImg" />
                <img src={Adobe} alt="clients" className="clientImg" />
                <img src={Microsoft} alt="clients" className="clientImg" />
                <img src={facebook} alt="clients" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDes">please fill out the form below to discouse any workds oppartunitys</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='your name' name='Your_name' />
                <input type="email" className="email" placeholder='your email' name='Your_email' />
                <textarea className="msg" rows="5" placeholder='your message' name="message"></textarea>
                <button type="submit"value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={facebookIcon} alt="facebookIcon" className="link" />
                    <img src={Twitter} alt="Twitter" className="link" />
                    <img src={Youtube} alt="Youtube" className="link" />
                    <img src={Instagram} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
