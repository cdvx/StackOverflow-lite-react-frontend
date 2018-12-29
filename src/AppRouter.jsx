import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Root from "./Root";
import Home from "./components/Home";
import signUp from "./components/SignUp";
import Login from "./components/Login";
import PostQuestion from "./components/PostQuestion";
import ShowQuestion from "./components/Question";
import store from "./store";

const AppRouter = () => (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Root>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={signUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/postquestion" component={PostQuestion} />
              <Route exact path="/question" component={ShowQuestion} />
              <Route path="/home" component={Home} />
            </div>
          </Root>
        </React.Fragment>
      </Router>
    </Provider>
  );
  export default AppRouter;