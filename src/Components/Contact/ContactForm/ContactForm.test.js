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

  const simulateChange = (wrapper, inputSelector, newValue) => {
    const input = wrapper.find(inputSelector)
      input.simulate('change', {
        target: {value: newValue}
      })
    return wrapper.find(inputSelector)
  }

  it('displays header for email component', () => {
    expect(wrapper.find('h4').text()).toEqual('Get in Touch!')
  });

  it('has a button for a user to send a message', () => {
    expect(wrapper.find('#send').text()).toBe("Send")
  })

  describe('input name', () => {
    it('has an input for a user to insert their name', () => {
      const input = wrapper.find('#inputName')
      expect(input.props().placeholder).toEqual("Name")
    })
    it('saves the name to the current state', () => {
      const updateInput = simulateChange(wrapper, '#inputName', "test name")
      expect(updateInput.props().value).toEqual("test name")
    })  
  })

  describe('input email', () => {
    it('has an input for a user to insert their email', () => {
      const input = wrapper.find('#inputEmail')
      expect(input.props().placeholder).toEqual("Email address")
    })
    it('saves the email to the current state', () => {
      const updateInput = simulateChange(wrapper, '#inputEmail', "test@test.com")
      expect(updateInput.props().value).toEqual("test@test.com")
    })   
  })

  describe('input message', () => {
    it('has an input for a user to insert a message', () => {
      expect(wrapper.find('#input-message').text()).toBe("Your Message")
    })
    it('saves the message to the current state', () => {
      const updateInput = simulateChange(wrapper, '#FormTextarea', "Test Message")
      expect(updateInput.props().value).toEqual("Test Message")
    })    
  })
});