import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };
    handleIncrement = prod => {
        console.log(prod);
        // for reflecting state change on view we use setState method i.e we are setting state again
        this.setState({ value: this.state.value + 1 });
    };

    // one way for passing argument to event other is by direct inline method
    /* doHandleIncrement = () => {
        this.handleIncrement({ id: 1 });
    }; */

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => {
                        this.handleIncrement({ id: 1 });
                    }}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
