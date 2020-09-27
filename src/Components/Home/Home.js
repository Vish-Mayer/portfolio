import React, { Component } from 'react';

import Header from '../Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact';

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