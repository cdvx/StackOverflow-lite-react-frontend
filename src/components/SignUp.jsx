import React, { Component } from 'react';
import {connect} from "react-redux";
import signup from '../actions/signUpActions';


const  Inputs = ({htmlFor, innerHtml, onChangeField, type1, type, placeholder}) => {
    return (  
        <React.Fragment>
            <div className="form-group">
                <label htmlFor={htmlFor} className="col-lg-2 control-label">{innerHtml}</label>
                <div className="col-lg-10">
                    <input type="text"
                        id={htmlFor}
                        onChange={(event)=>(onChangeField(event, type1))}
                        type={type}
                        className="form-control" placeholder={placeholder}  required/>
                </div>
            </div>
        </React.Fragment>
    );
};


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
                        <legend className="text-black">SIgn Up</legend>
                        
                        <Inputs
                            htmlFor={"inputUsername"}
                            innerHtml={"Username"}
                            onChangeField={this.onChangeField}
                            type1={"username"}
                            type={"username"}
                            placeholder={"Username"}
                        />

                        <Inputs
                            htmlFor={"inputEmail"}
                            innerHtml={"Email"}
                            onChangeField={this.onChangeField}
                            type1={"email"}
                            type={"email"}
                            placeholder={"Email"}
                        />

                        <Inputs
                            htmlFor={"inputPassword"}
                            innerHtml={"Password"}
                            onChangeField={this.onChangeField}
                            type1={"password"}
                            type={"password"}
                            placeholder={"Password"}
                        />

                        <Inputs
                            htmlFor={"inputRepeatPassword"}
                            innerHtml={"Repeat Password"}
                            onChangeField={this.onChangeField}
                            type1={"repeatPassword"}
                            type={"password"}
                            placeholder={"Repeat Password"}
                        />

                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">
                                <button
                                    id="button-dark-blue" 
                                    onClick={this.signupUser}
                                    type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <p>Already have an account?
                                <a href="/login">Login</a>
                            </p>
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