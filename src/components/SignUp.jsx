import React, { Component } from 'react';
import {connect} from "react-redux";
import signup from '../actions/signUpActions';

class SignUp extends Component {
    state = {  
        username: "",
        email: "",
        password: "",
        repeatPassword: ""
    }

    signupUser = event => {
        event.preventDefault();
        const {username, password, email, repeatPassword} = this.state;
        console.log()
    
        if (username && email && password && repeatPassword) {
            this.props.signupUser({
                username,
                email,
                password,
                repeat_password: repeatPassword
            });
        };
      };
    

    onChangeField = (event, fieldType) => {
        event.preventDefault();
        this.setFieldToState(event, fieldType);
    }

    setFieldToState = (event, fieldType) => {
        if (fieldType === "username"){
            this.setState({
                username: event.target.value
            })
        }
        else if(fieldType === "email"){
            this.setState({
                email: event.target.value
            })
        }
        else {
            fieldType === "password" ? this.setState({
                password: event.target.value }) : fieldType === "repeatPassword" && this.setState({
                    repeatPassword: event.target.value })
        };
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
                                    onChange={()=>(this.onChangeField(event, "username"))}
                                    className="form-control" id="inputUsername" placeholder="Username"  required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                            <div className="col-lg-10">
                                <input type="text" 
                                    onChange={()=>(this.onChangeField(event, "email"))}
                                    className="form-control" id="inputEmail" placeholder="Email" required/>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                            <div className="col-lg-10">
                                <input type="password" 
                                    onChange={()=>(this.onChangeField(event, "password"))}
                                    className="form-control" id="inputPassword" placeholder="Password" required/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputRepeatPassword" className="col-lg-2 control-label">Repeat Password</label>
                            <div className="col-lg-10">
                                <input type="password" 
                                    onChange={()=>(this.onChangeField(event, "repeatPassword"))}
                                    className="form-control" id="inputRepeatPassword" placeholder="Repeat Password" required/>
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
                                    onClick={this.signupUser}
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
  signupUser: signupData => dispatch(signup(signupData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);