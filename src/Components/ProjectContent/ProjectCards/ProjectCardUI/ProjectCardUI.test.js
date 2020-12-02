import React from 'react'
import ProjectCardUI from './ProjectCardUI'
import Modal from '../Modal/Modal'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Projects', () => {
  
  let wrapper;
  
  const props = {
    openModal: jest.fn(),
    cardName:'Test Title',
    cardDescription:'Testing a really long description that is longer than 10 words',
    imgsrc:'testimage.png',
    imgsrc2:'testimage2.png',
    imgsrc3:'testimage3.png',
  }
  
  beforeEach(() => {
    wrapper = shallow(<ProjectCardUI {...props}/>
    )
  });

  describe('project card', () => {
    it('is a button', () => {
      expect(wrapper.find('.project-card').type()).toBe('button')
    })

    it('runs openModal function on click', () => {
      expect(wrapper.find('.project-card').props().onClick).toBe[props.openModal]
    });

    it('displays the project image', () => {
      expect(wrapper.find('img').prop('src')).toEqual('testimage.png')
    });

    it('displays the project title when hovered on', () => {
      expect(wrapper.find('.card-title').text()).toBe("Test Title")
    });
    
    it('shows preview by displaying the first 10 words of a description', () => {
      const output = "Testing a really long description that is longer than 10..."
      expect(wrapper.find('.card-text').text()).toContain(output)
    });

    it('has a secondary button to open modal', () => {
      expect(wrapper.find('.open-modal-secondary').text()).toBe('more')
    })
    it('runs openModal function on click', () => {
      expect(wrapper.find('.open-modal-secondary').props().onClick).toBe[props.openModal]
    });

    it('renders the carousel', () => {
      expect(wrapper.containsMatchingElement(<Modal />)).toEqual(true);
    })

    it('passes image props to the Modal', () => {
      const cardprops = wrapper.find('.card-modal-props').props().children
      expect(cardprops.props.image).toEqual('testimage.png')
      expect(cardprops.props.image2).toEqual('testimage2.png')
      expect(cardprops.props.image3).toEqual('testimage3.png')
    });
  })
});