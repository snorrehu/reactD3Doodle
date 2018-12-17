import React, { Component } from 'react';
import Viz from './Viz.js'

export default class Controller extends Component {
    state = {
        color: "",
        width: "",
        toDraw: [],
    };

    onSubmit = (evt) => {
        evt.preventDefault();
        const newShape = {
            category: this.state.category,
            width: this.state.width,
        };
        this.setState({ toDraw: [...this.state.toDraw, newShape]})
    };

    onChange = (evt) => {
        this.setState(
            {[evt.target.name]: evt.target.value})
    };

    render() {
        return(
            <div className="controller">
                <form onSubmit={this.onSubmit}>
                    <label htmlFor="categorySelect">Pick a category:</label>
                    <select id="categorySelect" name="category" onChange={this.onChange} value={this.state.category}>
                        <option value="finance">Finance</option>
                        <option value="executive">Executive</option>
                        <option value="engineering">Engineering</option>
                        <option value="it">IT</option>
                    </select>
                    <label htmlFor="pixelInput">how big:</label>
                    <input id="pixelInput" name="width" onChange={this.onChange} />
                    <button type="submit">draw!</button>
                </form>
                { this.state.toDraw.length ? <Viz shapes={this.state.toDraw}/> : null}
            </div>
        )
    }
}