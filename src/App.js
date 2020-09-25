import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar'
import Header from './Components/Header/Header'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {

  render() {
    return (
      <div className="App">
      <NavBar/>
      <Header/>
      </div>
    );
  }
}

export default App;
