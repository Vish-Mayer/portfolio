import React from 'react'
import NavBar from './NavBar';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('NavBar', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<NavBar/>)
  });

  it('does something', () => {
    //test
  });
});