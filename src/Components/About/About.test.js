import React from 'react'
import About from './About'
import profilepic from '../../Assets/Other/profilepic.png'

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
    expect(wrapper.find("img").at(7).prop("src")).toEqual(profilepic)
  });

  describe('project link button', () => {
    it('displays a button ', () => {
      expect(wrapper.find('.projects-button').props().children).toBe("View my work")
    });
    it('links to the projects page', () => {
      expect(wrapper.find('.projects-link').props().to).toBe('/projects/#project-list')
    });
  })
});
