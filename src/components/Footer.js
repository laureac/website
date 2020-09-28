import React from 'react';
import phone from '../images/phone.svg'
import mail from '../images/email.svg'
import pin from '../images/pin.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <span><img src={phone}/>0466 896 995</span>
                <span><img src={mail}/>laure.a.claret@gmail.com</span>
                <span><img src={pin}/> East Brisbane</span>
            </div>
        </div>     
        );
}
export default Footer;