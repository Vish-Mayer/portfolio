import React from 'react'
import ContactForm from './ContactForm';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ContactForm', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ContactForm/>)
  });

  it('displays header for email component', () => {
    expect(wrapper.find('h4').text()).toEqual('Get in Touch!')
  });

  describe('inputEmail', () => {
    it('has an input for a user to insert their email', () => {
      const input = wrapper.find('#inputEmail')
      expect(input.props().placeholder).toEqual("Email address")
    })
  })


  it('has an input for a user to insert a message', () => {
    expect(wrapper.find('#input-message').text()).toBe("Your Message")
  })

  it('has a button for a user to send a message', () => {
    expect(wrapper.find('#send').text()).toBe("Send")
  })
});