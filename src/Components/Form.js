import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./FormStyles.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs API for sending direct email
    emailjs
      .sendForm("service_s2jq0p8", "template_mfgy3ra", form.current, {
        publicKey: "cNsEd8mdBLwRQSw8X",
      })
      .then(
        () => {
          toast.success("Email Sent Successfully!"); // Show toast on success
          e.target.reset(); // Reset the form only after success
        },
        (error) => {
          toast.error("Failed to send email. Please try again."); // Show toast on failure
          console.error("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="form">
        <form ref={form}
          onSubmit={sendEmail}>
            <label>Your Name</label>
            <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
            <label>Email</label>
            <input type="email" placeholder="Email" name="user_email" required />
            <label>Subject</label>
            <input type="text" placeholder="Subject" name="subject" required />
            <label>Message</label>
            <textarea
            name="message"
            placeholder="Message"
            cols="22"
            rows="10"
            required
            className="p-2"
          />
            <button className="btn">submit</button>
        </form>
        {/* ToastContainer for showing notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

export default Form;