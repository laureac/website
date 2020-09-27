import React, { useRef, useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

function Grid() {

    const styles = {
        div: {
            padding: "50px",
        }
    }

    return (
            <Container> 
                <Row>
                    <Col xs={12} md={4} style={styles.div} >
                        <a href='https://laureac.github.io/learn-japanese/' target="_blank" rel="noopener noreferrer">
                            <h4>Job finder.</h4>
                        </a>
                        <div>RESTful API, Bootstrap, React Hooks</div>
                        <button>see more</button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <a href='https://laureac.github.io/website-gsap/' target="_blank" rel="noopener noreferrer"><h4>Landing page.</h4></a>
                        <div>GSAP</div>
                        <button>see more</button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}>
                        <a href='https://laureac.github.io/website-gsap/' target="_blank" rel="noopener noreferrer"><h4>Landing page.</h4></a>
                        <div>GSAP</div>
                        <button>see more</button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <a href='https://laureac.github.io/video-app/' target="_blank" rel="noopener noreferrer"><h4>Youtube like app.</h4></a>
                        <div> Axios, @material-UI, RESTful API</div>
                        <button>see more</button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}>
                        <a href='https://laureac.github.io/home' target="_blank" rel="noopener noreferrer"><h4>Transition.</h4></a>
                        <div>GSAP, React Router</div>
                        <button>see more</button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}><a href='https://laureac.github.io/home' target="_blank" rel="noopener noreferrer"><h4>Transition.</h4></a>
                        <div>GSAP, React Router</div>
                        <button>see more</button>
                    </Col>
                </Row>
            </Container>
    );
}

export default Grid;