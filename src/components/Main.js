import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Main(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      });
    
    return (
        <div data-aos="fade-down" data-aos-duration="900" className='main'>
            <h1 >I'm a Web Developer living in Brisbane.</h1>
        </div>
    );
}

export default Main;