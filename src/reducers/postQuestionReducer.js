
import {alert, errorAlert} from "../actions/signUpActions";
const questionChecker = (state, action) => {
    switch (action.type) {
    case "POST_QUESTION":{
      if (action.payload) {
        alert("success",action.payload.success,null, null, "/");
        return {
          ...state,
          message: action.payload.success
        };
      }};

    case "POST_MESSAGE":{
        if (action.payload) {
            errorAlert("error", action.payload.message);
        alert("error",action.payload,null, null, null)
        return {
        ...state,
        errors: action.payload
        };
    }};
  
    case "POST_QUESTION_ERROR":{
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
    topic: "",
    body: ""

};
  
export default (state = initialState, action) => (questionChecker(state, action));
  