import React from 'react'
import ProjectCards from './ProjectCards'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Projects', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ProjectCards  />)
  });

  it('project cards class matches snapshot', () => {
    const output = wrapper.find('.project-cards').props('className');
    expect(JSON.stringify(output)).toMatchSnapshot();
  });
});