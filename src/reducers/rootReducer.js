import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";
import questionsReducer from "./questionsReducer";
import postQuestionReducer from "./postQuestionReducer";

export default combineReducers({
    signUpAuth: signupReducer,
    loginAuth: loginReducer,
    questions: questionsReducer,
    askQuestion: postQuestionReducer
});
