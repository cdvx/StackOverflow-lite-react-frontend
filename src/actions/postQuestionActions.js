
const postQuestionUrl = "https://stackoverflow-lite-cdvx2.herokuapp.com/api/v1/questions";

export const runFetch =(dispatch, fetchObject)=> fetch(
    postQuestionUrl,
    fetchObject
  )
    .then(res => (
      res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
    ))
    .then(data=> {
      if ("success" in data) {
        dispatch({
          type:"POST_QUESTION",
          payload: data});
      }
      else if ("message" in data){
        dispatch({
          type:"POST_MESSAGE",
          payload: data.message});
      }
    })
    .catch( error => {
      dispatch({
        type:"POST_QUESTION_ERROR",
        payload: typeof error === "string" ? error : error.msg || error.message});
    });
  
  const askQuestion = (questionData) => {
  
    const fetchObject = {
      method: "POST",
      mode: "cors",
      headers: { 
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify(questionData)
    };
    return (dispatch)=>{
      runFetch(dispatch, fetchObject);
  
    };
  };
  
  export default askQuestion;
  
