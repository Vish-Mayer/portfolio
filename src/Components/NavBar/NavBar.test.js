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

  it('renders a tab with text "Home"', () => {
    expect(wrapper.find(".home").text()).toBe("Home")
  })

  it('renders a tab with text "About"', () => {
    expect(wrapper.find(".about").text()).toBe("About")
  })

  it('renders a tab with text "Projects"', () => {
    expect(wrapper.find(".projects").text()).toBe("Projects")
  })

  it('renders a tab with text "Contact"', () => {
    expect(wrapper.find(".contact").text()).toBe("Contact")
  })

  it('changes class after scroll event', () => {
    wrapper.simulate('scroll')
    console.log(wrapper.find(".contact").props().className)
  })

  // component.simulate('scroll')
});