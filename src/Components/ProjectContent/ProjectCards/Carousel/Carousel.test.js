import React from 'react';
import Carousel from './Carousel'

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration, jsxEmptyExpression } from '@babel/types';
import { EmailJSResponseStatus } from 'emailjs-com';

configure({ adapter: new Adapter() });

describe('Carousel', () => {

  let wrapper
  
  let sliderArray = [1,2,3,4]

  
  beforeEach(() => {
    wrapper = shallow(<Carousel/>);
  })

  it('renders a button that goes left', () => {
    expect(wrapper.find('#goLeft').type()).toBe('button')
  });

  it('renders a button that goes left', () => {
    expect(wrapper.find('#goRight').type()).toBe('button')
  });
});