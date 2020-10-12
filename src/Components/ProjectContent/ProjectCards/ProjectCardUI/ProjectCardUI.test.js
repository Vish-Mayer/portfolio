import React from 'react'
import ProjectCardUI from './ProjectCardUI'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Projects', () => {

  let wrapper;
  
  const props = {
    cardName:"Test Title",
    cardDescription:"Testing a really long description with thats longer than 10 words",
    imgsrc:"testimage.png",
    openModal: jest.fn
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
    const output = "Testing a really long description with thats longer than 10..."
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
});