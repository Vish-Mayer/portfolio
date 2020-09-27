import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
        <Contact />
        <Projects />
      </div>
    );
  }
}

export default App;
