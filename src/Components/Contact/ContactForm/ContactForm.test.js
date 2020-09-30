import React from 'react'
import ContactForm from './ContactForm';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('ContactForm', () => {

  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<ContactForm/>)
  });

  it('displays allows a user to send emails', () => {
    
  });
});