import React from 'react';
import Typical from 'react-typical'
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
    const intro = ("Hi Im Vish, I'm a Full Stack Developer,I write applications in  ")
    expect(wrapper.find("h2").text()).toContain(intro)
  });

  it('loops through a list of languages', () => {
    const output = wrapper.find("h2").props().children
    expect(JSON.stringify(output)).toMatchSnapshot();
  });
});
