import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import Profile from './Components/Profile/Profile'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Header/>
        <Profile/>
      </div>
    );
  }
}

export default App;
