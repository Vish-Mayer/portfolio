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

  describe('inputName', () => {
    it('has an input for a user to insert their name', () => {
      const nameinput = wrapper.find('#inputName')
      expect(nameinput.props().placeholder).toEqual("Name")
    })
    it('saves the name to current state', () => {
      const input = wrapper.find('#inputName')
      input.simulate('change', {
        target: {value: "john doe"}
      })
      const newinput= wrapper.find('#inputName')
      expect(newinput.props().value).toEqual("john doe")
    })
    
  })


  describe('inputEmail', () => {
    it('has an input for a user to insert their email', () => {
      const input = wrapper.find('#inputEmail')
      expect(input.props().placeholder).toEqual("Email address")
    })
    it('saves the name to current state', () => {
      const input = wrapper.find('#inputEmail')
      input.simulate('change', {
        target: {value: "test@test.com"}
      })
      const newinput= wrapper.find('#inputEmail')
      expect(newinput.props().value).toEqual("test@test.com")
    })
    
  })

  it('has an input for a user to insert a message', () => {
    expect(wrapper.find('#input-message').text()).toBe("Your Message")
  })

  it('has a button for a user to send a message', () => {
    expect(wrapper.find('#send').text()).toBe("Send")
  })
});