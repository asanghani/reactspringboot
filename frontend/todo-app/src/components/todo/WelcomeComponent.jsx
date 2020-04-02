import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

class WelcomeComponent extends Component{
    render(){
        return <div>
                  <h1>Welcome!</h1>
                  <div className="container">
                   Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>   
                  </div>
                </div>
    }
}
export default WelcomeComponent