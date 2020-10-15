import React from 'react';
import App from './App';

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import SubFooter from './Components/Footer/SubFooter/SubFooter'
import Footer from './Components/Footer/Footer'

import { Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('App', () => {

  let wrapper
  let pathMap = {};

  beforeEach(() => {
    wrapper = shallow(<App/>);
    pathMap = wrapper.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
  })

  it('displays the NavBar', () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });

  it('displays the sub-footer', () => {
    expect(wrapper.containsMatchingElement(<SubFooter />)).toEqual(true);
  })

  it('displays the Footer', () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true);
  });

  it('should show Home component for "/" route ', () => {
    expect(pathMap['/']).toBe(Home);
  })

  it('should show Projects component for "/projects" route ', () => {
    expect(pathMap['/projects']).toBe(Projects);
  })
});