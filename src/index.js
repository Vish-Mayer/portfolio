import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import PageNotFound from './Pages/404'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/404-page-not-found" exact render={() => <div><PageNotFound /></div>} />
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  rootElement
);
