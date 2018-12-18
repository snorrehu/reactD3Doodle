import React, { Component } from 'react'
import * as d3 from 'd3';

const margin = {top: 50, right: 50, bottom: 50, left: 50}
    , width = window.innerWidth - margin.left - margin.right // Use the window's width
    , height = window.innerHeight - margin.top - margin.bottom; // Use the window's height

class SimpleLineChart extends Component {
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

        const n = 21;

        const xScale = d3.scaleLinear()
            .domain([0, n-1]) // input
            .range([0, width]); // output

        const yScale = d3.scaleLinear()
            .domain([0, 1]) // input
            .range([height, 0]); // output

        const line = d3.line()
            .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
            .y(function(d) { return yScale(d.y); }) // set the y values for the line generator
            .curve(d3.curveMonotoneX) // apply smoothing to the line

        const dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })

        const svg = d3.select(node).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

        svg.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

        svg.append("path")
            .datum(dataset) // 10. Binds data to the line
            .attr("class", "line") // Assign a class for styling
            .attr("d", line); // 11. Calls the line generator

        svg.selectAll(".dot")
            .data(dataset)
            .enter().append("circle") // Uses the enter().append() method
            .attr("class", "dot") // Assign a class for styling
            .attr("cx", function(d, i) { return xScale(i) })
            .attr("cy", function(d) { return yScale(d.y) })
            .attr("r", 5)
            .on("mouseover", function(a, b, c) {
                console.log(a);
            })
            .on("mouseout", function() {  })
    }
    render() {
        return <svg width={window.innerWidth} height={window.innerHeight} ref={node => this.node = node}/>
    }
}
export default SimpleLineChart