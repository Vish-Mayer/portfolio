import React from 'react'
import NavBar from './NavBar';

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
      expect(wrapper.find('.home').props().children.props.src).toBe('navlogo.png')
    })
    it('navigates the user to the home section', () => {
      expect(wrapper.find('.home').props().to).toBe('/#home')
    })
  })
  
  describe('About', () => {
    it('renders a tab with text "About"', () => {
      expect(wrapper.find(".about").props().children).toBe('ABOUT')
    })
    it('navigates the user to about section', () => {
      expect(wrapper.find('.about').props().to).toBe('/#about')
    })
    it('navigates the user to about section', () => {
      wrapper.find('.about').simulate('click', {button: 0})
    })
  })

  describe('Projects', () => {
    it('renders a tab with text "Projects"', () => {
      expect(wrapper.find('.projects').props().children).toBe('PROJECTS')
    })
    it('navigates the user to the projects page/section', () => {
      expect(wrapper.find('.projects').props().to).toBe('/projects/#project-list')
    })
  })

  describe('Contact', () => {
    it('renders a tab with text "Contact"', () => {
      expect(wrapper.find(".contact").props().children).toBe("CONTACT")
    })
    it('navigates the user to the contact section', () => {
      expect(wrapper.find(".contact").props().to).toBe('/#contact')
    })
  })
});

