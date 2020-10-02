import React, { useEffect } from 'react';
import picture from '../images/nB.jpg';
import CV from '../images/L CLARET CV.pdf';
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from 'react-ga';


function About(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });

    ReactGA.event({
    category: "CV",
    action: "User pressed CV button",
    });

    return (
        <div className='section'>
            <div className='section-items'>
                <div className='item' data-aos="fade-up"     data-aos-delay="200">
                   <div className='parallax'></div>
                    <div className='content'>
                    <h3>Who I am.</h3>
                    <p>
                        I am a web developer based in Brisbane but also available for remote work.
                        Self-teached, I previously worked many years in Digital Marketing.
                        I am very verstaile, training focused on User Experience.
                    </p>
                    <button><a href={CV} download>Get my CV.</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;