import React,{Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.retrieveWelcomeBeanMessage = this.retrieveWelcomeBeanMessage.bind(this)
        this.retrieveWelcomePathVariablenMessage = this.retrieveWelcomePathVariablenMessage.bind(this)
        this.state = {
            welcomeMessage : ''
        }
            this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
            this.handleError = this.handleError.bind(this)
            
        
    }        

    render(){
        return (
        <div>
                  <h1>Welcome!</h1>
                  <div className="container">
                    Welcome {this.props.match.params.name}. You can manage your 
                    todos <Link to="/todos">here</Link>   
                  </div>
                  <div className="container">
                     Click here to call.
                     <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>String</button>
                  </div>
                  
                  <div>
                     <button className="btn btn-success" onClick={this.retrieveWelcomeBeanMessage}>Bean</button>
                  </div>
                  
                  <div>
                    <button className="btn btn-success" onClick={this.retrieveWelcomePathVariablenMessage}>PathVariable</button>
                  </div>

                  <div className="container">
                      {this.state.welcomeMessage}
                  </div>
        </div>
        )        
    }
    
    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService()
        .then ( response => this.handleSuccessfulResponse(response))
    }

    retrieveWelcomeBeanMessage(){
        console.log(this.props.match.params.name)
         HelloWorldService.executeHelloWorldBeanService()
         .then(response=>this.handleSuccessfulResponseBean(response))
    }

    retrieveWelcomePathVariablenMessage(){
        console.log("path**")
         HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
         .then(response=>this.handleSuccessfulResponseBean(response))
         .catch(error => this.handleError(error.response.data.message) )
    }

    handleSuccessfulResponse(response){
        console.log(response)
       this.setState({welcomeMessage: response.data})
    }

    handleSuccessfulResponseBean(response){
        console.log(response)
       this.setState({welcomeMessage: response.data.message})
    }
    
    handleError(error){
        console.log(error.response.data.message)
       //this.setState({welcomeMessage: response.data.message})
    }
}
export default WelcomeComponent