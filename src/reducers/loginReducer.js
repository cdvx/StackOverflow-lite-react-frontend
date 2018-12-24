
import {alert, errorAlert} from "../actions/signUpActions";
const loginChecker = (state, action) => {
    switch (action.type) {
    case "LOGIN":{
      if (action.payload) {
        alert("success",null,action.payload.username, action.payload.access_token, "/");
        return {
          ...state,
          token: action.payload.access_token
        };
      }};
  
    case "LOGIN_ERROR":{
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
    email: "",
    password: ""

};
  
export default (state = initialState, action) => (loginChecker(state, action));
  