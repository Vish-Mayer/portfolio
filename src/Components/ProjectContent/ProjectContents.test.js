import React from 'react'
import ProjectContent from './ProjectContent'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ProjectContent', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ProjectContent/>)
  });


  it('contains header with name of component', () => {
    expect(wrapper.find('h1').text()).toBe("Projects")
  });
});