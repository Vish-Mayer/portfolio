import React from 'react';
import Carousel from './Carousel'

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App', () => {

  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<Carousel/>);
  })

  it('doesnt do anything yet!', () => {
    
  });
});