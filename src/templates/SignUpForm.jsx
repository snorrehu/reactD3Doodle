import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6


class SignUpForm extends React.Component{

    getInitialState(){
        return { mounted: false };
    }

    componentDidMount(){
        this.setState({ mounted: true });
    }

    handleSubmit(e){
        this.setState({ mounted: false });
        e.preventDefault();
    }

    render(){
        let child;

        if(this.state.mounted) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }

        return(
            <div className="App">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {child}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}