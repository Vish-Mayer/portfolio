import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
