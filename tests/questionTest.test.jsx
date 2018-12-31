import { mount, shallow } from "enzyme";

import React from "react";
import expect from "expect";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Question} from "../src/components/Questions";
import ShowQuestion, {mapStateToProps, mapDispatchToProps} from "../src/components/Question";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({ questionReducer: {question: {topic:"hfbcn", body:"fsdsds", author:"hcxhffd"}}, 
  getQuestions: jest.fn(),
  question: {topic:"hfbcn", body:"fsdsds", author:"hcxhffd"},
});

it("it should render component", () => {
  shallow(
    <MemoryRouter>
      <Provider store={store} question={props.question}><ShowQuestion /></Provider>
    </MemoryRouter>,
  );
});

const props = {
  question: {
    topic: "User with this name or author not found !",
    body:"ggggggg",
    author: "rfghhj"
  },
  messages: "ffggggg",
  onClick: jest.fn(),
  loginUser: jest.fn(),
  followedUsername: "cdvx",
};

describe("<ShowQuestion />", () => {
  test("renders the component", () => {
    const wrapper = shallow(<Provider store={store}><ShowQuestion /></Provider>);
    expect(wrapper).toMatchSnapshot();
  });
});


  describe("<Question />", () => {
    test("renders the component", () => {
      const wrapper = mount(<Question question={props.question}/>);
      expect(wrapper).toMatchSnapshot();
    });
  });



describe("test the login container", () => {
  const fakeEvent = { preventDefault: () => {}};
  localStorage.setItem("questionId", "234345")
  const wrapper = shallow(<Provider store={store}><ShowQuestion /></Provider>);
  wrapper.setState({
    queston: {topic:"hfbcn", body:"fsdsds", author:"hcxhffd"}
  });
  wrapper.setProps({getQuestion: jest.fn()});
  it("should mount the login component", () => {
    expect(wrapper.find("big")).toBeTruthy();
    expect(wrapper.find("Question")).toBeTruthy();
    expect(wrapper.find("table")).toBeTruthy();
    expect(wrapper.find("td")).toBeTruthy();

  });
});

describe("Login", () => {
  localStorage.setItem("questionId", "123");
  it("should show previously previously passed state", () => {
    const state = {
        "questionReducer": {question: {topic:"hfbcn", body:"fsdsds", author:"hcxhffd"}}
    };
    expect(mapStateToProps(state)).toEqual({
        question: undefined
      });

  });

  it("Should pass action to props on submit", () => {
    const dispatch = jest.fn();
    const fakeEvent = { preventDefault: () => {}};
    mapDispatchToProps(dispatch).getQuestion("123");
    expect((dispatch.mock.calls[0][0])).toBeTruthy();
  });
});


describe("Checks whether mapstate to props returns", () => {
  const expectedProp = {
    question: {topic:"hfbcn", body:"fsdsds", author:"hcxhffd"},
    getQuestion: jest.fn()
  };

  expect(mapStateToProps(expectedProp)).toBeTruthy();
});


describe("Checks whether mapdispatch to props returns", () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).getQuestion("1234");
  expect(dispatch.mock.calls.length).toBe(1);
});
