import React from 'react';

function About(props) {
    return (
        <div className='section'>
            <div className='section-title'>
                <h2>Something about me</h2>
            </div>
            <div className='section-items'>
                <div className='item'>
                    <div>
                    <h3>Who I am.</h3>
                    <p className='content'>
                        Hey! I am a French front-end developer with a lot of positive energy! I switched from Business and Marketing career to Web Development. After a master2 from a Business school,
                         I spent 5 years in digital marketing, worked in 3 different countries and found ❤ for coding. I enjoy traveling to different exotic destinations, volunteering for my assos and run marathons.
                        I'm looking for new opportunities, I am ready to give the best to evolve as a front-end dev and be surrounded by talented people.
                    </p>
                    </div>
                    <img src='/images/nB.jpg' alt='profile picture'/>
                </div>
                <div className='item'>
                    <div>
                        <h3>My skills.</h3>
                        <p>React and react librairies</p>
                        <p>Strong with: <br></br> HTML, CSS, Sass, Javascript</p>
                        <p>Design software:
                        <br></br>
                        XD, 
                        Photoshop, 
                        Illustrator, 
                        Figma, 
                        After Effect, 
                        Spark
                        </p>
                    </div>
                </div>
                <div className='item'>
                    <div>
                        <h3>How to reach me?</h3>
                        <p>laure.a.claret@gmail.com</p>
                        <p>0466 896 995</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;