
const loginUrl = "http://127.0.0.1:5000/api/v1/auth/login";

export const runFetch =(dispatch, fetchObject)=> fetch(
    loginUrl,
    fetchObject
  )
    .then(res => (
      res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
    ))
    .then(data=> {
        console.log("login data>>>", data);
      if ("access_token" in data) {
        dispatch({
          type:"LOGIN",
          payload: data});
      }})
    .catch( error => {
        console.log("login error>>>", error);
      dispatch({
        type:"LOGIN_ERROR",
        payload: typeof error === "string" ? error : error.message });
    });
  
  const login = (loginData) => {
  
    const fetchObject = {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json"},
      body: JSON.stringify(loginData)
    };
    return (dispatch)=>{
      runFetch(dispatch, fetchObject);
  
    };
  };
  
  export default login;
  
  