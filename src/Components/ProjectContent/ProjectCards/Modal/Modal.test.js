import React from 'react'
import Modal from './Modal'
import ReactDom from 'react-dom'

import testimage from '../../../../Assets/testimage.png'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Modal', () => {

  ReactDom.createPortal = jest.fn(modal => modal);

  let wrapper 

  beforeEach(() => {
    wrapper = shallow(
      <Modal 
        open={true}
        title="Test Modal Title"
        image={testimage}
        description="Test Modal Description">
      </Modal>
    )
  });

  it('has a button that closes the modal', () => {
    expect(wrapper.find('#close-modal').text()).toBe("close")
  })

  it('renders the project title', () => {
    expect(wrapper.find('h3').props().children).toBe("Test Modal Title")
  })

  it('renders the project title', () => {
    expect(wrapper.find("img").props().src).toBe(testimage)
  })

  it('renders the full project description', () => {
    expect(wrapper.find('.modal-description').props().children).toBe("Test Modal Description")
  })
});

