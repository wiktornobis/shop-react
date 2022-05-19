import React from 'react';
import './_aboutUs.scss';

function AboutUs(props) {
    return (
        <div className='all-contact'>
            <h2 className='main-contact'>CONTACT</h2>
            <div className='contact'>
                <div className="contact__left">
                    <h3 className='second-contact'>CUSTOMER SERVICE</h3>
                    <div className="contact__left--text">
                        <p>E:mail: example123@.gmail.com</p>
                        <p>Full name: Example ® - Official Online Boutique</p>
                        <p>Address: 118 Kasprzaka Street, 01-234 Warsaw (POLAND)</p>
                    </div>
                </div>
                <div className="contact__right">
                    <h3 className='second-contact'>STORE OWNER</h3>
                    <div className="contact__right--text">
                        <p>Official Online Boutique Sp. z o.o.</p>
                        <p>Kasprzaka 118, 01-234 Warsaw(POLAND)</p>
                        <p>NIP: XXXXXXXX</p>
                        <p>Registration number: XXXXXXXXXX</p>
                        <p>REGON:XXXXXXX
                            Account number for payments: XX XXXX XXXX XXXX XXXX XXXX XXXX</p>
                        <p>SWIFT:BREXPLPWXXX</p>
                        <p>Our bank: XXXX</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AboutUs;