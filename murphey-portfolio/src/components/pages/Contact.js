import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import '../../styles/Contact.css'

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('You must enter a valid email');
            return;
        }

        // props.onSubmit({
        //     name: name,
        //     email: email,
        //     message: message,
        // });

        setName('');
        setEmail('');
        setMessage('');

    };

    const handleChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of our fields
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    // function to handle if user clicks a field but tries to leave it blank
    const handleFormTouch = (e) => {
        if (e.target.value === '') {
            setErrorMessage('This field is required');
            return;
        }
    };

    return (
        <div className='contactContainer'>
            <form className='contactForm' onSubmit={handleSubmit}>
                <div className='inputField'>Name:
                    <input
                        value={name}
                        name="name"
                        onChange={handleChange}
                        onBlur={handleFormTouch}
                        type="text"
                        placeholder=""
                        required />
                </div>
                <div className='inputField'>Email:
                    <input
                        value={email}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleFormTouch}
                        type="text"
                        placeholder=""
                        required />
                </div>
                <div className='inputField'>Message:
                    <input
                        value={message}
                        name="message"
                        onChange={handleChange}
                        onBlur={handleFormTouch}
                        type="text"
                        placeholder=""
                        required />
                </div>
                <button type="button" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}