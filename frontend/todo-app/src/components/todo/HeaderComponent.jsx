import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    render(){
        const isUserloggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserloggedIn +'alpesh');

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="www.google.com" className="navbar-brand">in28Minuts</a></div>
                     <ul className="navbar-nav">
                     {isUserloggedIn && <li><Link className="nav-link" to="/welcome/alpesh">Home</Link></li>}
                     {isUserloggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>  }
                    </ul> 
                     <ul className="navbar-nav navbar-collapse justify-content-end">
                     {!isUserloggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
        {isUserloggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}  
                    </ul> 
                </nav>
            </header>
           
        )
    }

}
export default withRouter(HeaderComponent);