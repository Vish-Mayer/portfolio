import React, { Component } from 'react';

import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import NavBar from './Components/NavBar/NavBar'
import './App.css';
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
