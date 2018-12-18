import React, { Component } from 'react';
import './d3Template.css';

//------------------------------------------------D3-------------------------------------------------------------
import rd3 from 'react-d3-library';
import * as d3 from 'd3';
//---------------------------------------------Constants---------------------------------------------------------
const RD3Component = rd3.Component;

let node = document.createElement('svg');

let svg = d3.select(node);
svg.append('rect')
    .attr('x', 50)
    .attr('y', 50)
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'green');

//-----------------------------------------------Class-----------------------------------------------------------
class D3ComponentTemplate extends Component {

    //First
    constructor(props){
        console.log("d3ComponentTemplate - function: constructor");

        super(props);
        this.state = {
            d3: ''
        };

    }

    //-----------------------------------------Flow Control------------------------------------------------------
    //Second
    componentWillMount() {
        console.log("d3ComponentTemplate - function: componentWillMount");
        console.log(node);
        this.setState({
            d3: node
        })
    }
    //Fourth
    componentDidMount() {
        console.log("d3ComponentTemplate - function: componentDidMount");
    }

    componentWillUnmount() {
        console.log("d3ComponentTemplate - function: componentWillUnmount");
    }

    componentDidCatch(error, errorInfo) {
        console.log("d3ComponentTemplate - function: componentDidCatch");

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("d3ComponentTemplate - function: componentDidUpdate");

    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("d3ComponentTemplate - function: componentWillReceiveProps");

    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("d3ComponentTemplate - function: componentWillUpdate");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("d3ComponentTemplate - function: shouldComponentUpdate");
    }

    //-----------------------------------------------------------------------------------------------------------

    //Third
    render() {
        console.log("d3ComponentTemplate - function: render()");
        return (
            <div>
                <RD3Component data={this.state.d3}/>
            </div>
        );
    }
}

export default D3ComponentTemplate;
