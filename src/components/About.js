import React, { useEffect } from 'react';
import picture from '../images/nB.jpg';
import CV from '../images/L CLARET CV.pdf';
import AOS from "aos";
import "aos/dist/aos.css";

function About(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
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
                        Self-teached, but worked many years in Digital Marketing and User Interface.
                        I am very verstaile, training focused on user experience.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;