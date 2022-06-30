import React from 'react';
import './_aboutUs.scss';

function AboutUs(props) {
    return (
        <div className='all-about-us'>
            <h2 className='main-about'>ABOUT US</h2>
            <div className='about'>
                <div className="about__left">
                    <h3 className='second-about'>CUSTOMER SERVICE</h3>
                    <div className="about__left--text">
                        <p>E:mail: example123@.gmail.com</p>
                        <p>Full name: Example ® - Official Online Boutique</p>
                        <p>Address: 118 Kasprzaka Street, 01-234 Warsaw (POLAND)</p>
                    </div>
                </div>
                <div className="about__right">
                    <h3 className='second-about'>STORE OWNER</h3>
                    <div className="about__right--text">
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