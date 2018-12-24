
const questionUrl = questionId => (`https://stackoverflow-lite-cdvx2.herokuapp.com/api/v1/questions/${questionId}`);

export const runFetch =(dispatch, questionId, fetchObject)=> fetch(
    questionUrl(questionId),
    fetchObject
  )
    .then(res => (
      res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
    ))
    .then(data=> {
      if ("questionId" in data) {
        dispatch({
          type:"QUESTION",
          payload: data});
      }})
    .catch( error => {
      dispatch({
        type:"QUESTION_ERROR",
        payload: typeof error === "string" ? error : error.message });
    });
  
  const question = (questionId) => {
  
    const fetchObject = {
      method: "GET",
      mode: "cors",
      headers: { "content-type": "application/json"}
    };
    return (dispatch)=>{
      runFetch(dispatch, questionId, fetchObject);
  
    };
  };
  
  export default question;