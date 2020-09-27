import React from 'react';
import Home from './Home';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact';

configure({ adapter: new Adapter() });

describe('Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('displays the Header', () => {
    expect(wrapper.find(<Header/>)).toBeTruthy()
  });

  it('displays the About section', () => {
    expect(wrapper.find(<About/>)).toBeTruthy()
  });

  it('displays Contact section', () => {
    expect(wrapper.find(<Contact/>)).toBeTruthy()
  });
});