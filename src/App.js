import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Grid from './components/Grid';
import About from './components/About'

import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from 'react-bootstrap/esm/Switch';
import ReactGA from 'react-ga'; 

const trackingId = "UA-179471173-1"; 
ReactGA.initialize(trackingId);


function App() {

  return (
    <div className="App">
        <Nav />
          <Switch>
            <Route path="/website" component={Main}/>
            <Route path="/about" component={About}/>
          </Switch>
        <Footer />
    </div>
  );
}

export default App;
