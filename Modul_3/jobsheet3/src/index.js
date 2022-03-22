import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Auzan from './Auzan';

import Login from './Login';

// import HelloComponent from './HelloComponent';
import reportWebVitals from './reportWebVitals';

// function HelloComponent () {
//   return HelloComponent
// }
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function HelloComponent () {
//   return HelloComponent
// }

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

class StateFullComponent extends React.Component{
  render(){
    return <p>StateFullComponent</p>
  }
}

ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<Auzan />, document.getElementById('root'));

// ReactDOM.render(<HelloComponent />, document.getElementById('root'));

ReactDOM.render(<Login/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
