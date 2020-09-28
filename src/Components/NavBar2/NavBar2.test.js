import React from 'react'
import NavBar2 from './NavBar2';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NavBar2/>)
  });

  it('renders a tab with text "Home"', () => {
    expect(wrapper.find(".home").props().children).toBe("Home")
  })

  it('renders a tab with text "About"', () => {
    expect(wrapper.find(".about").props().children).toBe("About")
  })

  it('renders a tab with text "Projects"', () => {
    expect(wrapper.find(".projects").props().children).toBe("Projects")
  })

  it('renders a tab with text "Contact"', () => {
    expect(wrapper.find(".contact").props().children).toBe("Contact")
  })
});