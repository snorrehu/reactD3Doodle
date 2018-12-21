import React, { Component } from 'react';
import './styling/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import D3ChartComponentTemplate from './templates/D3ChartComponentTemplate';
import ComponentTemplate from './templates/componentTemplate'
import SimpleLineChart from './d3/SimpleLineChart/SimpleLineChart';
import NavBarTemplate from './templates/NavBarTemplate';

export default class App extends Component {

  render() {
      console.log("App - function: render()");
    return (
        <Router>
            <div>
                <NavBarTemplate/>
                <Route exact path="/plainComponent" component={ComponentTemplate}></Route>
                <Route path="/simpleLineChart" component={SimpleLineChart}></Route>
            </div>
        </Router>

    );
  }

};

