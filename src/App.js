import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './assets/styles/App.css';
import MainSection from './components/mainSection';
import FilterWidget from './components/filterWidget';

class App extends Component {
  constructor(){
    super();
    this.state = {
      filter: {}
    }
  }

  filterProperties = (type,value) => {
    this.setState({
      filter: {type,value}
    })
  }

  resetFilters = () => {
    this.setState({filter: {}})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div style={{"borderBottom": "1px solid #e5e5e5"}}>
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <FilterWidget filterProperties={this.filterProperties} resetFilters={this.resetFilters}/>
        </div>
        <MainSection filter={this.state.filter}/>
      </div>
    );
  }
}

export default App;
