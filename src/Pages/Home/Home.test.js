import React from 'react';
import Home from './Home';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../../Components/Header/Header';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';


configure({ adapter: new Adapter() });

describe('Home', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('displays the Header', () => {
    expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true);
  });

  it('displays the About section', () => {
    expect(wrapper.containsMatchingElement(<About/>)).toEqual(true);
  });

  it('displays Contact section', () => {
    expect(wrapper.containsMatchingElement(<Contact />)).toEqual(true);
  });
});