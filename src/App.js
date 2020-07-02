import React from 'react';
import './App.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Main />
        <Projects />
        <About />
        <Footer />
      </header>
    </div>
  );
}

export default App;
