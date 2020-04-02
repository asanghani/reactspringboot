import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'

class FooterComponent extends Component{
    render(){
        return(
           <footer className="footer">
               <span className="text-muted">All right reserved</span>
           </footer>
        )
    }

}
export default FooterComponent