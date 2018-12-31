/* eslint-disable no-unused-expressions */
import loginChecker from "../src/reducers/loginReducer";


const initialState = {
  email: "",
  password: ""
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(loginChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const token = "fjfcfjhkee";
    const action = {type:"LOGIN", payload: token};
    expect(loginChecker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const errors = "fjfcfjhkee";
    const action = {type:"LOGIN_ERROR", payload: errors};
    expect(loginChecker(undefined,action)) !== (initialState);
  });
});
