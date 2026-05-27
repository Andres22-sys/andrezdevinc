import React, { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import './ContactSection.css';

interface FormData {
    name: string;
    email: string;
    message: string;
}

function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            'service_h0io3m9',
            'template_ttxugjl',
            {
                to_name: 'Team',
                user_name: formData.name,
                user_email: formData.email,
                user_message: formData.message,
            },
            'Q6uKZ6hijGSO1n0im'
        )
        .then(() => {
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(() => {
            alert('Failed to send message. Please try again later.');
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
                        autoComplete="name"
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
                        autoComplete="email"
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        autoComplete="off"
                    />
                </label>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </section>
    );
}

export default ContactSection;
