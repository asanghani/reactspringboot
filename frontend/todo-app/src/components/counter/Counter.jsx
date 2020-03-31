import React, {Component} from 'react';
import  './Counter.css'


class Counter extends Component{

    //Define the intial state in a constructor
    constructor(){
        super();
        this.state = {
            counter:0
        }

        this.increment = this.increment.bind(this);
    }

    render(){
    return(
        <div className="counter">
           <button onClick={this.increment}>+1</button>
    <span className="count">{this.state.counter}</span>
        </div>
    )
}
     increment(){
      this.setState({
          counter:this.state.counter + 1
      })

        // console.log('increment');
    }
}

export default Counter