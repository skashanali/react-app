import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    // one technique for rendering content conditionally
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            // other technique for rendering content conditionally
            <React.Fragment>
                {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()}
            </React.Fragment>
        );
    }
}

export default Counter;
