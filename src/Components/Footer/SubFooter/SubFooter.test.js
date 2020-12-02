import React from 'react'
import SubFooter from './SubFooter';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JestEnvironment } from '@jest/environment';

configure({ adapter: new Adapter() });

describe('SubFooter', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SubFooter/>)
  });

  it('has a button that directs the user to the top of the page', () => {
    wrapper.scrollToTop = jest.fn();
    const children = (wrapper.find('.up-btn').props().children);
    expect(children.props.src).toBe('redarrow.png')
  })
});
