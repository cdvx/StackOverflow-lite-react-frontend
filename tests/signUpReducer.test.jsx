/* eslint-disable no-unused-expressions */
import signUpChecker from "../src/reducers/signupReducer";


const initialState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
};

describe(" INITIAL_STATE ", () => {
  test("is an empty object", () => {
    const action = {type:"NOTEXISTING"};
    expect(signUpChecker(undefined,action)).toEqual(initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const message = "fjfcfjhkee";
    const action = {type:"SIGNUP", payload: message};
    expect(signUpChecker(undefined,action)) !== (initialState);
  });
});


describe(" REDUCER WITH DATA ", () => {
  test("return the correct object when called", () => {
    const errors = "fjfcfjhkee";
    const action = {type:"SIGNUP_ERROR", payload: errors};
    expect(signUpChecker(undefined,action)) !== (initialState);
  });
});
