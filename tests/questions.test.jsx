import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Questions, { Info, Question, mapStateToProps, mapDispatchToProps} from "../src/components/Questions";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ questionsReducer: {questions: [],messages: "rrff"}, getQuestions: jest.fn()});

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Provider store={store}><Questions /></Provider>
    </MemoryRouter>,
  );
});

const props = {
  queston: {
    topic: "User with this name or password not found !",
    body:"ggggggg",
    author: "rfghhj"
  },
  messages: "ffggggg",
  onClick: jest.fn(),
  loginUser: jest.fn(),
  followedUsername: "cdvx",
};

describe("<Questions />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Provider store={store}><Questions /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("<Question />", () => {
    test("renders the component", () => {
      const wrapper = shallow(<Question question={props.messages}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("<Info />", () => {
    test("renders the component", () => {
      const wrapper = shallow(<Info messages={props.question}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });



describe("test the login container", () => {
  const fakeEvent = { preventDefault: () => {}};

  const wrapper = mount(<Provider store={store}><Questions fakeEvent /></Provider>);
  wrapper.setState({
    questons: [],
    messages: "cdvfnfjgjgjgj"
  });

  wrapper.setProps({loginUser: jest.fn(), onChangeField: jest.fn(fakeEvent, "username") });
  it("should mount the login component", () => {

    expect(wrapper.find("Info")).toBeTruthy();
    expect(wrapper.find("Question")).toBeTruthy();
    // expect(wrapper.find("input").last().simulate("change", fakeEvent));

  });
});

describe("Login", () => {
  it("should show previously previously passed state", () => {
    const state = {
        "questionsReducer": [{topic:"xxx",body:"FFFF", author:"Vddcd"}]
    };
    expect(mapStateToProps(state)).toEqual({"questionsReducer": [{topic:"xxx",body:"FFFF", author:"Vddcd"}]});

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    const fakeEvent = { preventDefault: () => {}};
    mapDispatchToProps(dispatch).getQuestions();
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});


describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    state:{ state: {username: "",password: ""},getQuestions: jest.fn()},
    getQuestions: jest.fn()
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});


describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).getQuestions();
  expect(dispatch.mock.calls.length).toBe(1);
});
