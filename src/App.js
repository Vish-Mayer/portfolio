import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
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
        <Profile />
        <Contact />
      </div>
    );
  }
}

export default App;
