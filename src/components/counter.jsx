import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // imageUrl: 'https://picsum.photos/200' // random 200x200 image
    tags: ["tag1", "tag2", "tag3"]
  };

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
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
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
