import React from 'react';
import App from './App';

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

import { Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('App', () => {

  let pathMap = {};
  let component = shallow(<App/>);

  beforeAll(() => {
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
  })

  it('displays the NavBar', () => {
    expect(component.containsMatchingElement(<NavBar />)).toEqual(true);
  });

  it('should show Home component for / router ', () => {
    expect(pathMap['/']).toBe(Home);
  })

  it('should show Projects component for /projects router ', () => {
    expect(pathMap['/projects']).toBe(Projects);
  })
});