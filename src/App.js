import React, { Component } from 'react';
import './styling/App.css';
import D3ChartComponentTemplate from './components/D3ChartComponentTemplate';
import ComponentTemplate from './components/componentTemplate'

class App extends Component {
    componentDidMount() {
        console.log("App - function: componentDidMount");
    }
  render() {
      console.log("App - function: render()");
    return (
        <div className="center-div">
            <D3ChartComponentTemplate/>
        </div>

    );
  }
}

export default App;

