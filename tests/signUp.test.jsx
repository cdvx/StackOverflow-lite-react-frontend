import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SignUp, { mapStateToProps, mapDispatchToProps} from "../src/components/SignUp";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ state: {username: "",email:"", password: "", repeatPassword:""},
  signupUser: jest.fn()
});

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Provider store={store}><SignUp /></Provider>
    </MemoryRouter>,
  );
});

const props = {
  auth: {
    "errors": "User with this name or password not found !"
  },
  onClick: jest.fn(),
  loginUser: jest.fn(),
  followedUsername: "cdvx",
};

describe("<SignUp />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Provider store={store}><SignUp /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});




describe("test the login container", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const storee = mockStore({  state: {username: "cdvx",email:"cdvx@fox.com", password: "1234", repeatPassword:"1234"},signupUser: jest.fn()});;
  const fakeEvent = { preventDefault: () => {}};

  const wrapper = mount(<Provider store={storee}><SignUp fakeEvent /></Provider>);
  wrapper.setState({
    username: "chucky",
    password: "cdvx",
    repeatPassword:"cdvx",
    email:"cdvx@fox.com"
  });

//   const formWrapper = wrapper.dive().find("SignUp");

  wrapper.setProps({loginUser: jest.fn(), onChangeField: jest.fn(fakeEvent, "username") });
  it("should mount the login component", () => {

    // console.log(">>>>>", formWrapper)
    expect(wrapper.find("#button-dark-blue").simulate("click", fakeEvent));
    expect(wrapper.find("#inputUsername").simulate("change", fakeEvent));
    // expect(wrapper.find("#inputrepeatPassword").simulate("change", fakeEvent));
    // expect(wrapper.find(".col-lg-2 control-label#inputPassword").simulate("change", fakeEvent));
    // expect(wrapper.find(".col-lg-2 control-label#inputEmail").simulate("change", fakeEvent));

  });
});

describe("Login", () => {
  it("should show previously previously passed state", () => {
    const state = {
    username:"cdvx", password:"3232", emai:"cdvx@fox.com", repeatPassword:"3232"
    };
    expect(mapStateToProps(state)).toEqual({"emai": "cdvx@fox.com", "password": "3232", "repeatPassword": "3232", "username": "cdvx"});

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    const fakeEvent = { preventDefault: () => {}};
    mapDispatchToProps(dispatch).signupUser(fakeEvent, {"emai": "cdvx@fox.com", "password": "3232", "repeatPassword": "3232", "username": "cdvx"});
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});


describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    state:{ state: {username:"cdvx", password:"3232", emai:"cdvx@fox.com", repeatPassword:"3232"},signupUser: jest.fn()},
    loginUser: jest.fn()
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});


describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).signupUser({username:"cdvx",email:"cdvx@fox.com", password:"3232", repeatPassword:"3232"});
  expect(dispatch.mock.calls.length).toBe(1);
});
