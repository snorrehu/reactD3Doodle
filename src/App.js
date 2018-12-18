import React, { Component } from 'react';
import './styling/App.css';
import ComponentTemplate from './components/componentTemplate'

class App extends Component {
    componentDidMount() {
        console.log("App - function: componentDidMount");
    }
  render() {
      console.log("App - function: render()");
    return (
        <div className="center-div">
            <svg>
                <ComponentTemplate/>
            </svg>
        </div>

    );
  }
}

export default App;

