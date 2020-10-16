import React from 'react';
import Carousel from './Carousel'

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { jsxEmptyExpression } from '@babel/types';

configure({ adapter: new Adapter() });


describe('Carousel', () => {

  let wrapper

  const props = {
    img1:"testimage1.jpg",
    img2:"testimage2.jpg",
    img3:"testimage3.jpg",
    img4:"testimage4.jpg",
}
   
  beforeEach(() => {
    wrapper = shallow(<Carousel {...props}/>);
  })

  it('renders a button that goes left', () => {
    expect(wrapper.find('#goLeft').type()).toBe('button')
  });

  it('renders a button that goes left', () => {
    expect(wrapper.find('#goRight').type()).toBe('button')
  });
});