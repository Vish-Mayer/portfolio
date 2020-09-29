import React, { Component } from 'react';

// import NavBar from '../Components/NavBar/NavBar'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact';


class Home extends Component{
  render() {
    return(
      <div className="home">
     
        <Header />
        <About />
        <Contact />
      </div>
    )
  }
}
export default Home