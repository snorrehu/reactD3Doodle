import React, { Component } from 'react';
import './styling/App.css';
//import D3ComponentTemplate from './components/d3ComponentTemplate';
import ComponentTemplate from './components/componentTemplate'

class App extends Component {
  render() {
      console.log("App - function: render()");
    return (
        <div className="center-div">
            <ComponentTemplate/>
        </div>

    );
  }
}

export default App;

