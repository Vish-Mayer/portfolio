import React from 'react'
import ContactFooter from './ContactFooter';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import expectExport from 'expect';

configure({ adapter: new Adapter() });

describe('ContactFooter', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ContactFooter/>)
  });

  it('has a button that directs the user to the top of the page', () => {
    const children = (wrapper.find('.up-btn').props().children);
    expect(children.props.src).toBe('uparrowXS.png')
    expect(wrapper.find('.up-btn').props().to).toBe('/#home')
  })
});
