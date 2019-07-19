import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
        // imageUrl: 'https://picsum.photos/200' // random 200x200 image
    };

    // one technique for solving this reference issue 
    /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this); // one way for binding this to event handler
    } */

    // obj.method --> this refers to obj
    // function(); --> in direct function call this refers to window object but in strict mode it is undefined

    // other technique for solving this reference issue is by using arrow function
    /* handleIncrement() {
        console.log("increment clicked", this);
    } */

    // arrow functions don't rebind this they inherit it
    handleIncrement = () => {
        console.log("increment clicked", this);
    }

    render() {
        return (
            // <img src={this.state.imageUrl} alt=""/>
            //   style = {{ fontSize:10 }} --> for inline styling direct css
            /*
                styles = {
                    fontSize: 10, // will automatically be converted to 10px
                    fontWeight: "bold"
                };
                style = {this.styles}} --> for direct inline styling using object
            */
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
                    Increment
                </button>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;

/*
function Counter() {
    return (
        <div>
      <h1>Hello World</h1>
      <button>Increment </button>
      </div>
      );
    }
    
export default Counter;
*/
