import React from 'react';
import { db } from '../../firebaseConfig';
import { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';

import './_contact.scss';

function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection(db,'contactdata')

    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            message: message
        }).then(() => {
           alert('Form Submitted Successfully!')
        }).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="page">
            <div className="contact">
                <p className='contact-header'>Contact form</p>
                <form className="contact-form">
                    <label className='contact-label'>Full name</label>
                    <input className='contact-input' 
                        type="text" 
                        placeholder='Enter your Full Name'
                        onChange={(event) => {
                            setName(event.target.value);
                        }} 
                    />
                    <label className='contact-label'>Email Address</label>
                    <input className='contact-input' 
                        type="email" 
                        placeholder='Enter your Email'
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                    />
                    <label className='contact-label'>Enter Query/Feedback</label>
                    <textarea className='contact-textarea' 
                            placeholder='Enter your Message'
                            onChange={(event) => {
                                setMessage(event.target.value);
                            }} 
                    >
                    </textarea>
                </form>
                <button
                    className='contact-btn'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Contact;