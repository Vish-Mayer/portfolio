import React from 'react'
import Profile from './Profile';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Profile', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<Profile/>)
  });

  it('loops through a list of languages', () => {
    expect(wrapper.find('.profile').text()).toBe("Im a profile - I like doing things.")
  });
});
