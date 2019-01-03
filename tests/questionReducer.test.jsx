/* eslint-disable no-unused-expressions */
import questionChecker from "../src/reducers/questionReducer";


const initialState = {
    question: {},
    loading: true
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(questionChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const question = {};
    const action = {type:"QUESTION", payload: question};
    expect(questionChecker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const messages = "fjfcfjhkee";
    const action = {type:"QUESTION_ERROR", payload: messages};
    expect(questionChecker(undefined,action)) !== (initialState);
  });
});
