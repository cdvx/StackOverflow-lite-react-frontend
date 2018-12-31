import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Login, { mapStateToProps, mapDispatchToProps} from "../src/components/Login";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ state: {username: "",password: ""},
  loginUser: jest.fn()
});

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Provider store={store}><Login /></Provider>
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

describe("<Login />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Provider store={store}><Login /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});




describe("test the login container", () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const storee = mockStore({ state: {username: "",password: ""},loginUser: jest.fn()});;
  const fakeEvent = { preventDefault: () => {}};

  const wrapper = mount(<Provider store={storee}><Login fakeEvent /></Provider>);
  wrapper.setState({
    username: "chucky",
    password: "cdvx"
  });

  wrapper.setProps({loginUser: jest.fn(), onChangeField: jest.fn(fakeEvent, "username") });
  it("should mount the login component", () => {

    expect(wrapper.find("#button-dark-blue").simulate("click", fakeEvent));
    expect(wrapper.find("#inputUsername").simulate("change", fakeEvent));
    expect(wrapper.find("input").last().simulate("change", fakeEvent));

  });
});

describe("Login", () => {
  it("should show previously previously passed state", () => {
    const state = {
    username:"cdvx", password:"3232"
    };
    expect(mapStateToProps(state)).toEqual({username:"cdvx", password:"3232"});

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    const fakeEvent = { preventDefault: () => {}};
    mapDispatchToProps(dispatch).loginUser(fakeEvent, {username:"cdvx", password:""});
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});


describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    state:{ state: {username: "",password: ""},loginUser: jest.fn()},
    loginUser: jest.fn()
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});


describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).loginUser({username:"cdvx", password:"3232"});
  expect(dispatch.mock.calls.length).toBe(1);
});
