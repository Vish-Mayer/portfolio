import React from 'react'
import ProjectCardUI from './ProjectCardUI'
import Modal from '../Modal/Modal'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('Projects', () => {
  

  let wrapper;
  
  const props = {
    cardName:"Test Title",
    cardDescription:"Testing a really long description that is longer than 10 words",
    imgsrc:"testimage.png",
    imgsrc2:"testimage2.png",
    imgsrc3:"testimage3.png",
    imgsrc4:"testimage4.png",
  }
  
  beforeEach(() => {
    wrapper = shallow(<ProjectCardUI {...props}/>
    )
  });

  it('displays the project image', () => {
    expect(wrapper.find("img").prop("src")).toEqual("testimage.png")
  });

  it('displays the project title', () => {
    expect(wrapper.find('.card-title').text()).toBe("Test Title")
  });

  it('shows preview by displaying the first 10 letters of a description', () => {
    const output = "Testing a really long description that is longer than 10..."
    expect(wrapper.find('.card-text').text()).toContain(output)
  });

  it('displays a link to open the modal', () => {
    expect(wrapper.find('.card-text').text()).toContain("more")
  });

  it('displays a button to open model', () => {
    const button = (wrapper.find('.image__overlay').props().children)
    expect(button.props.children).toBe("Learn more")
  });

  it('runs openModal function on click', () => {
    const openModal = jest.fn()
    expect(wrapper.find('.btn').props().onClick).toBe[openModal]
  });

  it('renders the carousel', () => {
    expect(wrapper.containsMatchingElement(<Modal />)).toEqual(true);
  })

  it('passes image props to the Modal', () => {
    const cardprops = wrapper.find('.card-modal-props').props().children
    expect(cardprops.props.image).toEqual('testimage.png')
    expect(cardprops.props.image2).toEqual('testimage2.png')
    expect(cardprops.props.image3).toEqual('testimage3.png')
    expect(cardprops.props.image4).toEqual('testimage4.png')
  });
});