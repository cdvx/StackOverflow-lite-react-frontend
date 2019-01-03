/* eslint-disable no-unused-expressions */
import questionsChecker from "../src/reducers/questionsReducer";


const initialState = {
    questions: [],
    loading: true
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(questionsChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const questions = [];
    const action = {type:"QUESTIONS", payload: questions};
    expect(questionsChecker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const messages = "fjfcfjhkee";
    const action = {type:"QUESTIONS_ERROR", payload: messages};
    expect(questionsChecker(undefined,action)) !== (initialState);
  });
});
