import React from 'react'
import About from './About'
import profilepic from '../../Assets/profilepic.png'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Profile', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<About/>)
  });

  it('displays header with name of section', () => {
    expect(wrapper.find('h1').text()).toBe("About")
  });

  it('displays a profile picture', () => {
    expect(wrapper.find("img").prop("src")).toEqual(profilepic)
  });
});
