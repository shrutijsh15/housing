import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './assets/styles/App.css';
import MainSection from './components/mainSection';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <MainSection/>
      </div>
    );
  }
}

export default App;
