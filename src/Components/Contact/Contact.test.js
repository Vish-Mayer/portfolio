import React from 'react'
import Contact from './Contact';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactForm from './ContactForm/ContactForm';

configure({ adapter: new Adapter() });

describe('Contact', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Contact/>)
  });

  it('displays the title of the section', () => {
    expect(wrapper.find('h1').text()).toBe("Contact")
  });

  it('displays the contact form', () => {
    expect(wrapper.containsMatchingElement(<ContactForm />)).toEqual(true);
  })
});
