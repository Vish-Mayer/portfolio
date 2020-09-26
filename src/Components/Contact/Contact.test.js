import React from 'react'
import Contact from './Contact';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Contact', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Contact/>)
  });

  it('displays contact info', () => {
    expect(wrapper.find('h1').text()).toBe("Contact")
  });
});
