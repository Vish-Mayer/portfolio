import React from 'react'
import Footer from './Footer';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Footer/>)
  });

  it('it has a row of media buttons', () => {
    expect(wrapper.find('.media-row').props()).toMatchSnapshot()
  });
});