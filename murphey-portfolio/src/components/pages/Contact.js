import React, { useState } from 'react';

export default function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            name: name,
            email: email,
            message: message,
        });

        setName('');
        setEmail('');
        setMessage('');
    };

    const handleChange = (e) => {
        setName(e.target.value);
        setEmail(e.target.value);
        setMessage(e.target.value);
    };

    return (
        <div>
            <form className='contactForm' onSubmit={handleSubmit}>
                <input
                    value={name}
                    name="name"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                required/>
                <input
                    value={email}
                    name="email"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                required/>
                <input
                    value={message}
                    name="message"
                    onChange={handleChange}
                    type="text"
                    placeholder=""
                required />
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}