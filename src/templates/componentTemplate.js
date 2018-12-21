import React, { Component } from 'react';
import {MyObject} from "./ObjectTemplate";

//---------------------------------------------Constants---------------------------------------------------------
class ComponentTemplate extends Component {

    //First
    constructor(props){
        console.log("Function: constructor");
        super(props);
        this.state = {
            jsonArray: []
        };
    }

    //-----------------------------------------Flow Control------------------------------------------------------

    //Second
    async componentWillMount() {
        console.log("Function: componentWillMount");
        this.setState({
            jsonArray: await new MyObject()
        });
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
        return true;
    }

    //-----------------------------------------------------------------------------------------------------------

    //Third
    render() {
        console.log("Function: render");
        return (
            <div>
                Hello World!
            </div>
        );
    }
}

export default ComponentTemplate;
