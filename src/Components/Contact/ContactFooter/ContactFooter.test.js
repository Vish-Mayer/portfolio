import React from 'react'
import ContactFooter from './ContactFooter';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JestEnvironment } from '@jest/environment';

configure({ adapter: new Adapter() });

describe('ContactFooter', () => {

  let wrapper;

  let props = {
    onClickMock: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<ContactFooter{...props}/>)
  });

  it('has a button that directs the user to the top of the page', () => {
    const children = (wrapper.find('.up-btn').props().children);
    expect(children.props.src).toBe('uparrowXS.png')
    expect(wrapper.find('.up-btn').props().onClick).toEqual(expect.any(Function)) 
  })
});
