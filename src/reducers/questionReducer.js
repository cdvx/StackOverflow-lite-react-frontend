
const questionChecker = (state, action) => {
    switch (action.type) {
    case "QUESTION":{
      if (action.payload) {
        return {
          ...state,
          question: action.payload
        };
      }};
  
    case "QUESTION_ERROR":{
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
    question: {}

};
  
export default (state = initialState, action) => (questionChecker(state, action));
  