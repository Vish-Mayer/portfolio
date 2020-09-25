import React from 'react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';

configure({ adapter: new Adapter() });

describe('App', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('displays the NavBar', () => {
    expect(wrapper.find(<NavBar/>)).toBeTruthy()
  });

  it('displays the Header', () => {
    expect(wrapper.find(<Header/>)).toBeTruthy()
  });
});