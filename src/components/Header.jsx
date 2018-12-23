import React, { Component } from 'react';


class Header extends Component {

    logOut = event => {
        localStorage.clear();
    };

    render() {
        return (  
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand " href="#"><p>StackOverflow-lite</p></a>
                        </div>
    
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active">{localStorage.getItem("token") && <a href="/postquestion">Post Question <span className="sr-only">(current)</span></a>}</li>
                            <li><a href="#">Link</a></li>
                            <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="true">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu" role="menu">
                            
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li className="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li className="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {!localStorage.getItem("token") && <li><a href="/login">Login</a></li>}
                            {!localStorage.getItem("token") && <li><a href="/signup">SignUp</a></li>}
                            {localStorage.getItem("token") && <li><a href="/" onClick={this.logOut}>Sign out</a></li>}
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

 
export default Header;