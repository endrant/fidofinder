import React, { Component } from 'react';
import './App.css';
import Home from './api/home';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
      </div>
    );
  }
}

export default App;
