import React from 'react'
import ProjectCardUI from './ProjectCardUI'
import testimage from '../../../../Assets/testimage.png'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Projects', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ProjectCardUI 
                      cardName="Test Title" 
                      cardDescription="Test Description"
                      imgsrc={testimage}/>)
  });

  it('displays a button', () => {
    expect(wrapper.find('.download').text()).toBe('Download')
  });

  it('displays an image', () => {
    expect(wrapper.find("img").prop("src")).toEqual(testimage)
  });

  it('displays a title', () => {
    expect(wrapper.find('.card-title').text()).toBe("Test Title")
  });

  it('displays a description', () => {
    expect(wrapper.find('.card-text').text()).toBe("Test Description")
  });
});