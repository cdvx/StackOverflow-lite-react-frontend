import toastr from "toastr";

export const signUpUrl = "https://stackoverflow-lite-cdvx2.herokuapp.com/api/v1/auth/signup";

function storeDataToast(username, token, url){
    toastr.success(`Logging in as ${username}!`);
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    window.location.replace(url);
  };
  
function toastSuccessStoreData(type, errorMsg , username, token, url){
    type==="success" && !errorMsg && storeDataToast( username, token, url);
};

function toastError(type, errorMsg){
    type === "error" && errorMsg ? toastr.error(errorMsg): null;
};
function toastSuccess(type, errorMsg, url){
    type === "success" ? toastr.success(errorMsg) && url && setTimeout(() => window.location.replace(url), 2000): toastError(type, errorMsg);
};
export const alert=(type,errorMsg,username, token, url)=>(
    type === "error" || "success"  && !username && !token ? toastSuccess(type, errorMsg, url):
        toastSuccessStoreData(type, errorMsg, username, token, url)

);

export const errorAlert =(type,errorMsg)=>((alert(type,errorMsg,null,null)));

export const runFetch =(dispatch, fetchObject)=> fetch(
    signUpUrl,
    fetchObject
  )
    .then(res => (
      res.json().then(data => ((res.ok && Promise.resolve(data)) || (!res.ok && Promise.reject(data))))
    ))
    .then(data=> {
      if ("success" in data) {
        dispatch({
          type:"SIGNUP",
          payload: data});
      }})
    .catch( error => {
      dispatch({
        type:"SIGNUP_ERROR",
        payload: "message" in error ? error.message : null });
    });
  
  const signup = (signupData) => {
  
    const fetchObject = {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json"},
      body: JSON.stringify(signupData)
    };
    return (dispatch)=>{
      runFetch(dispatch, fetchObject);
  
    };
  };
  
  export default signup;
  