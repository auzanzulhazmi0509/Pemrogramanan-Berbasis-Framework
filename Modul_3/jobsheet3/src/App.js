import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import Header from './Header';
import Footer from './Footer';
import List from './List';

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

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h1>Component dari class App</h1>
        <List/>
        <Footer judul='Halaman Footer' nama='Auzan Ihtifazhuddin'/>
      </div>
    );
  }
}

export default App;
