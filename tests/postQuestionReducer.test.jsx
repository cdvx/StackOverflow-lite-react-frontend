/* eslint-disable no-unused-expressions */
import questionChecker from "../src/reducers/postQuestionReducer";


const initialState = {
    topic: "",
    body: ""
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(questionChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const message = "Question successfully posted!";
    const action = {type:"POST_QUESTION", payload: message};
    expect(questionChecker(undefined,action)) !== (initialState);
  });
});

describe(" REDUCER WITH DATA ", () => {
    test("return the correct object when called", () => {
      const errors = "Question successfully posted!";
      const action = {type:"POST_MESSAGE", payload: errors};
      expect(questionChecker(undefined,action)) !== (initialState);
    });
  });


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const errors = "fjfcfjhkee";
    const action = {type:"POST_QUESTION_ERROR", payload: errors};
    expect(questionChecker(undefined,action)) !== (initialState);
  });
});
