import React from 'react'
import ModalFooter from './ModalFooter'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ModalFooter', () => {

  let wrapper 

  const props = {
    onClose: jest.fn(),
    projectLink: "test.com",
  }

  beforeEach(() => {
    wrapper = shallow(<ModalFooter {...props}/>
    )
  });

  it('shows a button to view in github', () => {
    expect(wrapper.find('.ext-link').text()).toBe("View in github")
  })

  it('routes to the given link', () => {
    expect(wrapper.find('.ext-link').props().href).toBe("test.com")
  })
 
  describe('close modal button', () => {
    it('displays a closing image', () => {
      const button = wrapper.find('.close-modal').props().children
      expect(button.props.src).toBe("closeXS.png")
    })
    it('should call onClose', () => {
      wrapper.find('.close-modal').simulate('click')
      expect(props.onClose).toHaveBeenCalled()
    })
  })
});