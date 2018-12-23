
const questionsUrl = "http://127.0.0.1:5000/api/v1/questions";

export const runFetch =(dispatch, fetchObject)=> fetch(
    questionsUrl,
    fetchObject
  )
    .then(res => (
      res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
    ))
    .then(data=> {
        console.log("questions data>>>", data);
      if ("questions" in data) {
        dispatch({
          type:"QUESTIONS",
          payload: data});
      }})
    .catch( error => {
        console.log("questions error>>>", error);
      dispatch({
        type:"QUESTIONS_ERROR",
        payload: typeof error === "string" ? error : error.message });
    });
  
  const questions = () => {
  
    const fetchObject = {
      method: "GET",
      mode: "cors",
      headers: { "content-type": "application/json"}
    };
    return (dispatch)=>{
      runFetch(dispatch, fetchObject);
  
    };
  };
  
  export default questions;
  
  