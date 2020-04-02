import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import LogoutComponent from './LoginComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'


class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                 <Router>
                <HeaderComponent/>    
                <Switch>
                   <Route path="/" exact component={LoginComponent}/>
                   <Route path="/login" component={LoginComponent}/>
                   <AuthenticatedRoute path ="/welcome" component={WelcomeComponent}/>   
                    <AuthenticatedRoute path="/todos" component={ListTodosComponent}/> 
                    <AuthenticatedRoute path="/logout" component={LogoutComponent}/>  
                    <Route component={ErrorComponent}/>
                </Switch>   
                <FooterComponent/>             
                </Router> 
            </div>
        )
    }
} export default TodoApp













// class ListTodosComponent extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             todos: 
//             [
//                 {id:1, description:'Learn React', done:false, targetDate: new Date()},
//                 {id:2, description:'Learn Java', done:false, targetDate: new Date()},
//                 {id:3, description:'Learn C', done:false, targetDate: new Date()},
//                 {id:4, description:'Learn Net', done:false, targetDate: new Date()},
//                 {id:5, description:'Learn Web', done:false, targetDate: new Date()}
//             ]
//         }
//     }
//     render(){
//         return (
        
//            <div>
//                 <h1>List Todos</h1>
//                 <div className="container">
//                 <table className="table">
//                     <thead>
//                         <tr>
                            
//                             <th>description</th>
//                             <th>  is Completed?</th>
//                             <th>Target Date</th>

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             this.state.todos.map
//                             ( 
//                                 todo =>
//                                 <tr>
                                 
//                                     <td>{todo.description}</td>
//                                     <td>{todo.done.toString()}</td>
//                                     <td>{todo.targetDate.toString()}</td>
//                                 </tr>
//                             )
//                         }
//                     </tbody>
//                 </table>
//                 </div>
//            </div>
//            )
//     }
        
// }
// class FooterComponent extends Component{
//     render(){
//         return(
//            <footer className="footer">
//                <span className="text-muted">All right reserved</span>
//            </footer>
//         )
//     }

// }
// class LogoutComponent extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>You are logged out</h1>
//                 <div className="container">
//                     Thank you for Using our Application.
//                 </div>
                 
//             </div>
//         )
//     }

// }
// class HeaderComponent extends Component{
//     render(){
//         const isUserloggedIn = AuthenticationService.isUserLoggedIn();
//         console.log(isUserloggedIn +'alpesh');

//         return(
//             <header>
//                 <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//                     <div><a href="www.google.com" className="navbar-brand">in28Minuts</a></div>
//                      <ul className="navbar-nav">
//                      {isUserloggedIn && <li><Link className="nav-link" to="/welcome/alpesh">Home</Link></li>}
//                      {isUserloggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>  }
//                     </ul> 
//                      <ul className="navbar-nav navbar-collapse justify-content-end">
//                      {!isUserloggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
//         {isUserloggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}  
//                     </ul> 
//                 </nav>
//             </header>
           
//         )
//     }

// }
// class WelcomeComponent extends Component{
//     render(){
//         return <div>
//                   <h1>Welcome!</h1>
//                   <div className="container">
//                    Welcome {this.props.match.params.name}. You can manage your todos   
//                   </div>
//                 </div>
//     }
// }
// function ErrorComponent(){
//     return <div> An Error occured.Contact support</div>
// }
// class LoginComponent extends Component{

//     constructor(props){
//         super(props)

//         this.state={
//             username:'alpesh',
//             password:'',
//             hasLoginFaild: false,
//             showSuccessMessage: false

//         }  
//         this.handleChange = this.handleChange.bind(this)
//         this.loginClicked = this.loginClicked.bind(this)
//     }


//     loginClicked(event){
//         if(this.state.username==='alpesh' && this.state.password==='alpesh'){
//             AuthenticationService.registerSuccesssfulLogin(this.state.username,this.state.password)
//             this.props.history.push(`/welcome/${this.state.username}`)
//             // console.log('succesful')
//             // this.setState({showSuccessMessage:true})
//             // this.setState({hasLoginFaild:false})
//         }
//         else{
//             console.log('invalid credential')
//             this.setState({showSuccessMessage:false})
//             this.setState({hasLoginFaild:true})
//         }
//       // console.log(this.state) 



//     }

//     handleChange(event){
//       //  console.log(this.state)

//         this.setState({
//             [event.target.name]:event.target.value
//         })
       
//     }

   
//     render(){
//         return(
//         <div>
//             <h1>Login</h1>
//             <div className="container">
//             {/* <ShowInvalidCredentials hasLoginFaild={this.state.hasLoginFaild}/> */}
//             {this.state.hasLoginFaild && <div className="alert alert-warning">Invalid Credentials</div>}
//             {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
//             {this.state.showSuccessMessage && <div>Login Succesul</div>}

//             User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
//             Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
//             <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
//         </div>
//         </div>
//         )
//     }
// }

// function ShowInvalidCredentials(props){
//     if(props.hasLoginFaild){
//         return <div>Invalid Credentials</div>
//     }
//     return null;
//     }
// function ShowSuccessMessage(props){
//     if(props.showSuccessMessage){
//         return <div>Login Successful</div>
//     }
//     return null;
// }
