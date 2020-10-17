import React from 'react'
import Modal from './Modal'
import ReactDom from 'react-dom'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Carousel from './Carousel/Carousel';
import ModalFooter from './ModalFooter/ModalFooter'

configure({ adapter: new Adapter() });

describe('Modal', () => {

  ReactDom.createPortal = jest.fn(modal => modal);

  let wrapper 

  const props = {
    open:(true),
    title:"Test Modal Title",
    image:"testimage.png",
    image2:"testimage2.png",
    image3:"testimage3.png",
    image4:"testimage4.png",
    description:"Test Modal Description"
  }

  beforeEach(() => {
    wrapper = shallow(<Modal {...props}/>
    )
  });

  it('renders the project title', () => {
    expect(wrapper.find('h3').props().children).toBe("Test Modal Title")
  })

  it('renders the carousel', () => {
    expect(wrapper.containsMatchingElement(<Carousel />)).toEqual(true);
  })

  it('passes image props to the carousel', () => {
    const images = wrapper.find('.modal-img').props().children;
    const imageArray = {
      img1: 'testimage.png',
      img2: 'testimage2.png',
      img3: 'testimage3.png',
      img4: 'testimage4.png'
    }
    expect(images.props).toEqual(imageArray)
  })

  it('renders the full project description', () => {
    expect(wrapper.find('.modal-description').props().children).toBe("Test Modal Description")
  })

  it('renders the Modal Footer', () => {
    expect(wrapper.containsMatchingElement(<ModalFooter />)).toEqual(true);
  })
});


