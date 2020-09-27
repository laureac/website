import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Grid from './components/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Main />
        <Grid />
        <Footer />
    </div>
  );
}

export default App;
