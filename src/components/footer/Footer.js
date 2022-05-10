import React from 'react';
import './_footer.scss';
import { faTwitter, faInstagram, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Footer() {
    return (
        <div className='footer'>
            <div className="footer__icon">
                <a href="https://twitter.com/"
                   target='_blank'
                   rel='noreferrer'>
                    <FontAwesomeIcon className='footer__icon--twitter' icon={faTwitter} />
                </a>

                <a href="https://www.instagram.com/"
                   target='_blank'
                   rel='noreferrer'>
                    <FontAwesomeIcon className='footer__icon--twitter' icon={faInstagram} />
                </a>

                <a href="https://www.facebook.com/"
                   target='_blank'
                   rel='noreferrer'>
                    <FontAwesomeIcon className='footer__icon--twitter' icon={faFacebook} />
                </a>

            </div>
            <div className="footer__text">© Copyright 2022</div>
        </div>
    );
}

export default Footer;