import React, { Component } from 'react'
import { select } from 'd3-selection'

class D3ChartComponentTemplate extends Component {
    constructor(props){
        super(props);
        this.createChart = this.createChart.bind(this)
    }
    componentDidMount() {
        this.createChart()
    }
    componentDidUpdate() {
        this.createChart()
    }
    createChart() {
        const node = this.node;
        //Select SVG element
        let svg = select(node);
        //Create simple rectangle element inside SVG
        svg.append('rect')
            .attr('x', 50)
            .attr('y', 50)
            .attr('width', 500)
            .attr('height', 100)
            .attr('fill', 'green');
    }
    render() {
        return <svg ref={node => this.node = node}/>
    }
}
export default D3ChartComponentTemplate