import React from 'react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

configure({ adapter: new Adapter() });

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('displays the NavBar', () => {
    expect(wrapper.find(<NavBar/>)).toBeTruthy()
  });

  it('displays the Home section', () => {
    expect(wrapper.find(<Home/>)).toBeTruthy()
  });

  it('displays the Projects section', () => {
    expect(wrapper.find(<Projects/>)).toBeTruthy()
  });
});