import React from 'react';
import {shallow,  mount } from 'enzyme';
import AppRouter from '../src/AppRouter';
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";


describe('<AppRouter />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null, <AppRouter />)).toMatchSnapshot();
  });
});


describe("<Home />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Header />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".active").first().simulate("click"));
    expect(wrapper.find(".active").last().simulate("click"));
  });
});


describe("<Footer />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});