import React from 'react';
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header/>)
  });

  it('renders title of application', () => {
    expect(wrapper.find("h1").text()).toContain("Vishal Mayer Kakkad - Full Stack Developer")
  });
});
