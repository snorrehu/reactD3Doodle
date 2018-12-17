import React, { Component } from 'react';
import {object} from "./ObjectTemplate";
//------------------------------------------------D3-------------------------------------------------------------
//let Chart = require('react-d3-components').PieChart;

//---------------------------------------------Constants---------------------------------------------------------
const url = "http://amund-bench-api.herokuapp.com/positions/getbycompanyname?companyName=Adecco";

class ComponentTemplate extends Component {

    //First
    constructor(props){
        console.log("Function: constructor");

        super(props);
        this.state = {
        }
    }

    //-----------------------------------------Flow Control------------------------------------------------------
    //Second
    async componentWillMount() {
        console.log("Function: componentWillMount");
        let object = new Object();
        console.log("Before poluation: " + object);


    }
    //Fourth
    componentDidMount() {
        console.log("Function: componentDidMount");
    }

    componentWillUnmount() {
        console.log("Function: componentWillUnmount");
    }

    componentDidCatch(error, errorInfo) {
        console.log("Function: componentDidCatch");

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Function: componentDidUpdate");

    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("Function: componentWillReceiveProps");

    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("Function: componentWillUpdate");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("Function: shouldComponentUpdate");
    }

    //-----------------------------------------------------------------------------------------------------------

    fetchData(url){
        console.log("Function: fetchData");
        fetch(url)
            .then(res => res.json())
    }

    //Third
    render() {
        console.log("Function: render");
        this.fetchData(url);
        return (
            <div>

            </div>
        );
    }
}

export default ComponentTemplate;
