import React from 'react';

function Projects(props) {
    return (
        <div className='section'>
            <div className='section-title'>
                <h2>Selected Work</h2>
            </div>
            <div className='section-items'>
                <div className='item'>
                    <a href='https://laureac.github.io/website-gsap/' target="_blank" rel="noopener noreferrer"><h3>Landing page.</h3></a>
                    <div>GSAP</div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/video-app/' target="_blank" rel="noopener noreferrer"><h3>Youtube like app.</h3></a>
                    <div> Axios, @material-UI</div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/home' target="_blank" rel="noopener noreferrer"><h3>Transition.</h3></a>
                    <div>GSAP, React Router</div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/chart/' target="_blank" rel="noopener noreferrer"><h3>COVID-19 tracker.</h3></a>
                    <div>Chart.js</div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/acoordeon/' target="_blank" rel="noopener noreferrer"><h3>Q and A page.</h3></a>
                    <div></div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/3d-animation/' target="_blank" rel="noopener noreferrer"><h3>3D guitar.</h3></a>
                    <div>Three.js</div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/meditation-app/' target="_blank" rel="noopener noreferrer"><h3>Meditation app.</h3></a>
                    <div>Howler.js</div>
                </div>
                <div className='item'>
                    <a href='https://laureac.github.io/eventfinder/' target="_blank" rel="noopener noreferrer"><h3>Event finder app.</h3></a>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Projects;