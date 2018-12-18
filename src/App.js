import React, { Component } from 'react';
import './styling/App.css';
import D3ComponentTemplate from './components/d3ComponentTemplate';
//import ComponentTemplate from './components/componentTemplate'

class App extends Component {
    componentDidMount() {
        console.log("App - function: componentDidMount");
    }
  render() {
      console.log("App - function: render()");
    return (
        <div className="center-div">
            App
            <D3ComponentTemplate/>
        </div>

    );
  }
}

export default App;

