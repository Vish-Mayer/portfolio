import React from 'react'
import Projects from './Projects'

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import ProjectContent from '../../Components/ProjectContent/ProjectContent'

describe('Projects', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Projects />)
  });

  it('displays the Home section', () => {
    expect(wrapper.find(<ProjectContent/>)).toBeTruthy()
  });
});