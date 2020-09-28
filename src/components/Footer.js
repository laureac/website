import React from 'react';
import phone from '../images/phone.svg'
import mail from '../images/email.svg'
import pin from '../images/pin.svg'

function Footer() {
    return (
        <div className='footer'>
            <div className='wrapper'>
                <span><img src={phone}/><a href='tel: 0466 896 995'>0466 896 995</a></span>
                <span><img src={mail}/><a href='mailto: laure.a.claret@gmail.com'>laure.a.claret@gmail.com</a></span>
                <span><img src={pin}/> East Brisbane</span>
            </div>
        </div>     
        );
}
export default Footer;