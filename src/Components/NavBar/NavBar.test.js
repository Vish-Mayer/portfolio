import React from 'react'
import NavBar from './NavBar';
import { HashLink as Link } from 'react-router-hash-link';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NavBar/>)
  });

  describe('Home', () => {
    it('renders a tab with text "Home"', () => {
      expect(wrapper.find(".home").props().children).toBe("Home")
    })
    it('navigates the user to the home screen', () => {
      const link = Link
      expect(wrapper.find(".home").props().to).toBe('/#home')
    })
  })

  describe('Home', () => {
    it('renders a tab with text "About"', () => {
      expect(wrapper.find(".about").props().children).toBe("About")
    })
    it('navigates the user to about section', () => {
      const link = Link
      expect(wrapper.find(".about").props().to).toBe('/#about')
    })
  })

  describe('Home', () => {
    it('renders a tab with text "Projects"', () => {
      expect(wrapper.find(".projects").props().children).toBe("Projects")
    })
    it('navigates the user to the projects page/section', () => {
      expect(wrapper.find(".projects").props().to).toBe("/projects/#project-content")
    })
  })

  describe('Home', () => {
    it('renders a tab with text "Contact"', () => {
      expect(wrapper.find(".contact").props().children).toBe("Contact")
    })
    it('navigates the user to the contact section', () => {
      const link = Link
      expect(wrapper.find(".contact").props().to).toBe('/#contact')
    })
  })
});