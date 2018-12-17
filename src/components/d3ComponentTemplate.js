import React, { Component } from 'react';
import './d3Template.css';

//------------------------------------------------D3-------------------------------------------------------------
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
//---------------------------------------------Constants---------------------------------------------------------
const RD3Component = rd3.Component;

let node = document.createElement('div');





//-----------------------------------------------Class-----------------------------------------------------------
class D3ComponentTemplate extends Component {

    //First
    constructor(props){
        console.log("Function: constructor");

        super(props);
        this.state = {
            d3: ''
        };

    }

    //-----------------------------------------Flow Control------------------------------------------------------
    //Second
    componentWillMount() {
        console.log("Function: componentWillMount");
        this.setState({
            d3: node
        })
    }
    //Fourth
    componentDidMount() {
        console.log("Function: componentDidMount");
        console.log(this.state.d3)
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

    //Third
    render() {

        console.log("Function: render");
        return (
            <div>
                <RD3Component data={this.state.d3}/>
            </div>

        );
    }
}

export default D3ComponentTemplate;
