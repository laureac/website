import React, { useEffect, useState, useRef } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

import {
    handleCityReturn,
    handleCity,
  } from "./Animations";

import Sunshine from "../images/images/sunshinecoast.jpg";
import melbourne from "../images/images/melbourne.jpg";
import sydney from "../images/images/sydney.jpg";
import brisbane from "../images/images/brisbane.jpg";
import gold from "../images/images/gold-coast.jpg";

function Main(props) {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      let cityBackground = useRef(null);

      const cities = [
        { name: "Sunshine Coast", image: Sunshine },
        { name: "Melbourne", image: melbourne },
        { name: "Sydney", image: sydney },
        { name: "Brisbane", image: brisbane },
        { name: "Gold Coast", image: gold }
      ];
    
    return (
        <div data-aos="fade-down" data-aos-duration="900" className='main'> 
            <div
            ref={el => (cityBackground = el)}
            className='menu-city-background'>
            </div>
                <div className='title'>
                    <p>WEB DEVELOPMENT | DESIGN</p>
                    <h1>LAURE CLARET</h1>
                </div>

                <div className='locations'>
                Where are you from:
                {cities.map(el => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, cityBackground)}
                    onMouseOut={() => handleCityReturn(cityBackground)}>
                    {el.name}
                  </span>
                ))}
              </div>
        </div>
    );
}

export default Main;