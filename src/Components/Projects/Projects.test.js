import React from 'react'
import Projects from './Projects'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Projects', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Projects/>)
  });

  it('contains header with name of component', () => {
    expect(wrapper.find('h1').text()).toBe("Projects")
  });
});