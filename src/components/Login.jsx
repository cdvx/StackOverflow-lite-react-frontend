import React, { Component } from 'react';
import {connect} from "react-redux";
import login from "../actions/loginActions";
import {errorAlert} from "../actions/signUpActions";

class Login extends Component {
    state = {  
        username: "",
        password: ""
    }

    loginUser = event => {
        event.preventDefault();
        const {username, password} = this.state;
        if (username || password) {
            this.props.loginUser({
                username,
                password
            });
        };
      };
    

    onChangeField = (event, fieldType) => {
        event.preventDefault();
        this.setFieldToState(event, fieldType);
    }

    setFieldToState = (event, fieldType) => {
        fieldType === "username" ? this.setState({
            username: event.target.value }) : fieldType === "password" && this.setState({
                password: event.target.value })
    };

    render() { 
        return ( 
            <React.Fragment>
                <div id="signup" className="container">
                <form className="form-horizontal" >
                    <fieldset>
                        <legend>SIgn Up</legend>
                        <div className="form-group">
                            <label htmlFor="inputUsername" className="col-lg-2 control-label">Username</label>
                            <div className="col-lg-10">
                                <input type="text"
                                    required={true}
                                    onChange={()=>(this.onChangeField(event, "username"))}
                                    className="form-control" id="inputUsername" placeholder="Username"  />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                            <div className="col-lg-10">
                                <input type="password" 
                                    required={true}
                                    onChange={()=>(this.onChangeField(event, "password"))}
                                    className="form-control" id="inputRepeatPassword" placeholder="Password" />
                            <div className="checkbox">
                            <label>
                                <input type="checkbox" /> Remember me
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">
                                <button type="reset" className="btn btn-default">Cancel</button>
                                <button 
                                    onClick={this.loginUser}
                                    type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        
                    </fieldset>
                </form>
          
                </div>
                
            </React.Fragment>
         );
    };
};

export const mapStateToProps = state => state;

export const mapDispatchToProps = dispatch => ({
    loginUser: loginData => dispatch(login(loginData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);