import React from 'react';
import App from './App';

import { configure, shallow,} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavBar from './Components/NavBar/NavBar'
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import SubFooter from './Components/Footer/SubFooter/SubFooter'
import Footer from './Components/Footer/Footer'

configure({ adapter: new Adapter() });

describe('App', () => {

  let wrapper;
  
  beforeEach(() => {
  wrapper = shallow(<App />);
  })

  it('displays the NavBar', () => {
    expect(wrapper.containsMatchingElement(<NavBar />)).toEqual(true);
  });

  it('displays the sub-footer', () => {
    expect(wrapper.containsMatchingElement(<SubFooter />)).toEqual(true);
  })

  it('displays the Footer', () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true);
  });

  it('routeHome component renders Home component', () => {
    expect(wrapper.instance().routeHome().type).toEqual(Home)
  })

  it('routeHome component renders Projects component', () => {
    expect(wrapper.instance().routeProjects().type).toEqual(Projects)
  })
});