import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Palette from './components/Palette/Palette.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette />
      </div>
    );
  }
}

export default App;
