import React, { Component } from 'react';
import './styling/App.css';
import D3ChartComponentTemplate from './templates/D3ChartComponentTemplate';
import ComponentTemplate from './templates/componentTemplate'
import SimpleLineChart from './d3/SimpleLineChart/SimpleLineChart';

class App extends Component {
    componentDidMount() {
        console.log("App - function: componentDidMount");
    }
  render() {
      console.log("App - function: render()");
    return (
        <div className="center-div">
            <SimpleLineChart/>
        </div>

    );
  }
}

export default App;

