
import {alert, errorAlert} from "../actions/signUpActions";
const questionsChecker = (state, action) => {
    switch (action.type) {
    case "QUESTIONS":{
      if (action.payload) {
          console.log("questions payload>>", action.payload);
          
        // alert("success",null,action.payload.username, action.payload.access_token, "/");
        return {
          ...state,
          questions: action.payload.questions
        };
      }};
  
    case "QUESTIONS_ERROR":{
      if (action.payload) {
        console.log("questions error payload>>", action.payload, typeof action.payload);
        // errorAlert("error", action.payload);
        return {
          ...state,
          messages: action.payload
        };
      }};
  
    default:
      return state;
    }
  };
  
const initialState = {
    questions: []

};
  
export default (state = initialState, action) => (questionsChecker(state, action));
  