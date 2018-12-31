import React, { Component } from 'react';

class Header extends Component {

    logOut = event => {
        localStorage.clear();
    };

    render() {
        return (  
            <header>
                <nav  id="head-footer" className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand " id="select-question" href="/"><p>StackOverflow-lite</p></a>
                        </div>
    
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active">{localStorage.getItem("token") && <a id="select-question" href="/postquestion">Post Question <span className="sr-only">(current)</span></a>}</li>
                            
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {!localStorage.getItem("token") && <li className="active"><a id="select-question" href="/login">Login</a></li>}
                            {!localStorage.getItem("token") && <li className="active"><a id="select-question" href="/signup">SignUp</a></li>}
                            {localStorage.getItem("token") && <li className="active"><a id="select-question" className="logOut" href="/" onClick={this.logOut} >Sign out</a></li>}
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

 
export default Header;