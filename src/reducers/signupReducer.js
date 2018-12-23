
import {alert, errorAlert} from "../actions/signUpActions";
const signUpChecker = (state, action) => {
    switch (action.type) {
    case "SIGNUP":{
      if (action.payload) {
          console.log("signup payload>>", action.payload);
        alert("success",action.payload.success,null, null, null);
        return {
          ...state,
          message: action.payload.success
        };
      }};
  
    case "SIGNUP_ERROR":{
      if (action.payload) {
        console.log("signup error payload>>", action.payload, typeof action.payload);
        errorAlert("error", action.payload);
        return {
          ...state,
          errors: action.payload
        };
      }};
  
    default:
      return state;
    }
  };
  
  const initialState = {
    username: "",
    email: "",
    password: "",
    repeatPassword: "",

  };
  
  export default (state = initialState, action) => (signUpChecker(state, action));
  