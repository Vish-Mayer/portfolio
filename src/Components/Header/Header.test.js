import React from 'react'
import Header from './Header';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import icon from '../../Assets/Icons/dwn-arrowXS.png'

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
    it('displays an arrow image', () => {
      const button = (wrapper.find('.dwn-btn').props().children)
      expect((button).props.src).toEqual(icon)   
    })
    it('routes the user to the about section', () => {
      const button = (wrapper.find('.dwn-btn').props())
      expect((button).to).toEqual("about")
    })
  })
});
