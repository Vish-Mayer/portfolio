import React from 'react'
import Modal from './Modal'
import ReactDom from 'react-dom'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Modal', () => {

  ReactDom.createPortal = jest.fn(modal => modal);

  let wrapper 

  const props = {
    open:(true),
    onClose: jest.fn(),
    title:"Test Modal Title",
    image:"testimage.png",
    description:"Test Modal Description"
  }

  beforeEach(() => {
    wrapper = shallow(<Modal {...props}/>
    )
  });

  describe('close modal button', () => {
    it('displays an image', () => {
      const button = wrapper.find('.close-modal').props().children
      expect(button.props.src).toBe("dwn-arrowXS.png")
    })
    it('has a button that closes the modal', () => {
      wrapper.find('.close-modal').simulate('click')
      expect(props.onClose).toHaveBeenCalled()
    })
  })

  it('renders the project title', () => {
    expect(wrapper.find('h3').props().children).toBe("Test Modal Title")
  })

  it('renders the project image', () => {
    expect(wrapper.find(".modal-img").props().src).toBe("testimage.png")
  })

  it('renders the full project description', () => {
    expect(wrapper.find('.modal-description').props().children).toBe("Test Modal Description")
  })
});


