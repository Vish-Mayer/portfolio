import React from 'react'
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Header/>)
  });

  it('it matches the snapshot of the looped title being rendered', () => {
    const output = wrapper.find("h2").props().children
    expect(JSON.stringify(output)).toMatchSnapshot()
  });

  describe('down button', () => {
    it('routes the user to the about section', () => {
      const button = (wrapper.find('.dwn-btn').props())
      expect((button).to).toEqual("about")
    })
  })
});
