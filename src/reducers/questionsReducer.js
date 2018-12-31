
const questionsChecker = (state, action) => {
    switch (action.type) {
    case "QUESTIONS":{
      if (action.payload) {
        return {
          ...state,
          questions: action.payload.questions
        };
      }};
  
    case "QUESTIONS_ERROR":{
      if (action.payload) {
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
  