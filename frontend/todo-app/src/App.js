import React, { Component } from 'react';
import FirstComponent  from './components/lerning-example/FirstComponent'
import SecondComponent  from './components/lerning-example/SecondComponent'
import ThirdComponent  from './components/lerning-example/ThirdComponent'
import Counter from './components/counter/Counter'
import logo from './logo.svg';
import './App.css';
 
class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Counter></Counter>
      
      </div>
    );
  }
}

class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
      </div>
    )
  }
}
 export default App;

















//Old code//
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
