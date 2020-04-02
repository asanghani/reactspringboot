import React,{Component} from 'react';
import AuthenticationService from './AuthenticationService.js';

class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state={
            username:'alpesh',
            password:'',
            hasLoginFaild: false,
            showSuccessMessage: false

        }  
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }


    loginClicked(event){
        if(this.state.username==='alpesh' && this.state.password==='alpesh'){
            AuthenticationService.registerSuccesssfulLogin(this.state.username,this.state.password)
            console.log('test')
            this.props.history.push(`/welcome/${this.state.username}`)
            // console.log('succesful')
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFaild:false})
        }
        else{
            console.log('invalid credential')
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFaild:true})
        }
      // console.log(this.state) 



    }

    handleChange(event){
      //  console.log(this.state)

        this.setState({
            [event.target.name]:event.target.value
        })
       
    }

   
    render(){
        return(
        <div>
            <h1>Login</h1>
            <div className="container">
            {/* <ShowInvalidCredentials hasLoginFaild={this.state.hasLoginFaild}/> */}
            {this.state.hasLoginFaild && <div className="alert alert-warning">Invalid Credentials</div>}
            {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            {this.state.showSuccessMessage && <div>Login Succesul</div>}

            User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
        </div>
        </div>
        )
    }
}
export default LoginComponent