import React from 'react'
import ProjectCardUI from './ProjectCardUI'
import testimage from '../../../../Assets/testimage.png'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Projects', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <ProjectCardUI 
        cardName="Test Title" 
        cardDescription="Testing a really long description with thats longer than 10 words"
        imgsrc={testimage}>
      </ProjectCardUI>
    )
  });

  it('displays the project image', () => {
    expect(wrapper.find("img").prop("src")).toEqual(testimage)
  });

  it('displays the project title', () => {
    expect(wrapper.find('.card-title').text()).toBe("Test Title")
  });

  it('shows preview by displaying the first 10 letters of a description', () => {
    const output = "Testing a really long description with thats longer than 10..."
    expect(wrapper.find('.card-text').text()).toContain(output)
  });

  it('displays a link to open the modal', () => {
    expect(wrapper.find('.card-text').text()).toContain("read more")
  });
});