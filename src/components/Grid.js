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
                    <Col xs={12} md={4} style={styles.div}>
                       <h4>Fellow Farmer.</h4>
                        <div>Participate in the front end building.</div>
                        <button> <a href='https://fellowfarmer.com/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div} >
                            <h4>Job finder.</h4>
                        <div>Personal project. Technology used : RESTful API, Bootstrap, React Hooks</div>
                        <button><a href='https://laureac.github.io/learn-japanese/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <h4>Yoga website.</h4>
                        <div>Personal project. Technology used : GSAP, CSSTransition</div>
                        <button><a href='https://laureac.github.io/website-gsap/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}>
                       <h4>Photo Slider.</h4>
                        <div>Personal project. Technology used : GSAP</div>
                        <button> <a href='https://laureac.github.io/meditation-app/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <h4>Youtube like app.</h4>
                        <div>Personal project. Technology used : Axios, @material-UI, RESTful API</div>
                        <button><a href='https://laureac.github.io/video-app/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <h4>Fresh Chai Co.</h4>
                        <div>Client website. Developed with Shopify.</div>
                        <button><a href='https://freshchaico.myshopify.com/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <h4>Marble Bar Bistro.</h4>
                        <div>Client website. Developed with Wordpress.</div>
                        <button><a href='http://marble.tcc-staging.com/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                    <Col xs={12} md={4} style={styles.div}> 
                        <h4>Ground Force Landscape.</h4>
                        <div>Client website. Developed with Wordpress.</div>
                        <button><a href='http://groundforce.tcc-staging.com/' target="_blank" rel="noopener noreferrer">see website</a></button>
                    </Col>
                </Row>
            </Container>
    );
}

export default Grid;