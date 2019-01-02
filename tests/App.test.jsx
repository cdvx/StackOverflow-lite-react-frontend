import React from 'react';
import {shallow,  mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AppRouter from '../src/AppRouter';
import Home from "../src/components/Home";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";


describe('<AppRouter />', () => {
  it('should render without crashing', () => {
    expect(mount.bind(null, <AppRouter />)).toMatchSnapshot();
  });
});


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ state: {username: "",password: ""},
  loginUser: jest.fn()
});
it("it should render component", () => {
  const wrapper = shallow(
    <MemoryRouter>
      <Provider store={store}><AppRouter /></Provider>
    </MemoryRouter>
  );
});

describe("<Home />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Home />);
  });
});

describe("<Header />", () => {
  localStorage.setItem("token", "fdbnsbnzjhdha");

  test("renders the component", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".active").first().simulate("click"));
    expect(wrapper.find(".active").find(".logOut").last().simulate("click"));
    expect(wrapper.find(".active").last().simulate("click"));
  });
});


describe("<Footer />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});