// src/sections/ContactSection.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_h0io3m9',       // Replace with your actual EmailJS Service ID
            'template_ttxugjl',      // Replace with your actual EmailJS Template ID
            {
                to_name: 'Team',                 // Add a fixed name for the recipient, if needed
                user_name: formData.name,
                user_email: formData.email,
                user_message: formData.message,
            },
            'Q6uKZ6hijGSO1n0im'           // Replace with your actual EmailJS User ID
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        })
        .catch((error) => {
            console.error('FAILED...', error);
            alert("Failed to send message. Please try again later.");
        });
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <p>Feel free to reach out with any questions or project inquiries!</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </label>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </section>
    );
}

export default ContactSection;
