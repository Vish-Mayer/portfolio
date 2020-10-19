import React, { Component } from 'react';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import SubFooter from './Components/Footer/SubFooter/SubFooter'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
class App extends Component {

  routeHome(){
    return(
     <Home/>
    )
  }

  routeProjects(){
    return(
      <Projects/>
    )
  }

  render() {
    return (
      <div className="body">
      <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" exact render={this.routeHome} />
            <Route exact path="/projects" render={this.routeProjects} /> 
            <Redirect to="/404" /> 
          </Switch>
          <SubFooter/>
          <Footer />
      </div>
      </div>
    );
  }
}

export default App;
