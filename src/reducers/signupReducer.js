
import {alert, errorAlert} from "../actions/signUpActions";
const signUpChecker = (state, action) => {
    switch (action.type) {
    case "SIGNUP":{
      if (action.payload) {
        alert("success",action.payload.success,null, null, "/signin");
        return {
          ...state,
          message: action.payload.success
        };
      }};
  
    case "SIGNUP_ERROR":{
      if (action.payload) {
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
  