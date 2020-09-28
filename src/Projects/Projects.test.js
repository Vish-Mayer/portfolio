import React from 'react'
import Projects from './Projects'
import NavBar2 from '../Components/NavBar2/NavBar2'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Projects', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Projects/>)
  });

  it('displays the Home section', () => {
    expect(wrapper.find(<NavBar2/>)).toBeTruthy()
  });

  it('contains header with name of component', () => {
    expect(wrapper.find('h1').text()).toBe("Projects")
  });
});