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

  it('loops through a list of languages', () => {
    const output = wrapper.find("h2").props().children
    expect(JSON.stringify(output)).toMatchSnapshot();
  });
});
