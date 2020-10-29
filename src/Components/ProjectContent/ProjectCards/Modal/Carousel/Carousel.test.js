import React from 'react';
import Carousel from './Carousel'

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Carousel', () => {

  let wrapper

  const props = {
    img1:"testimage1.jpg",
    img2:"testimage2.jpg",
    img3:"testimage3.jpg",
}
   
  beforeEach(() => {
    wrapper = shallow(<Carousel {...props}/>);
  })

   it('renders the project images', () => {
    expect(wrapper.find('.slider').at(0).props().children.type).toBe('img')
    expect(wrapper.find('.slider').at(0).props().children.props.src).toBe("testimage2.jpg")
    expect(wrapper.find('.slider').at(1).props().children.props.src).toBe("testimage3.jpg")
    expect(wrapper.find('.slider').at(2).props().children.props.src).toBe("testimage1.jpg")
  });

  it('renders a button that goes left', () => {
    expect(wrapper.find('#goLeft').type()).toBe('button')
    expect(wrapper.find('#goLeft').props().children.props.alt).toBe("left")
  });
 
  it('renders a button that goes left', () => {
    expect(wrapper.find('#goRight').type()).toBe('button')
    expect(wrapper.find('#goRight').props().children.props.alt).toBe("right")
  });
});