import React, { Component } from 'react';

import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter ,Switch, Route, } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
