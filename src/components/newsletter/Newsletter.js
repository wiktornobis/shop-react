import React from 'react';
import './_newsletter.scss';
import {faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Newsletter() {
    return (
        <div className='newsletter'>
            <div className="newsletter__text">
                <FontAwesomeIcon className='newsletter__envelope' icon={faEnvelopeOpen} />
                <p className="newsletter__text--first">subscribe to</p>
                <p className="newsletter__text--first">NEWSLETTER</p>
            </div>
            <div className="newsletter__data">
                <label >
                    <input className="newsletter__data--name"
                           type="text"
                           placeholder='First name'
                           required />
                </label>
                <label>
                <input className="newsletter__data--email"
                       type="email"
                       placeholder='E-mail'
                       required />
                </label>
                <button className="newsletter__data--btn">Sign up</button>
            </div>

        </div>
    );
}

export default Newsletter;