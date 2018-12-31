import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import loginReducer from "./loginReducer";
import questionsReducer from "./questionsReducer";
import postQuestionReducer from "./postQuestionReducer";
import questionReducer from "./questionReducer";

export default combineReducers({
    signUpAuth: signupReducer,
    loginAuth: loginReducer,
    questionsReducer,
    askQuestion: postQuestionReducer,
    questionReducer
});
